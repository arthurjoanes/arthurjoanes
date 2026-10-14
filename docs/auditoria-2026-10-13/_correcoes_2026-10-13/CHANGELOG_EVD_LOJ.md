# Correções EvidenceDesk e Loja Assistente — 13/10/2026

15 achados corrigidos e validados. Alterações locais; nenhum commit, push, PR ou chamada LLM paga. As evidências históricas dos projetos foram preservadas.

## Evidências da rodada

- EvidenceDesk: 214 testes Python (203 unitários e 11 integrações PostgreSQL), 81 Vitest e 5 cenários Chromium.
- Loja: 485 testes backend. Recibo JUnit adicional de 12 casos focados (subconjunto), e 32 Playwright: 7 com navegador e 25 puros.
- Builds de produção, TypeScript, ESLint e Ruff aprovados. APIs do navegador são interceptadas; backend foi validado separadamente em PostgreSQL descartável.
- Recibos, comandos e limites: [apps-final-validation.json](apps-final-validation.json). Logs de testes e JUnit estão nesta pasta.
- A migração Loja `0006_query_intents` foi validada em banco descartável. Instalações reais devem aplicar `alembic upgrade head` no processo de implantação.

## evidencedesk

HEAD preservado: `e4dd8efe73e50999b9a75896ce74b75d460223da`.

### EVD-01 — Revisão devolvida oferece um envio que o servidor sempre recusa

Envio aparece somente para rascunho. Revisão devolvida oferece Preparar nova revisão com o motivo preservado, reutilizando o editor e a revisão-base imutável.

Validação: Playwright sobre build de produção: motivo visível, envio direto ausente e editor de nova revisão acessível. Integração PostgreSQL: criar, submeter, devolver, recusar submissão da antiga com 409 revision_not_draft, criar rascunho sucessor e submeter com sucesso.

Arquivos: `frontend/src/features/dossiers/dossier-view.tsx`, `frontend/e2e/audit-regressions.spec.ts`, `backend/tests/integration/test_audit_recovery.py`, `docs/api-contract.md`.

Limites: O percurso de servidor e o de interface foram testados separadamente; os testes de navegador usam API sintética interceptada.

### EVD-02 — Exportação expirada quebra o schema e a mesma tela não cria uma nova tentativa após falha

Contrato aceita expired. Polling encerra em failed/cancelled/expired, mensagens existem sem error e uma ação explícita cria nova chave após término confirmado. Transporte incerto conserva a chave; exportação concluída é reconsultada no vencimento.

Validação: Vitest: schemas aceitam failed, cancelled e expired. Playwright: três cenários terminais sem spinner infinito; perda da primeira resposta conserva chave no segundo POST, e nova exportação terminal usa outra chave no terceiro.

Arquivos: `frontend/src/lib/contracts.ts`, `frontend/src/features/dossiers/dossier-view.tsx`, `frontend/src/lib/audit-contracts.test.ts`, `frontend/e2e/audit-regressions.spec.ts`, `docs/api-contract.md`.

Limites: Não foi produzido arquivo de exportação real nesta rodada; perda de resposta e estados terminais foram injetados na API do navegador.

### EVD-03 — Criação inicial de importação não pode ser repetida com segurança após resposta perdida

POST /imports recebe Idempotency-Key opcional e reutiliza a reserva transacional existente, com escopo tenant/ator/operação e fingerprint do corpo. A UI cria a chave antes da primeira requisição e a conserva para o mesmo manifesto.

Validação: PostgreSQL: repetir criação já commitada retorna o mesmo lote, exatamente um registro e uma reserva; manifesto diferente com a mesma chave retorna 409. Playwright: primeiro POST abortado e segundo POST com a mesma chave retomam upload/finalização e abrem o lote.

