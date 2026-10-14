import json
from pathlib import Path
from fastapi.testclient import TestClient
from evidencedesk.app import create_app

client = TestClient(create_app())
response = client.post("/api/v1/auth/login", content=b"x" * (512 * 1024 + 1), headers={"Content-Type": "application/json"})
result = {
 "status": response.status_code,
 "code": response.json()["error"]["code"],
 "body_request_id": response.json()["error"]["request_id"],
 "header_request_id": response.headers["x-request-id"],
 "ids_match": response.json()["error"]["request_id"] == response.headers["x-request-id"],
 "limitation": "Single in-process rejected request. No database/network, no Docker and no load test."
}
Path(__file__).with_suffix(".json").write_text(json.dumps(result, indent=2), encoding="utf-8")
print(json.dumps(result))

