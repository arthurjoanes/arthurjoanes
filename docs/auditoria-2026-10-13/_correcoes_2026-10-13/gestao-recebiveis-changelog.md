# Correções — gestao-recebiveis

Alterações locais; nenhum commit, push ou PR. Cada ID abaixo foi corrigido e validado no escopo declarado.

## REC-01 — P1

Áreas, IDs, filtros e origem de retorno passam a ter URL validada, links reais e integração com Voltar/Avançar. Login retoma o endereço; rascunho e intenção de pagamento continuam separados, sem reenvio automático. Foco dos filtros é restaurado após aplicar a URL.

Arquivos: `frontend/src/lib/workspace-route.tsx`, `frontend/src/features/workspace.tsx`, `frontend/src/components/workspace-navigation.tsx`, `frontend/src/features/overview.tsx`, `frontend/src/features/receivables.tsx`, `frontend/src/features/reports.tsx`, `frontend/src/features/receivable-detail.tsx`, `frontend/src/components/responsive-filters.tsx`, `frontend/src/app/globals.css`, `frontend/tests/workspace-navigation.spec.ts`, `frontend/tests/journey.spec.ts`, `frontend/tests/payments-reports.spec.ts`, `frontend/tests/session-safety.spec.ts`, `frontend/tests/uiux-accessibility.spec.ts`, `frontend/tests/uiux-financial.spec.ts`, `docs/frontend-quality.md`.

Validação: Playwright: link direto com login, filtros, detalhe, reload, Voltar/Avançar e nova aba; nenhuma mutação além do login no cenário sintético. 14 fluxos Chromium de pagamentos/relatórios/acessibilidade/navegação aprovados; 8 testes de sessão aprovados, incluindo resposta atrasada após troca de conta e timeout sem reenvio. npm run lint, npm run typecheck e npm run build aprovados.

Limites: O cenário específico de histórico/nova aba usa respostas sintéticas determinísticas; os fluxos financeiros e de sessão usam PostgreSQL/API locais descartáveis. Firefox não executou: download falhou por timeout e o executável continuou ausente. Não foi contado como aprovação.

## REC-02 — P1

Selecionar faixa de aging fixa Situação em Em aberto, desabilita combinações incompatíveis e apresenta explicação associada ao controle. Entrada por URL também é normalizada; submit conserva o contrato financeiro da API.

Arquivos: `frontend/src/features/receivables.tsx`, `frontend/src/lib/workspace-route.tsx`, `frontend/tests/workspace-navigation.spec.ts`, `frontend/tests/payments-reports.spec.ts`.

Validação: Playwright: URL com paid + 1_30 resulta em open, controle desabilitado e requisição válida; drill-down real de aging conserva faixa/saldo aberto. Suíte backend completa aprovada sem alterar a validação financeira de filtros.

## REC-03 — P2

Breakpoint 901–1100 fica depois das regras base e das faixas concorrentes; a declaração contraditória de 190px foi removida.

Arquivos: `frontend/src/app/financial-workspace.css`, `frontend/tests/workspace-navigation.spec.ts`.

Validação: Computed styles em 900, 901, 1024, 1100 e 1101px: uma coluna externa até 1100; duas depois. No tablet filtros grid em duas colunas; sem overflow global. Cenários reais de acessibilidade e relatórios passaram em cinco larguras, incluindo foco e operações financeiras.

## REC-04 — P2

GET /api/v2 fornece resumos de títulos sem arrays de pagamentos e detalhe com paginação independente de pagamentos/eventos/lembretes, total e saldo globais. Leitura autenticada em snapshot REPEATABLE READ/READ ONLY. Frontend migra esses GETs para v2 e oferece paginação; mutações e clientes v1 mantêm contrato.

Arquivos: `backend/src/gestao_recebiveis/app.py`, `backend/src/gestao_recebiveis/routes.py`, `backend/src/gestao_recebiveis/reporting.py`, `backend/src/gestao_recebiveis/responses.py`, `backend/src/gestao_recebiveis/views.py`, `backend/tests/test_v2_read_contract.py`, `frontend/src/lib/api.ts`, `frontend/src/lib/types.ts`, `frontend/src/features/receivable-detail.tsx`, `docs/api-read-v2.md`, `docs/api-contract.md`.