Arquivos: `backend/src/evidencedesk/ingestion/routes.py`, `backend/src/evidencedesk/ingestion/service.py`, `frontend/src/features/imports/new-import.tsx`, `backend/tests/integration/test_audit_recovery.py`, `frontend/e2e/audit-regressions.spec.ts`, `docs/api-contract.md`.

Limites: Clientes antigos sem cabeçalho continuam aceitos, sem garantia de replay; isso está documentado. A chave da UI dura durante a instância da tela; recarregar toda a página não foi transformado em retomada persistente nesta correção.

### EVD-04 — Recortes antigos ficam inacessíveis no seletor quando há mais de 50 snapshots

Flag de truncamento preservada no contrato. Endpoint paginado de snapshots usa cursor assinado por tenant/usuário/incidente e desempate data/ID, reautoriza cada leitura. Seletor carrega páginas anteriores e conserva a opção selecionada.

Validação: PostgreSQL: 56 snapshots, incluindo empates de timestamp, sem repetição ou omissão; cursor de outro escopo recusado e grant revogado impede nova leitura. Playwright: carregamento de página anterior e seleção de recorte antigo funcionam.

Arquivos: `backend/src/evidencedesk/incidents/routes.py`, `frontend/src/lib/contracts.ts`, `frontend/src/features/incidents/snapshot-select.tsx`, `frontend/src/features/incidents/incident-workspace.tsx`, `backend/tests/integration/test_audit_recovery.py`, `frontend/e2e/audit-regressions.spec.ts`, `docs/api-contract.md`.

Limites: A fixture de navegador modela páginas sintéticas; a segurança e a ordenação real foram verificadas separadamente em PostgreSQL.

### EVD-05 — Erros nas listas de lacunas não identificam qual campo ou alegação precisa de ajuste

As quatro famílias de listas usam Controller com ref, erro associado, aria-invalid e aria-describedby. IDs de alegações usam field.id; resumo preserva caminho e índice, oferece foco no controle e o envio inválido foca o primeiro erro sem apagar edição.

Validação: Vitest preserva caminhos de erros repetidos. Playwright: 21 linhas na lista geral, 1.001 caracteres na segunda alegação, descrição acessível contextual, foco inicial, foco via resumo e persistência do rascunho. ESLint completo e build de produção com TypeScript passaram após ajustar a chamada do handler para ocorrer no evento.

Arquivos: `frontend/src/features/dossiers/dossier-editor.tsx`, `frontend/src/lib/form-errors.ts`, `frontend/src/lib/audit-contracts.test.ts`, `frontend/e2e/audit-regressions.spec.ts`.

Limites: Asserções acessíveis do Playwright; não foi conduzida sessão manual com leitor de tela.

### EVD-06 — Resumo atribui toda avaliação inconclusiva à falta de cobertura

Agregado passou a dizer avaliações inconclusivas e orienta consultar o motivo individual em Conciliação, preservando as regras detalhadas existentes.

Validação: Playwright: agregado not_evaluable exibe o texto neutro e não exibe sem cobertura suficiente; testes unitários existentes de regras permanecem aprovados.

Arquivos: `frontend/src/features/dossiers/dossier-view.tsx`, `frontend/e2e/audit-regressions.spec.ts`.

Limites: A fixture de UI injeta o agregado; não reconstrói toda a conciliação de conflito de identidade pelo navegador.

### EVD-07 — Erros rejeitados pelo limite de corpo apresentam dois IDs de rastreamento

Limitador reutiliza scope.state.request_id, gerando e guardando fallback somente quando ausente; corpo, cabeçalho e evento http.completed passam a compartilhar o mesmo ID.

Validação: Quatro testes HTTPX da aplicação criada por create_app: corpo declarado excessivo, excesso de bytes efetivos, Content-Length inválido e timeout controlado; ID não vazio coincide em JSON, cabeçalho e log.

Arquivos: `backend/src/evidencedesk/body_limit.py`, `backend/tests/unit/test_request_id_composition.py`.

Limites: Timeout curto artificial no teste; não foi realizado ensaio de rede lenta externa.

