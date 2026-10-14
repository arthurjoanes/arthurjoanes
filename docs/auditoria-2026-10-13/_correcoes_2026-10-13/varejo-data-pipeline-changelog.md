# Correções — varejo-data-pipeline

Alterações locais; nenhum commit, push ou PR. Cada ID abaixo foi corrigido e validado no escopo declarado.

## VDP-01 — P1

Tentativas são ordenadas pelo started_at persistido, validado e convertido para UTC, com run_id como desempate estável; registros ausentes/inválidos/sem fuso são recusados explicitamente. O guia explica ordem de início e tratamento de registros legados.

Arquivos: `src/retail_pipeline/reporting.py`, `tests/unit/test_report_publication.py`, `docs/state-recovery.md`.

Validação: Backup/restauração reais make_archive/restore_archive com IDs inversos à cronologia e mtimes iguais preservam latest/last_failed; fusos equivalentes e desempate testados. Datas ausentes/inválidas/sem fuso recusadas; suíte Linux 412 aprovados e testes Windows direcionados.

## VDP-02 — P1

HTML completo é escrito em temporário no mesmo diretório, seguido de flush/fsync, preservação POSIX de dono/grupo/modo, replace e fsync do diretório. Falhas anteriores ao replace preservam o documento anterior e removem temporário. Primeira publicação 0644 permite leitura pelo UID 65534 sem ampliar permissões de arquivos existentes.

Arquivos: `src/retail_pipeline/reporting.py`, `tests/unit/test_report_publication.py`, `tests/unit/test_report_server.py`.

Validação: Erro de replace e fchown mantém bytes anteriores e limpa temporário; modo 0640 e ownership 1000:1001 preservados em Linux/root isolado. Subprocesso com grupos vazios/UID 65534 lê o novo HTML. Requisição HTTP intercalada com substituição retorna documento antigo íntegro/Content-Length correto; requisição seguinte recebe novo documento íntegro. Suíte Linux 412 passaram; mypy e Ruff aprovados.

Limites: Provas de ownership/modo/leitor POSIX são Linux; Windows não é tratado como validação de DACL. Falha em preservar ownership mantém o arquivo anterior e propaga erro. A prova de concorrência é intercalada deterministicamente, sem benchmark de carga.

## VDP-03 — P1

Pacote tools/browser versiona Playwright 1.64.0 e @axe-core/playwright 4.13.0 com lock; scripts resolvem módulos pelo pacote. CI instala navegador e renderiza/exercita publicação, bloqueio, ausência e comparação sem Spark; guia inclui comandos completos. Espera de fontes usa document.fonts.ready com prazo.

Arquivos: `tools/browser/package.json`, `tools/browser/package-lock.json`, `scripts/dashboard-review.cjs`, `scripts/profile-report-review.cjs`, `.github/workflows/ci.yml`, `docs/frontend-quality.md`, `.gitignore`, `.dockerignore`.

Validação: npm ci --prefix tools/browser: 4 pacotes, 0 vulnerabilidades; Chromium instalado pelo pacote versionado. Renderer atual produziu 22 fixtures; amostra de 4 estados/5 larguras: 555 checks, 0 falhas, 4 scans axe, 10 capturas; sem pageerror ou requisição remota. Controle negativo: KPI alterado em cópia ignorada produz exit 1 e 2 falhas esperadas em 199 checks, demonstrando gate sensível à regressão. Revisão independente verificou workflow/pacote/lock/resolução e os quatro casos de CI.

Limites: Workflow foi revisado e comandos equivalentes executados localmente; GitHub Actions não foi disparado, pois não houve push. Recibos visuais são fixtures sintéticas/históricas renderizadas pelo código atual; não provam uma execução nova de Spark/Delta.

## VDP-04 — P2

Parâmetros de testes de JAR agora usam IDs portáveis invalid-root e over-limit; payloads hostis e asserções permanecem intactos.

Arquivos: `tests/unit/test_rebuilt_jars.py`.

Validação: Testes direcionados passaram no Windows e suíte unitária completa passou no Linux; casos de conteúdo inseguro continuam exercitados.

Limites: A correção trata nomes de casos/paths no teste, sem mudar a plataforma de produção Linux.

## Recibos e limites gerais

- vdp-linux-final.log
- vdp-windows-final.log
- vdp-targeted.xml
- vdp-browser-final/dashboard-review.json
- vdp-browser-final/summary.json
- vdp-browser-negative/dashboard-review.json
- vdp-browser-negative/summary.json
- data-billing-cleanup.json

Testes reais Linux de filesystem/UID/HTTP e unitários, além de fixtures offline no navegador; sem execução nova de Spark/Delta e sem build da imagem Docker completa.
CI foi implementado/revisado e seus comandos de navegador reproduzidos localmente; não houve push para disparar GitHub Actions.
