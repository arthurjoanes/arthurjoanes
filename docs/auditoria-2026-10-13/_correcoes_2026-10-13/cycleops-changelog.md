# Correções — cycleops

Alterações locais; nenhum commit, push ou PR foi criado.

## CYC-01 — P1

Carregamento confere SHA-256 do catálogo e dos eventos descomprimidos contra o manifesto antes de decodificar os bytes; validações estruturais permanecem.

Arquivos: `apps/web/src/streams/artifact.ts`, `apps/web/tests/unit/artifact-loading.test.ts`, `apps/web/tests/unit/logic.test.ts`, `apps/web/tests/unit/diagnostics.test.ts`.

Validação: Mutações de catálogo e eventos ainda válidas pelo schema são rejeitadas por hash; testes demonstraram a falha antes da correção. 118 testes frontend passaram, incluindo gzip como arquivo e como content-encoding; seis regressões de BOM cobrem catálogo, eventos e diagnósticos.

## CYC-02 — P1

Alternância entre análise e mapa usa grupo de botões com aria-pressed, estado selecionado e operação nativa por teclado.

Arquivos: `apps/web/src/app/App.tsx`, `apps/web/tests/e2e/uiux.spec.ts`, `apps/web/tests/e2e/pages.spec.ts`, `apps/web/tests/media/identity.spec.ts`.

Validação: 23 testes Playwright passaram, incluindo Tab/Shift+Tab/Enter/Espaço em 320 e 390 px, foco visível e axe.

## CYC-03 — P2

CONTRIBUTING e a instrução local descrevem o contrato determinístico com atualização do estado em memória, cópia pelo chamador quando necessária e ausência de logging no motor.

Arquivos: `CONTRIBUTING.md`, `AGENTS.md (arquivo local ignorado pelo Git)`.

Validação: Descrição confrontada com o motor e seus testes; 118 testes frontend passaram sem alterar o contrato do motor.

Limites: AGENTS.md é ignorado pelo repositório; a orientação publicada está em CONTRIBUTING.md.

## CYC-04 — P2

Configuração rejeita quotas não finitas e não positivas antes de inicializar o worker.

Arquivos: `apps/backend/src/cycleops/worker/main.py`, `apps/backend/tests/test_worker_main.py`.

Validação: NaN, inf, -inf, 1e999, zero e negativo recusados; 0.5 e 1024 aceitos. 30 testes de configuração e arquivo bruto passaram; Ruff e mypy aprovados.

## CYC-05 — P2

Documentação identifica limpeza ao abrir arquivo, unidade 500 MiB e preservação do arquivo ativo, que pode crescer entre rotações.

Arquivos: `SECURITY.md`, `apps/backend/src/cycleops/worker/archive.py`.

Validação: Política confrontada com implementação; testes de rotação, retenção e arquivo ativo preservados e aprovados.