## loja-assistente

HEAD preservado: `075ea83a0a7b99ccef5868050609c3c36c4d907f`.

### LOJ-01 — Reenvio de pergunta após resposta perdida pode criar outro resultado e outra chamada paga

Consulta ganhou client_request_id opcional, reserva durável única por tenant/usuário/chave antes da interpretação, fingerprint e recuperação autenticada. Vínculo intenção/resposta é commitado junto com a resposta. UI preserva intenção e pergunta, bloqueia reenvio incerto e recupera pelo ID; nova análise é ação explícita.

Validação: PostgreSQL: mesma chave após commit retorna a mesma resposta e chama a interpretação demo uma vez; corpo divergente recebe 409; nova chave explícita chama outra vez. Falha controlada após admissão deixa reserva durável; replay e recuperação retornam 409 sem repetir interpretação. Migrações de banco vazio e upgrade com dados preexistentes passaram até 0006_query_intents. Playwright: primeira resposta perdida bloqueia novo envio, preserva a intenção e recupera sem segundo POST.

Arquivos: `backend/migrations/versions/0006_query_intents.py`, `backend/src/loja_assistente/models.py`, `backend/src/loja_assistente/assistant/contracts.py`, `backend/src/loja_assistente/assistant/intents.py`, `backend/src/loja_assistente/assistant/routes.py`, `backend/src/loja_assistente/assistant/service.py`, `backend/tests/test_query_intents.py`, `backend/tests/test_migrations.py`, `frontend/src/features/assistant/use-workspace.ts`, `frontend/src/features/assistant/conversation-state.ts`, `frontend/e2e/audit-regressions.spec.ts`, `docs/api-contract.md`.

Limites: Nenhuma chamada LLM real; contagem usa interpretação demo instrumentada e falha sintética. Resultado de uma execução interrompida permanece incerto (409), sem retry automático. Clientes antigos sem client_request_id mantêm o contrato anterior. A intenção da UI reside na instância da tela; recuperação automática após recarregar toda a página não foi adicionada. Migração 0006 testada apenas no PostgreSQL descartável. Atualização de uma instalação real exige executar alembic upgrade head no fluxo de implantação.

### LOJ-02 — Falha de favoritos impede carregar histórico e restaurar esclarecimento pendente

Histórico e favoritos carregam independentemente. Histórico tem loading, erro e recarga próprios, hidrata pending assim que chega e mantém guardas de geração/revisão; erros de autenticação continuam limpando o estado protegido.

Validação: Playwright: 503 somente em favoritos preserva histórico e esclarecimento pendente e mostra erro de favoritos; 503 somente no histórico mostra erro em vez de lista vazia e permite recuperação. Casos de domínio existentes de mudança de identidade e limpeza de análise passaram.

Arquivos: `frontend/src/features/assistant/use-workspace.ts`, `frontend/src/features/assistant/analysis-sidebar.tsx`, `frontend/src/features/assistant/workspace.tsx`, `frontend/e2e/audit-regressions.spec.ts`.

Limites: Falhas injetadas no navegador; nenhum serviço externo foi indisponibilizado.

### LOJ-03 — Limites de 50 conversas e 100 respostas são silenciosos na experiência de histórico

Novos endpoints paginam conversas e mensagens com cursores HMAC vinculados a tenant/usuário/escopo e ordenação por data/ID. Listagem preenche a página com registros autorizados; detalhe reautoriza grants. UI permite carregar e selecionar registros antigos, sem anunciar total inexistente.

Validação: PostgreSQL: 51 conversas empatadas por data, outro tenant omitido, cursor adulterado recusado; 101 respostas sem duplicação/omissão; revogação bloqueia mensagens e remove conversa da listagem. Playwright: conversa da segunda página acessível e resposta anterior selecionável entre 101 opções. Suite completa preserva os contratos antigos usados pelos clientes existentes.

