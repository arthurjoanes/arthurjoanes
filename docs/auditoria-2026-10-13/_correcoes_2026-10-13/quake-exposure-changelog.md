# Correções — quake-exposure

Alterações locais; nenhum commit, push ou PR foi criado.

## QEX-01 — P1

Parser valida a longitude e a latitude esperadas de cada célula antes de armazenar MMI, preservando tolerância e normalização do antimeridiano.

Arquivos: `src/quakeexposure/domain/grid.py`, `tests/unit/test_grid.py`.

Validação: Troca, repetição e deslocamento de coordenadas internas são rejeitados. 259 testes unitários passaram, incluindo grids reais, oráculo e antimeridiano; fixture externa oficial foi obtida pelo script do projeto e teve seu hash verificado.

## QEX-02 — P1

Consultas à API local têm prazo de 15 segundos cobrindo headers e corpo; mudança de seleção aborta o ciclo anterior. Somente o tick atual agenda a próxima atualização, preservando a última publicação e a recuperação existente.

Arquivos: `web/src/api.ts`, `web/src/refresh.ts`, `web/src/main.ts`, `web/src/api.test.ts`, `web/src/refresh.test.ts`, `docs/operacao.md`.

Validação: 133 testes frontend passaram; TypeScript e build aprovados. Chromium confirmou timeout, preservação da publicação, recuperação automática e aborto de seleção anterior; sem erros de página ou overflow em 320/390/768/1440 px. Capturas desktop e mobile inspecionadas visualmente.

Limites: Navegador usou build local com respostas HTTP simuladas a partir de snapshots; não foi provocada indisponibilidade no USGS. O prazo é da API local; o adaptador da demo estática conserva seu transporte próprio.

## QEX-03 — P2

User-Agent deriva a versão dos metadados do pacote instalado e tem identificação explícita de desenvolvimento quando os metadados não existem.

Arquivos: `src/quakeexposure/ingestion/http.py`, `tests/unit/test_http.py`.

Validação: Teste HTTP com transporte simulado confere o header enviado contra a versão instalada 0.3.0; suíte unitária aprovada.

## QEX-04 — P1

Toda leitura de blob compara o SHA-256 descomprimido com a captura registrada. Reutilização de caminho valida o arquivo existente e preserva conteúdo suspeito. Projeção entra em quarentena e cálculo com grid divergente não é publicado.

Arquivos: `src/quakeexposure/ingestion/blobs.py`, `src/quakeexposure/ingestion/projection.py`, `src/quakeexposure/exposure/worker.py`, `tests/unit/test_blobs.py`, `tests/integration/test_collector.py`, `tests/integration/test_exposure.py`, `docs/operacao.md`.

Validação: Testes cobrem gzip íntegro adulterado, gzip truncado, hash vindo da captura e reutilização de arquivo. 42 integrações de coletor/exposição passaram em PostGIS descartável, incluindo quarentena e recusa de publicação com grid substituído.

Limites: Integrações dirigidas de coletor/exposição; a stack CDC completa não foi reexecutada nesta correção.