Validação: PostgreSQL real: 205 pagamentos; listagem/aging/títulos do extrato sem histórico; páginas do detalhe com no máximo 100, sem perdas/duplicações; saldo/total iguais ao agregado integral. Limite 101 retorna 422; v1 conserva os 205 pagamentos por compatibilidade. Suíte backend:220 passaram. 14 fluxos Chromium aprovados; revisão independente de API/consumidores não encontrou regressão concreta.

Limites: v1 mantém histórico integral por compatibilidade: a garantia de materialização limitada aplica-se à v2. Paginação por offset tem snapshot consistente por requisição; não congela alterações entre requisições distintas, conforme guia.

## REC-05 — P2

axe-core 4.13.0 passa a ser dependência dev direta no manifesto/lock, resolvida por require.resolve. Playwright permite saídas de QA fora do repositório.

Arquivos: `frontend/package.json`, `frontend/package-lock.json`, `frontend/tests/uiux-accessibility.spec.ts`, `frontend/playwright.config.ts`.

Validação: Instalação limpa em _correcoes_2026-10-13/rec-clean-install: npm ci --ignore-scripts instalou 348 pacotes; createRequire resolveu axe-core direto 4.13.0. Cenário real de axe de relatórios/confirmacão passou nas cinco larguras em Chromium; lint/tipos/build aprovados.

Limites: npm audit registra 5 nós high referentes a 1 advisory de braces 3.0.3 na cadeia de desenvolvimento já existente. Ressalva separada dos 47 achados; sem downgrade/force. A exclusão do node_modules temporário foi rejeitada pela revisão automática de aprovação ('blocked by policy'); pasta preservada.

## REC-06 — P2

Rótulos das cinco faixas são centralizados e reutilizados por controles/resumos; contagens usam singular/plural e partes vazias são removidas.

Arquivos: `frontend/src/lib/format.ts`, `frontend/src/features/receivables.tsx`, `frontend/src/features/reports.tsx`, `frontend/tests/workspace-navigation.spec.ts`.

Validação: Playwright puro: cinco faixas traduzidas e contagens 0/1/2 aprovadas. DOM da consulta sintética mostra Aging: 1–30 dias e 1 título; testes reais de relatórios também passaram.

## REC-07 — P2

Roteiro de atualização identifica e71c2f, locks, validação dos saldos legados, mudanças no contrato de pagamentos, recusa explícita de inconsistência e limites do downgrade; conserva parada dos escritores/backup.

Arquivos: `docs/security.md`.

Validação: Probe integrado de upgrade em banco PostgreSQL separado: IDs, timestamps, hashes e 48 recibos legados preservados/reexecutados; parcelas suportadas; upgrade inconsistente e downgrade destrutivo recusados; provisionamento idempotente. Conferência do texto com migração e71c2f sem alterar o arquivo da migração.

Limites: Somente bancos descartáveis; nenhuma instalação real foi migrada.

## REC-08 — P2

Validador reutilizável rejeita NUL em textos persistidos/consultados: e-mail, nota, chave idempotente, motivo, busca e nome do upload. A recusa ocorre antes do domínio/INSERT e não normaliza senha ou chave. CSV continua com suas guardas existentes.

Arquivos: `backend/src/gestao_recebiveis/schemas.py`, `backend/src/gestao_recebiveis/routes.py`, `backend/src/gestao_recebiveis/imports.py`, `backend/tests/test_field_matrix.py`.

Validação: Matriz HTTP/PostgreSQL:422 para JSON/query/filename multipart com NUL real; saldo, pagamentos e auditoria permanecem iguais após recusa. Acentos, emoji e multilinha permitidos aceitos; full suite backend 220 passaram. Revisão independente validou guard de filename antes de ImportBatch.

## Recibos e limites gerais

- rec-full.xml
- rec-upgrade.log
- rec-live-report2/index.html
- rec-session.log
- rec-session-final.log
- rec-session-final-report/index.html
- rec-lint-final.log
- rec-types-final.log
- rec-build-final.log
- rec-npm-audit.json
- data-billing-cleanup.json

14 aprovados / 15 selecionados; Firefox não iniciou por executável ausente após download com timeout de 30 s e 120 s. Sem aprovação implícita desse navegador.
Verificações Chromium executadas com API/PostgreSQL descartáveis; não foi executada a jornada completa do worker/entrega de mensagens.
Dependências: 5 nós dev high do advisory GHSA-vfj7-8cjw-p6xm em braces 3.0.3; ressalva adicional, não um dos 47 achados. Fonte oficial: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm .
Banco/servidores descartáveis removidos/parados; node_modules da instalação limpa preservado por rejeição automática de aprovação.