Arquivos: `backend/src/loja_assistente/conversations/pagination.py`, `backend/src/loja_assistente/conversations/routes.py`, `backend/src/loja_assistente/conversations/service.py`, `backend/tests/test_history_pagination.py`, `frontend/src/lib/contracts.ts`, `frontend/src/features/assistant/use-workspace.ts`, `frontend/src/features/assistant/conversation-state.ts`, `frontend/src/features/assistant/analysis-sidebar.tsx`, `frontend/src/features/assistant/workspace.tsx`, `frontend/e2e/audit-regressions.spec.ts`, `frontend/e2e/quality.spec.ts`, `frontend/e2e/round-2-fields.spec.ts`, `docs/api-contract.md`.

Limites: GET /conversations antigo conserva a primeira página para compatibilidade; a UI passou a usar /conversations/page. Não foi feito teste de carga com histórico muito grande.

### LOJ-04 — Filtro pede ao lojista que raciocine sobre uma data final excluída

Formulário edita Até (incluído) e converte datas civis para o fim exclusivo da API. Mesmo início/fim visível representa um dia; mantém 90 dias e trata limite máximo suportado sem depender do fuso local.

Validação: Teste puro cobre ano bissexto, virada do ano, 90/91 dias, vazio e limite 9999-12-30 incluído. Playwright em UTC, America/Los_Angeles e America/Sao_Paulo aceita 29/02/2024 até o mesmo dia visível; 24 testes de domínio existentes passaram.

Arquivos: `frontend/src/features/assistant/period-selection.ts`, `frontend/src/features/assistant/analysis-filters.tsx`, `frontend/e2e/audit-regressions.spec.ts`, `frontend/e2e/round-2-fields.spec.ts`, `docs/interface.md`.

Limites: A UI não admite 9999-12-31 como final incluído porque o contrato exclusivo mantém ano de quatro dígitos; limite declarado no controle.

### LOJ-05 — Histórico e resposta mostram o mesmo horário em fusos diferentes

formatTimestamp compartilhado usa America/Sao_Paulo no histórico e no resultado; mantém dateTime ISO e tooltip indicando o fuso.

Validação: Playwright nos três fusos: instante 2026-10-13T01:30:00Z aparece como 12/10/2026, 22:30 tanto no histórico quanto no resultado.

Arquivos: `frontend/src/lib/format.ts`, `frontend/src/features/assistant/analysis-sidebar.tsx`, `frontend/src/features/analytics/result.tsx`, `frontend/e2e/audit-regressions.spec.ts`, `docs/interface.md`.

Limites: Política de exibição fixa em São Paulo; não foi adicionado seletor de fuso.

### LOJ-06 — Resultados de várias rodadas competem pela leitura rápida no README

README destaca a rodada histórica de UI/UX de 12/10/2026, identifica a composição dos 85 casos e resume as rodadas anteriores de 79 e 69 em tabela. Guia centraliza contexto e distingue recibos históricos da validação atual.

Validação: Leitura cruzada dos recibos preservados e contagens: rodada principal 477 backend/57 avaliação/85 Playwright (41 puros e 44 navegador); 22/09 possui 69 (39 puros e 30 navegador). python scripts/verify_evidence.py passou: hashes, fontes congelados, páginas e somas históricas consistentes; comando exclusivamente offline.

Arquivos: `README.md`, `docs/verification.md`.

Limites: Os 55 calls/48 execuções e custos que o verificador imprime são históricos. Nenhuma chamada Azure foi refeita nem seus números foram somados aos testes desta correção.

### LOJ-07 — Login permite concorrência de Argon2 incompatível com o limite de memória do contêiner

BoundedSemaphore por processo limita a duas verificações Argon2 simultâneas, rejeita excesso com 503 e Retry-After: 1 sem fila ilimitada, e libera slot em finally. Parâmetros do hash e admissão durável por conta/origem foram preservados.

