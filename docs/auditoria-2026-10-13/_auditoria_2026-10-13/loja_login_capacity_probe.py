import json
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
from threading import Barrier, Lock
from unittest.mock import patch
import anyio
from fastapi import HTTPException, Request, Response
from sqlalchemy import create_engine, select
from sqlalchemy.orm import Session
from sqlalchemy.pool import QueuePool
from loja_assistente.auth import admission, routes, service
from loja_assistente.database import engine

N = 15
barrier = Barrier(N, timeout=10)
guard = Lock()
active = maximum = 0

class FakeDB:
    def scalar(self, statement):
        return None

def verification_stub(password, password_hash):
    global active, maximum
    with guard:
        active += 1
        maximum = max(maximum, active)
    try:
        barrier.wait()
        return False
    finally:
        with guard:
            active -= 1

def invoke(index):
    request = Request({"type":"http", "method":"POST", "path":"/api/auth/login", "headers":[(b"origin", b"http://localhost:3102")], "client":("127.0.0.1", 10000 + index)})
    try:
        routes.login(routes.LoginRequest(email=f"probe-{index}@example.invalid", password="synthetic"), request, Response(), FakeDB())
    except HTTPException as exc:
        return exc.status_code

async def runtime_capacity():
    return anyio.to_thread.current_default_thread_limiter().total_tokens

with patch.object(routes, "admit_login", return_value=[]), patch.object(routes, "verify_password", side_effect=verification_stub):
    with ThreadPoolExecutor(max_workers=N) as workers:
        statuses = list(workers.map(invoke, range(N)))

# Demonstrate ORM transaction/connection lifetime without PostgreSQL or real credentials.
sqlite = create_engine("sqlite://", poolclass=QueuePool)
with Session(sqlite) as session:
    session.scalar(select(1))
    retained_after_read = session.in_transaction() and sqlite.pool.checkedout() == 1
    session.rollback()
    released_after_rollback = sqlite.pool.checkedout() == 0

result = {
 "argon_memory_kib": service.password_hasher.memory_cost,
 "argon_parallelism": service.password_hasher.parallelism,
 "argon_time_cost": service.password_hasher.time_cost,
 "configured_pool_size": engine.pool.size(),
 "configured_pool_overflow": engine.pool._max_overflow,
 "anyio_thread_tokens": anyio.run(runtime_capacity),
 "source_admission_limit": admission.SOURCE_LIMIT,
 "account_admission_limit": admission.ACCOUNT_LIMIT,
 "concurrent_stub_verifications": maximum,
 "all_stub_requests_rejected_401": statuses == [401] * N,
 "orm_connection_retained_after_read": retained_after_read,
 "orm_connection_released_after_rollback": released_after_rollback,
 "argon_memory_for_15_mib": N * service.password_hasher.memory_cost / 1024,
 "backend_compose_limit_mib": 768,
 "limitation": "Admission and password work stubbed. No expensive parallel Argon2, PostgreSQL, HTTP load, swap or OOM was executed. Fifteen distinct identities fit the initial per-account and source allowance. Calculation is permitted resource budget, not observed RSS."
}
Path(__file__).with_suffix(".json").write_text(json.dumps(result, indent=2), encoding="utf-8")
print(json.dumps(result))