Validação: Hasher barato bloqueável comprova máximo de dois trabalhos ativos, recusa controlada do excedente e liberação após sucesso e exceção. Suite backend completa mantém testes de admissão de login aprovados.

Arquivos: `backend/src/loja_assistente/auth/service.py`, `backend/tests/test_login_capacity.py`, `docs/security.md`.

Limites: Duas verificações × 64 MiB = 128 MiB é orçamento por processo, não medição de RSS. Não foi realizado ensaio de carga ou pico de memória com Argon2 real; vários workers exigem redimensionamento conforme documentado.

### LOJ-08 — Erro de configuração pode incluir partes de valores sensíveis no diagnóstico de inicialização

Settings usa hide_input_in_errors=True e SecretStr nos três campos sensíveis. Consumidores legítimos de conexão, HMAC, migração e cliente do provedor usam get_secret_value apenas no ponto de uso; documentação alerta sobre dumps estruturados com input.

Validação: Settings com _env_file=None, três marcadores sintéticos distintos e ambiente controlado: repr mascara campos; erros de cookie e endpoint não contêm input_value nem marcadores. Suite backend completa, conexão PostgreSQL, migrações, sessões e HMAC passaram após migração dos consumidores; clientes externos permanecem simulados.

Arquivos: `backend/src/loja_assistente/config.py`, `backend/src/loja_assistente/database.py`, `backend/migrations/env.py`, `backend/src/loja_assistente/auth/service.py`, `backend/src/loja_assistente/auth/admission.py`, `backend/src/loja_assistente/assistant/interpretation.py`, `backend/src/loja_assistente/conversations/pagination.py`, `backend/tests/test_secure_config.py`, `backend/tests/test_budget_postgres.py`, `backend/tests/test_filter_limits.py`, `backend/tests/test_provider_evidence.py`, `backend/tests/test_live_evaluation.py`, `docs/security.md`.

Limites: A proteção cobre representações textuais padrão; a API estruturada errors() pode incluir inputs caso o chamador a solicite, e a documentação orienta não registrá-los. Provas usam apenas marcadores sintéticos, sem carregar .env local ou credenciais reais.

## Ambiente e limpeza

Servidores temporários nas portas 3212/3216 encerrados. Compose auditoria-fix-apps removido com down -v; inspeção não encontrou containers/volumes desse projeto ou listeners em 3212/3216/15542/15546. Artefatos de teste e logs preservados. Arquivos AGENTS.md/CLAUDE.md gerados pelo Next no EVD removidos; next-env.d.ts da Loja restaurado ao original.

- Execução local Windows com Node e ambiente Python já disponíveis (.venv do EvidenceDesk usada também para Loja); não representa instalação limpa de dependências nem execução do workflow Linux completo.
- PostgreSQL real isolado no projeto Compose auditoria-fix-apps; aplicação e testes executados no host. Não houve implantação das stacks completas nem mudança em bases existentes.
- Navegador Chromium usa APIs sintéticas interceptadas. Testes de backend exercitam banco e autenticação separadamente. Nenhuma credencial real ou chamada LLM paga foi usada.
- Aviso conhecido de depreciação do alias AnyIO BlockingPortal em Starlette, sem falha de teste.
- Sem commit, push ou PR; mudanças permanecem locais para revisão.

## Complemento de conformidade — LOJ-01

Guard de intenção nos caminhos de abertura/execução, manutenção do conflito ao consultar favoritos, aviso de recuperação persistente, nova intenção criada apenas depois do guard, reducer separando conversas e cursor, confirmação correta para recuperação 404.

Prova anterior e validação posterior: `../_revisao_conformidade_2026-10-13/loja-code-review.md`. Passaram 13 testes direcionados (11 navegador e 2 puros), 2 regressões puras adicionais, build, tipos, lint, formato e links offline. Não houve nova suíte de backend, banco real ou chamada ao provedor. Servidor de teste 3129 encerrado.
