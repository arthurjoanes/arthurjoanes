# Correções do portfólio — 13 de outubro de 2026

**Revisão posterior:** [conferência por repositório e imagem](REVISAO_CONFORMIDADE_PORTFOLIO.md). Três defeitos residuais de EVD-02, EVD-05 e LOJ-01 foram corrigidos e testados nesta etapa; as contagens por item abaixo continuam sendo recibos da primeira rodada. A revisão também corrigiu as descrições de CYC-02 (Lista/Mapa) e CYC-03 (o motor pode emitir warnings).

Os 47 achados das duas rodadas de auditoria foram corrigidos e validados nos checkouts locais: 24 P1 e 23 P2, distribuídos entre oito projetos e o perfil. Este documento registra cada item, seus arquivos, verificações e limites.

Os relatórios anteriores foram preservados. Não foram criados commits, pushes, pull requests ou publicações. Os SHAs de base continuam iguais aos do inventário inicial; os diffs estão disponíveis para revisão.

Os dois forks sem achados, delta e fastapi-pagination, continuam sem alterações.

O QuakeExposure foi alterado no clone `_auditoria_2026-10-13/sources/quake-exposure`. A pasta `QuakeExposure` da raiz não é esse checkout. Os demais caminhos estão na tabela abaixo.

## Cobertura

### Recibos da revisão posterior

| Item | Correção adicional | Validação nova e evidência |
| --- | --- | --- |
| EVD-02 | Nova exportação após resultado terminal limpa a referência anterior e conserva sua própria chave quando a resposta se perde. | Parte dos quatro novos testes Chromium sobre build de produção; [pacote de código](_revisao_conformidade_2026-10-13/evidencedesk-code-review.md). |
| EVD-05 | Campo Pedidos relacionados ligado ao formulário por name/ref e atributos de erro; resumo passa a focar o controle. | Incluído nos quatro testes acima; não somar quatro testes para cada item. Build/tipos, lint e formato direcionados aprovados. |
| LOJ-01 | Intenção incerta não atravessa outra conversa; recuperação permanece acessível, nova análise abandona apenas o estado local e arrays/cursores ficam separados por conversa. | Falha reproduzida antes; 13 testes direcionados (11 navegador, dois puros), incluindo cinco novos; mais dois puros de estado. Build/tipos/lint/formato aprovados. [Pacote de código](_revisao_conformidade_2026-10-13/loja-code-review.md). |
| CYC-01 a 05 e QEX-01 a 04 | Contratos e correções confrontados com documentação e novas provas dirigidas; sem novo defeito de código confirmado. | CycleOps: 33 testes web e 30 Python. QuakeExposure: 61 Python e 16 frontend. Recibos e limites na [revisão](REVISAO_CONFORMIDADE_PORTFOLIO.md#validacao). |

Os 47 IDs foram preservados. As correções adicionais pertencem aos mesmos problemas; não se criou uma contagem artificial de 50. Inspeção de imagens, ajustes de legendas e diagramas e revisão dos outros repositórios estão na [conferência completa](REVISAO_CONFORMIDADE_PORTFOLIO.md). Os testes anteriores abaixo continuam datados e não foram todos repetidos.

### Distribuição dos 47 itens

| Repositório | Itens | Checkout | Recibo completo |
|---|---:|---|---|
| arthurjoanes | 1 | [profile-readme](<https://github.com/arthurjoanes/arthurjoanes/tree/1ffdd6753ed3f8c1332f4a5066897dfc820aa963>) | [JSON](<_correcoes_2026-10-13/arthurjoanes.json>) |
| evidencedesk | 7 | [evidencedesk](<https://github.com/arthurjoanes/evidencedesk/tree/83c690d91166fcf8a58699034b146e604e85cfaf>) | [JSON](<_correcoes_2026-10-13/evidencedesk.json>) |
| loja-assistente | 8 | [loja-assistente](<https://github.com/arthurjoanes/loja-assistente/tree/36963062b674f4c43a8de5c70678751246551af4>) | [JSON](<_correcoes_2026-10-13/loja-assistente.json>) |
| api-sentinel | 5 | [api-sentinel](<https://github.com/arthurjoanes/api-sentinel/tree/90a1f2f911fc8f1bd54541422547007a4ca3fac8>) | [JSON](<_correcoes_2026-10-13/api-sentinel.json>) |
| gestao-recebiveis | 8 | [gestao-recebiveis](<https://github.com/arthurjoanes/gestao-recebiveis/tree/5ff3f45b73ba256f60f4a5132724a820abb49de9>) | [JSON](<_correcoes_2026-10-13/gestao-recebiveis.json>) |
| varejo-data-pipeline | 4 | [varejo-data-pipeline](<https://github.com/arthurjoanes/varejo-data-pipeline/tree/fccfcf17ddcb4cbffab3cf49217545fa711775b2>) | [JSON](<_correcoes_2026-10-13/varejo-data-pipeline.json>) |
| containerops | 5 | [containerops](<https://github.com/arthurjoanes/containerops/tree/ed9a4047271705477609a1031593b96c625ef29a>) | [JSON](<_correcoes_2026-10-13/containerops.json>) |
| cycleops | 5 | [CycleOps](<https://github.com/arthurjoanes/cycleops/tree/2a1dc6a02ad2f7958a4b7933600254e8c507420f>) | [JSON](<_correcoes_2026-10-13/cycleops.json>) |
| quake-exposure | 4 | [_auditoria_2026-10-13/sources/quake-exposure](<https://github.com/arthurjoanes/quake-exposure/tree/47fda4c96259e6442c89d0e1ce09fe3f055fff5d>) | [JSON](<_correcoes_2026-10-13/quake-exposure.json>) |

## Como interpretar a validação

As verificações foram escolhidas conforme cada alteração: testes de unidade, integrações com bancos descartáveis, tipos, lint, build e navegador. Os testes de interface com transporte simulado verificam a UI; as integrações de backend verificam persistência e regras. As contagens de rodadas parciais e completas se sobrepõem e não devem ser somadas como testes únicos.

Houve revisão independente dos fluxos de autorização, idempotência, integridade e paginação. Ela encontrou um caso de BOM UTF-8 no CycleOps, corrigido com SHA-256 dos bytes antes da decodificação e seis testes de regressão. Avisos de dependências e verificações ignoradas por plataforma estão nos recibos; um skip não foi contado como aprovação.

Limites relevantes: endpoints v1 de Recebíveis preservam o contrato legado; a interface usa as leituras limitadas v2. Nenhum restore de backup de produção, chamada paga a provedor ou implantação pública foi usado para validar estas correções. Os testes dirigidos de QuakeExposure não substituem uma nova execução integral da stack CDC.

### Ressalva adicional de dependências

A instalação limpa de Recebíveis apontou um advisory alto em `braces@3.0.3`, propagado por cinco nós da cadeia de desenvolvimento de ESLint já presente no lockfile. A versão publicada mais recente continua 3.0.3 e o [advisory oficial GHSA-vfj7-8cjw-p6xm](https://github.com/advisories/GHSA-vfj7-8cjw-p6xm) informa que não há versão corrigida. Esse ponto permanece aberto e não foi incluído como um dos 47 itens resolvidos. Não foi aplicado o downgrade major sugerido pelo npm.

`npm audit --omit=dev` não apontou vulnerabilidades nesta consulta. Isso delimita o resultado da ferramenta, sem afirmar ausência de toda vulnerabilidade. Recibos: [audit completo](<_correcoes_2026-10-13/rec-npm-audit.json>), [audit de produção](<_correcoes_2026-10-13/rec-npm-audit-production.json>), [avaliação da dependência](<_correcoes_2026-10-13/dependency-advisory.json>).

## Registro por achado

### arthurjoanes

<a id="revisao-per-01"></a>

#### PER-01 · P1 · corrigido e validado

**Achado:** Perfil omite os dois projetos que podem ser avaliados diretamente no navegador

**Correção:** Perfil em português e inglês inclui as demos e o código de CycleOps e QuakeExposure, distinguindo dados sintéticos de fontes públicas.

**Arquivos:** [README.md](<https://github.com/arthurjoanes/arthurjoanes/blob/1ffdd6753ed3f8c1332f4a5066897dfc820aa963/README.md>), [README.en.md](<https://github.com/arthurjoanes/arthurjoanes/blob/1ffdd6753ed3f8c1332f4a5066897dfc820aa963/README.en.md>).

- Os quatro links retornaram HTTP 200 em consulta anônima; versões PT/EN revisadas.

**Limites:** Alteração local; perfil público ainda não atualizado.

**Rodadas registradas:**

- `GET anônimo nos quatro links`: 4 × HTTP 200.

**Logs e recibos:** [per-01-links.json](<_correcoes_2026-10-13/per-01-links.json>).

### evidencedesk

<a id="revisao-evd-01"></a>

#### EVD-01 · P1 · corrigido e validado

**Achado:** Revisão devolvida oferece um envio que o servidor sempre recusa

**Correção:** Envio aparece somente para rascunho. Revisão devolvida oferece Preparar nova revisão com o motivo preservado, reutilizando o editor e a revisão-base imutável.

**Arquivos:** [frontend/src/features/dossiers/dossier-view.tsx](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/features/dossiers/dossier-view.tsx>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/e2e/audit-regressions.spec.ts>), [backend/tests/integration/test_audit_recovery.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/tests/integration/test_audit_recovery.py>), [docs/api-contract.md](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/docs/api-contract.md>).

- Playwright sobre build de produção: motivo visível, envio direto ausente e editor de nova revisão acessível.
- Integração PostgreSQL: criar, submeter, devolver, recusar submissão da antiga com 409 revision_not_draft, criar rascunho sucessor e submeter com sucesso.

**Limites:** O percurso de servidor e o de interface foram testados separadamente; os testes de navegador usam API sintética interceptada.

<a id="revisao-evd-02"></a>

#### EVD-02 · P1 · corrigido e validado

**Achado:** Exportação expirada quebra o schema e a mesma tela não cria uma nova tentativa após falha

**Correção:** Contrato aceita expired. Polling encerra em failed/cancelled/expired, mensagens existem sem error e uma ação explícita cria nova chave após término confirmado. Transporte incerto conserva a chave; exportação concluída é reconsultada no vencimento.

**Arquivos:** [frontend/src/lib/contracts.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/lib/contracts.ts>), [frontend/src/features/dossiers/dossier-view.tsx](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/features/dossiers/dossier-view.tsx>), [frontend/src/lib/audit-contracts.test.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/lib/audit-contracts.test.ts>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/e2e/audit-regressions.spec.ts>), [docs/api-contract.md](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/docs/api-contract.md>).

- Vitest: schemas aceitam failed, cancelled e expired.
- Playwright: três cenários terminais sem spinner infinito; perda da primeira resposta conserva chave no segundo POST, e nova exportação terminal usa outra chave no terceiro.

**Limites:** Não foi produzido arquivo de exportação real nesta rodada; perda de resposta e estados terminais foram injetados na API do navegador.

<a id="revisao-evd-03"></a>

#### EVD-03 · P1 · corrigido e validado

**Achado:** Criação inicial de importação não pode ser repetida com segurança após resposta perdida

**Correção:** POST /imports recebe Idempotency-Key opcional e reutiliza a reserva transacional existente, com escopo tenant/ator/operação e fingerprint do corpo. A UI cria a chave antes da primeira requisição e a conserva para o mesmo manifesto.

**Arquivos:** [backend/src/evidencedesk/ingestion/routes.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/src/evidencedesk/ingestion/routes.py>), [backend/src/evidencedesk/ingestion/service.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/src/evidencedesk/ingestion/service.py>), [frontend/src/features/imports/new-import.tsx](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/features/imports/new-import.tsx>), [backend/tests/integration/test_audit_recovery.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/tests/integration/test_audit_recovery.py>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/e2e/audit-regressions.spec.ts>), [docs/api-contract.md](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/docs/api-contract.md>).

- PostgreSQL: repetir criação já commitada retorna o mesmo lote, exatamente um registro e uma reserva; manifesto diferente com a mesma chave retorna 409.
- Playwright: primeiro POST abortado e segundo POST com a mesma chave retomam upload/finalização e abrem o lote.

**Limites:** Clientes antigos sem cabeçalho continuam aceitos, sem garantia de replay; isso está documentado. A chave da UI dura durante a instância da tela; recarregar toda a página não foi transformado em retomada persistente nesta correção.

<a id="revisao-evd-04"></a>

#### EVD-04 · P1 · corrigido e validado

**Achado:** Recortes antigos ficam inacessíveis no seletor quando há mais de 50 snapshots

**Correção:** Flag de truncamento preservada no contrato. Endpoint paginado de snapshots usa cursor assinado por tenant/usuário/incidente e desempate data/ID, reautoriza cada leitura. Seletor carrega páginas anteriores e conserva a opção selecionada.

**Arquivos:** [backend/src/evidencedesk/incidents/routes.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/src/evidencedesk/incidents/routes.py>), [frontend/src/lib/contracts.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/lib/contracts.ts>), [frontend/src/features/incidents/snapshot-select.tsx](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/features/incidents/snapshot-select.tsx>), [frontend/src/features/incidents/incident-workspace.tsx](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/features/incidents/incident-workspace.tsx>), [backend/tests/integration/test_audit_recovery.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/tests/integration/test_audit_recovery.py>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/e2e/audit-regressions.spec.ts>), [docs/api-contract.md](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/docs/api-contract.md>).

- PostgreSQL: 56 snapshots, incluindo empates de timestamp, sem repetição ou omissão; cursor de outro escopo recusado e grant revogado impede nova leitura.
- Playwright: carregamento de página anterior e seleção de recorte antigo funcionam.

**Limites:** A fixture de navegador modela páginas sintéticas; a segurança e a ordenação real foram verificadas separadamente em PostgreSQL.

<a id="revisao-evd-05"></a>

#### EVD-05 · P1 · corrigido e validado

**Achado:** Erros nas listas de lacunas não identificam qual campo ou alegação precisa de ajuste

**Correção:** As quatro famílias de listas usam Controller com ref, erro associado, aria-invalid e aria-describedby. IDs de alegações usam field.id; resumo preserva caminho e índice, oferece foco no controle e o envio inválido foca o primeiro erro sem apagar edição.

**Arquivos:** [frontend/src/features/dossiers/dossier-editor.tsx](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/features/dossiers/dossier-editor.tsx>), [frontend/src/lib/form-errors.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/lib/form-errors.ts>), [frontend/src/lib/audit-contracts.test.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/lib/audit-contracts.test.ts>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/e2e/audit-regressions.spec.ts>).

- Vitest preserva caminhos de erros repetidos.
- Playwright: 21 linhas na lista geral, 1.001 caracteres na segunda alegação, descrição acessível contextual, foco inicial, foco via resumo e persistência do rascunho.
- ESLint completo e build de produção com TypeScript passaram após ajustar a chamada do handler para ocorrer no evento.

**Limites:** Asserções acessíveis do Playwright; não foi conduzida sessão manual com leitor de tela.

<a id="revisao-evd-06"></a>

#### EVD-06 · P2 · corrigido e validado

**Achado:** Resumo atribui toda avaliação inconclusiva à falta de cobertura

**Correção:** Agregado passou a dizer avaliações inconclusivas e orienta consultar o motivo individual em Conciliação, preservando as regras detalhadas existentes.

**Arquivos:** [frontend/src/features/dossiers/dossier-view.tsx](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/src/features/dossiers/dossier-view.tsx>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/frontend/e2e/audit-regressions.spec.ts>).

- Playwright: agregado not_evaluable exibe o texto neutro e não exibe sem cobertura suficiente; testes unitários existentes de regras permanecem aprovados.

**Limites:** A fixture de UI injeta o agregado; não reconstrói toda a conciliação de conflito de identidade pelo navegador.

<a id="revisao-evd-07"></a>

#### EVD-07 · P2 · corrigido e validado

**Achado:** Erros rejeitados pelo limite de corpo apresentam dois IDs de rastreamento

**Correção:** Limitador reutiliza scope.state.request_id, gerando e guardando fallback somente quando ausente; corpo, cabeçalho e evento http.completed passam a compartilhar o mesmo ID.

**Arquivos:** [backend/src/evidencedesk/body_limit.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/src/evidencedesk/body_limit.py>), [backend/tests/unit/test_request_id_composition.py](<https://github.com/arthurjoanes/evidencedesk/blob/83c690d91166fcf8a58699034b146e604e85cfaf/backend/tests/unit/test_request_id_composition.py>).

- Quatro testes HTTPX da aplicação criada por create_app: corpo declarado excessivo, excesso de bytes efetivos, Content-Length inválido e timeout controlado; ID não vazio coincide em JSON, cabeçalho e log.

**Limites:** Timeout curto artificial no teste; não foi realizado ensaio de rede lenta externa.

**Rodadas registradas:**

- `python -B -m pytest backend/tests/unit backend/tests/integration/test_audit_recovery.py backend/tests/integration/test_manual_workflow.py backend/tests/integration/test_recent_lists.py -p no:cacheprovider -q --junitxml=../_correcoes_2026-10-13/evidencedesk-final-junit.xml`: 214 passed (203 unitários + 11 integrações), 1 warning, 95,53 s.
- `npm test -- --reporter=json --outputFile=../../_correcoes_2026-10-13/evidencedesk-final-vitest.json`: 81 testes aprovados em 14 arquivos.
- `playwright test audit-regressions.spec.ts`: 5 passed, 27,9 s; Chromium contra build de produção em 127.0.0.1:3216, API interceptada.
- `npm run build; npm run typecheck; npm run lint`: Build Next.js 16.3.8 e TypeScript aprovados; ESLint completo aprovado após ajuste do handler.
- `ruff check <arquivos Python alterados e novos>; git diff --check`: Aprovados; Git avisa somente normalização futura CRLF→LF em incidents/routes.py.

**Changelog:** [CHANGELOG_EVD_LOJ.md](<_correcoes_2026-10-13/CHANGELOG_EVD_LOJ.md>).

**Condições da rodada:** Execução local Windows com Node e ambiente Python já disponíveis (.venv do EvidenceDesk usada também para Loja); não representa instalação limpa de dependências nem execução do workflow Linux completo. PostgreSQL real isolado no projeto Compose auditoria-fix-apps; aplicação e testes executados no host. Não houve implantação das stacks completas nem mudança em bases existentes. Navegador Chromium usa APIs sintéticas interceptadas. Testes de backend exercitam banco e autenticação separadamente. Nenhuma credencial real ou chamada LLM paga foi usada. Aviso conhecido de depreciação do alias AnyIO BlockingPortal em Starlette, sem falha de teste. Sem commit, push ou PR; mudanças permanecem locais para revisão.

### loja-assistente

<a id="revisao-loj-01"></a>

#### LOJ-01 · P1 · corrigido e validado

**Achado:** Reenvio de pergunta após resposta perdida pode criar outro resultado e outra chamada paga

**Correção:** Consulta ganhou client_request_id opcional, reserva durável única por tenant/usuário/chave antes da interpretação, fingerprint e recuperação autenticada. Vínculo intenção/resposta é commitado junto com a resposta. UI preserva intenção e pergunta, bloqueia reenvio incerto e recupera pelo ID; nova análise é ação explícita.

**Arquivos:** [backend/migrations/versions/0006_query_intents.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/migrations/versions/0006_query_intents.py>), [backend/src/loja_assistente/models.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/models.py>), [backend/src/loja_assistente/assistant/contracts.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/assistant/contracts.py>), [backend/src/loja_assistente/assistant/intents.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/assistant/intents.py>), [backend/src/loja_assistente/assistant/routes.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/assistant/routes.py>), [backend/src/loja_assistente/assistant/service.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/assistant/service.py>), [backend/tests/test_query_intents.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_query_intents.py>), [backend/tests/test_migrations.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_migrations.py>), [frontend/src/features/assistant/use-workspace.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/use-workspace.ts>), [frontend/src/features/assistant/conversation-state.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/conversation-state.ts>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/audit-regressions.spec.ts>), [docs/api-contract.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/docs/api-contract.md>).

- PostgreSQL: mesma chave após commit retorna a mesma resposta e chama a interpretação demo uma vez; corpo divergente recebe 409; nova chave explícita chama outra vez.
- Falha controlada após admissão deixa reserva durável; replay e recuperação retornam 409 sem repetir interpretação.
- Migrações de banco vazio e upgrade com dados preexistentes passaram até 0006_query_intents.
- Playwright: primeira resposta perdida bloqueia novo envio, preserva a intenção e recupera sem segundo POST.

**Limites:** Nenhuma chamada LLM real; contagem usa interpretação demo instrumentada e falha sintética. Resultado de uma execução interrompida permanece incerto (409), sem retry automático. Clientes antigos sem client_request_id mantêm o contrato anterior. A intenção da UI reside na instância da tela; recuperação automática após recarregar toda a página não foi adicionada. Migração 0006 testada apenas no PostgreSQL descartável. Atualização de uma instalação real exige executar alembic upgrade head no fluxo de implantação.

<a id="revisao-loj-02"></a>

#### LOJ-02 · P1 · corrigido e validado

**Achado:** Falha de favoritos impede carregar histórico e restaurar esclarecimento pendente

**Correção:** Histórico e favoritos carregam independentemente. Histórico tem loading, erro e recarga próprios, hidrata pending assim que chega e mantém guardas de geração/revisão; erros de autenticação continuam limpando o estado protegido.

**Arquivos:** [frontend/src/features/assistant/use-workspace.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/use-workspace.ts>), [frontend/src/features/assistant/analysis-sidebar.tsx](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/analysis-sidebar.tsx>), [frontend/src/features/assistant/workspace.tsx](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/workspace.tsx>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/audit-regressions.spec.ts>).

- Playwright: 503 somente em favoritos preserva histórico e esclarecimento pendente e mostra erro de favoritos; 503 somente no histórico mostra erro em vez de lista vazia e permite recuperação.
- Casos de domínio existentes de mudança de identidade e limpeza de análise passaram.

**Limites:** Falhas injetadas no navegador; nenhum serviço externo foi indisponibilizado.

<a id="revisao-loj-03"></a>

#### LOJ-03 · P1 · corrigido e validado

**Achado:** Limites de 50 conversas e 100 respostas são silenciosos na experiência de histórico

**Correção:** Novos endpoints paginam conversas e mensagens com cursores HMAC vinculados a tenant/usuário/escopo e ordenação por data/ID. Listagem preenche a página com registros autorizados; detalhe reautoriza grants. UI permite carregar e selecionar registros antigos, sem anunciar total inexistente.

**Arquivos:** [backend/src/loja_assistente/conversations/pagination.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/conversations/pagination.py>), [backend/src/loja_assistente/conversations/routes.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/conversations/routes.py>), [backend/src/loja_assistente/conversations/service.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/conversations/service.py>), [backend/tests/test_history_pagination.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_history_pagination.py>), [frontend/src/lib/contracts.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/lib/contracts.ts>), [frontend/src/features/assistant/use-workspace.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/use-workspace.ts>), [frontend/src/features/assistant/conversation-state.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/conversation-state.ts>), [frontend/src/features/assistant/analysis-sidebar.tsx](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/analysis-sidebar.tsx>), [frontend/src/features/assistant/workspace.tsx](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/workspace.tsx>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/audit-regressions.spec.ts>), [frontend/e2e/quality.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/quality.spec.ts>), [frontend/e2e/round-2-fields.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/round-2-fields.spec.ts>), [docs/api-contract.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/docs/api-contract.md>).

- PostgreSQL: 51 conversas empatadas por data, outro tenant omitido, cursor adulterado recusado; 101 respostas sem duplicação/omissão; revogação bloqueia mensagens e remove conversa da listagem.
- Playwright: conversa da segunda página acessível e resposta anterior selecionável entre 101 opções.
- Suite completa preserva os contratos antigos usados pelos clientes existentes.

**Limites:** GET /conversations antigo conserva a primeira página para compatibilidade; a UI passou a usar /conversations/page. Não foi feito teste de carga com histórico muito grande.

<a id="revisao-loj-04"></a>

#### LOJ-04 · P2 · corrigido e validado

**Achado:** Filtro pede ao lojista que raciocine sobre uma data final excluída

**Correção:** Formulário edita Até (incluído) e converte datas civis para o fim exclusivo da API. Mesmo início/fim visível representa um dia; mantém 90 dias e trata limite máximo suportado sem depender do fuso local.

**Arquivos:** [frontend/src/features/assistant/period-selection.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/period-selection.ts>), [frontend/src/features/assistant/analysis-filters.tsx](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/analysis-filters.tsx>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/audit-regressions.spec.ts>), [frontend/e2e/round-2-fields.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/round-2-fields.spec.ts>), [docs/interface.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/docs/interface.md>).

- Teste puro cobre ano bissexto, virada do ano, 90/91 dias, vazio e limite 9999-12-30 incluído.
- Playwright em UTC, America/Los_Angeles e America/Sao_Paulo aceita 29/02/2024 até o mesmo dia visível; 24 testes de domínio existentes passaram.

**Limites:** A UI não admite 9999-12-31 como final incluído porque o contrato exclusivo mantém ano de quatro dígitos; limite declarado no controle.

<a id="revisao-loj-05"></a>

#### LOJ-05 · P2 · corrigido e validado

**Achado:** Histórico e resposta mostram o mesmo horário em fusos diferentes

**Correção:** formatTimestamp compartilhado usa America/Sao_Paulo no histórico e no resultado; mantém dateTime ISO e tooltip indicando o fuso.

**Arquivos:** [frontend/src/lib/format.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/lib/format.ts>), [frontend/src/features/assistant/analysis-sidebar.tsx](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/assistant/analysis-sidebar.tsx>), [frontend/src/features/analytics/result.tsx](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/src/features/analytics/result.tsx>), [frontend/e2e/audit-regressions.spec.ts](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/frontend/e2e/audit-regressions.spec.ts>), [docs/interface.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/docs/interface.md>).

- Playwright nos três fusos: instante 2026-10-13T01:30:00Z aparece como 12/10/2026, 22:30 tanto no histórico quanto no resultado.

**Limites:** Política de exibição fixa em São Paulo; não foi adicionado seletor de fuso.

<a id="revisao-loj-06"></a>

#### LOJ-06 · P2 · corrigido e validado

**Achado:** Resultados de várias rodadas competem pela leitura rápida no README

**Correção:** README destaca a rodada histórica de UI/UX de 12/10/2026, identifica a composição dos 85 casos e resume as rodadas anteriores de 79 e 69 em tabela. Guia centraliza contexto e distingue recibos históricos da validação atual.

**Arquivos:** [README.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/README.md>), [docs/verification.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/docs/verification.md>).

- Leitura cruzada dos recibos preservados e contagens: rodada principal 477 backend/57 avaliação/85 Playwright (41 puros e 44 navegador); 22/09 possui 69 (39 puros e 30 navegador).
- python scripts/verify_evidence.py passou: hashes, fontes congelados, páginas e somas históricas consistentes; comando exclusivamente offline.

**Limites:** Os 55 calls/48 execuções e custos que o verificador imprime são históricos. Nenhuma chamada Azure foi refeita nem seus números foram somados aos testes desta correção.

<a id="revisao-loj-07"></a>

#### LOJ-07 · P1 · corrigido e validado

**Achado:** Login permite concorrência de Argon2 incompatível com o limite de memória do contêiner

**Correção:** BoundedSemaphore por processo limita a duas verificações Argon2 simultâneas, rejeita excesso com 503 e Retry-After: 1 sem fila ilimitada, e libera slot em finally. Parâmetros do hash e admissão durável por conta/origem foram preservados.

**Arquivos:** [backend/src/loja_assistente/auth/service.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/auth/service.py>), [backend/tests/test_login_capacity.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_login_capacity.py>), [docs/security.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/docs/security.md>).

- Hasher barato bloqueável comprova máximo de dois trabalhos ativos, recusa controlada do excedente e liberação após sucesso e exceção.
- Suite backend completa mantém testes de admissão de login aprovados.

**Limites:** Duas verificações × 64 MiB = 128 MiB é orçamento por processo, não medição de RSS. Não foi realizado ensaio de carga ou pico de memória com Argon2 real; vários workers exigem redimensionamento conforme documentado.

<a id="revisao-loj-08"></a>

#### LOJ-08 · P2 · corrigido e validado

**Achado:** Erro de configuração pode incluir partes de valores sensíveis no diagnóstico de inicialização

**Correção:** Settings usa hide_input_in_errors=True e SecretStr nos três campos sensíveis. Consumidores legítimos de conexão, HMAC, migração e cliente do provedor usam get_secret_value apenas no ponto de uso; documentação alerta sobre dumps estruturados com input.

**Arquivos:** [backend/src/loja_assistente/config.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/config.py>), [backend/src/loja_assistente/database.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/database.py>), [backend/migrations/env.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/migrations/env.py>), [backend/src/loja_assistente/auth/service.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/auth/service.py>), [backend/src/loja_assistente/auth/admission.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/auth/admission.py>), [backend/src/loja_assistente/assistant/interpretation.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/assistant/interpretation.py>), [backend/src/loja_assistente/conversations/pagination.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/src/loja_assistente/conversations/pagination.py>), [backend/tests/test_secure_config.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_secure_config.py>), [backend/tests/test_budget_postgres.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_budget_postgres.py>), [backend/tests/test_filter_limits.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_filter_limits.py>), [backend/tests/test_provider_evidence.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_provider_evidence.py>), [backend/tests/test_live_evaluation.py](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/backend/tests/test_live_evaluation.py>), [docs/security.md](<https://github.com/arthurjoanes/loja-assistente/blob/36963062b674f4c43a8de5c70678751246551af4/docs/security.md>).

- Settings com _env_file=None, três marcadores sintéticos distintos e ambiente controlado: repr mascara campos; erros de cookie e endpoint não contêm input_value nem marcadores.
- Suite backend completa, conexão PostgreSQL, migrações, sessões e HMAC passaram após migração dos consumidores; clientes externos permanecem simulados.

**Limites:** A proteção cobre representações textuais padrão; a API estruturada errors() pode incluir inputs caso o chamador a solicite, e a documentação orienta não registrá-los. Provas usam apenas marcadores sintéticos, sem carregar .env local ou credenciais reais.

**Rodadas registradas:**

- `python -B -m pytest backend/tests -p no:cacheprovider -q`: 485 passed, 1 warning, 275,06 s.
- `python -B -m pytest backend/tests/test_query_intents.py backend/tests/test_history_pagination.py backend/tests/test_migrations.py backend/tests/test_login_capacity.py backend/tests/test_secure_config.py -p no:cacheprovider -q --junitxml=../_correcoes_2026-10-13/loja-final-junit.xml`: 12 passed, 1 warning, 31,15 s; subconjunto dos 485, não somar.
- `playwright test audit-regressions.spec.ts domain.spec.ts --reporter=list,json`: 32 passed, 27,9 s: 7 navegador e 25 puros; Chromium contra build de produção em 127.0.0.1:3212, API interceptada.
- `npm run build; npm run typecheck; npm run lint`: Build Next.js 16.3.8, TypeScript e ESLint completos aprovados.
- `python scripts/verify_evidence.py`: Aprovado, exclusivamente offline, sem chamadas Azure ou consultas a banco.
- `ruff check <arquivos Python alterados e novos>; git diff --check`: Aprovados.

**Changelog:** [CHANGELOG_EVD_LOJ.md](<_correcoes_2026-10-13/CHANGELOG_EVD_LOJ.md>).

**Condições da rodada:** Execução local Windows com Node e ambiente Python já disponíveis (.venv do EvidenceDesk usada também para Loja); não representa instalação limpa de dependências nem execução do workflow Linux completo. PostgreSQL real isolado no projeto Compose auditoria-fix-apps; aplicação e testes executados no host. Não houve implantação das stacks completas nem mudança em bases existentes. Navegador Chromium usa APIs sintéticas interceptadas. Testes de backend exercitam banco e autenticação separadamente. Nenhuma credencial real ou chamada LLM paga foi usada. Aviso conhecido de depreciação do alias AnyIO BlockingPortal em Starlette, sem falha de teste. Sem commit, push ou PR; mudanças permanecem locais para revisão.

### api-sentinel

<a id="revisao-api-01"></a>

#### API-01 · P1 · corrigido e validado

**Achado:** A retenção permite reutilizar o número público de uma ocorrência

**Correção:** Migração transacional para AUTOINCREMENT preserva IDs, eventos e índices, verifica referências e impede reutilização após retenção/reabertura.

**Arquivos:** [alert_receiver/storage.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/alert_receiver/storage.py>), [tests/unit/test_receiver_pagination_ids.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/tests/unit/test_receiver_pagination_ids.py>), [docs/incident-console.md](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/docs/incident-console.md>).

- Retenção apagando maior ID ou todos os IDs; migração de schema legado com eventos; reinicialização; foreign_key_check; URL expirada 404.

**Limites:** IDs apagados antes da atualização não têm high-water mark recuperável; a fronteira de garantia foi explicitada no guia. Nenhuma base real foi migrada.

<a id="revisao-api-02"></a>

#### API-02 · P1 · corrigido e validado

**Achado:** Não há como descobrir ocorrências além das 100 linhas sem conhecer seu ID

**Correção:** Fila e API recebem cursor validado por filtro, ordenação por estado/atividade/ID, próximas ocorrências e retorno ao detalhe/runbook com cursor preservado.

**Arquivos:** [alert_receiver/storage.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/alert_receiver/storage.py>), [alert_receiver/contracts.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/alert_receiver/contracts.py>), [alert_receiver/app.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/alert_receiver/app.py>), [alert_receiver/ui.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/alert_receiver/ui.py>), [alert_receiver/styles.css](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/alert_receiver/styles.css>), [tests/unit/test_receiver_pagination_ids.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/tests/unit/test_receiver_pagination_ids.py>), [tests/unit/test_receiver_errors.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/tests/unit/test_receiver_errors.py>), [docs/incident-console.md](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/docs/incident-console.md>).

- 205 registros percorridos sem duplicação em snapshot estável; 205 ativos no navegador em 100/100/5, teclado e retorno do detalhe, 320/768/1440; cursor inválido/filtro incompatível 422.

**Limites:** A navegação entre páginas não congela o banco: entregas concorrentes podem mudar posições, conforme documentado.

<a id="revisao-api-03"></a>

#### API-03 · P2 · corrigido e validado

**Achado:** O exportador de prévias não copia fontes, marca e favicon usados nas páginas

**Correção:** Exportador copia assets públicos e guia explica a raiz HTTP da prévia.

**Arquivos:** [scripts/render_ui_preview.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/scripts/render_ui_preview.py>), [tests/unit/test_receiver_ui.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/tests/unit/test_receiver_ui.py>), [docs/screenshots.md](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/docs/screenshots.md>).

- Exportação para pasta nova; igualdade dos bytes dos assets; 4 recursos HTTP200, fonte e marca carregadas no Chromium.

<a id="revisao-api-04"></a>

#### API-04 · P2 · corrigido e validado

**Achado:** O roteiro Linux exige PowerShell no primeiro exemplo autenticado

**Correção:** Roteiro Linux inclui consulta autenticada com Python padrão, lê token UTF-8 e imprime somente os três resultados.

**Arquivos:** [docs/demo.md](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/docs/demo.md>).

- Bloco real validado com bash -n; corpo Python executado com transporte sintético: 12500/2/6250; token ausente da saída.

**Limites:** A consulta do roteiro não foi executada contra a stack comercial completa; o transporte foi simulado.

<a id="revisao-api-05"></a>

#### API-05 · P2 · corrigido e validado

**Achado:** Um teste de arquivo privado mistura UTF-8 e permissões POSIX sem restringir plataforma

**Correção:** Teste lê UTF-8 explicitamente e aplica a asserção 0600 somente em POSIX, preservando a verificação de leitores Linux/root.

**Arquivos:** [tests/unit/test_data_private_file.py](<https://github.com/arthurjoanes/api-sentinel/blob/90a1f2f911fc8f1bd54541422547007a4ca3fac8/tests/unit/test_data_private_file.py>).

- Suite Windows e suite Linux/root no Docker aprovadas; sem remover testes de UID/permissão.

**Rodadas registradas:**

- `Windows: .runtime/verifyvenv/Scripts/python.exe -m pytest -q tests/unit -p no:cacheprovider`: 384 passed, 3 skipped, 15 subtests; 20.06s.
  3 verificações Linux/root ignoradas no Windows; duas deprecações de dependências.
- `Docker Linux/root, api-sentinel-security-review:20261003, fonte atual read-only, rede none: python -m pytest -q -p no:cacheprovider tests/unit`: 386 passed, 1 skipped, 15 subtests; 28.40s.
  Imagem local existente; apenas suite unitária, sem stack externa.
- `ruff check --no-cache .; ruff format --check --no-cache .; mypy --cache-dir=.runtime/review-mypy`: All checks passed; 90 files formatted; no issues in 31 source files.
- `node _correcoes_2026-10-13/backend_ops_browser.cjs`: Chromium: 320/768/1440; navegação/teclado/assets/estilos aprovados; nenhum pageerror.
  API sintética com probe desativado; OPS snapshot histórico regenerado, sem afirmar disponibilidade atual.
- `py -3.11 _correcoes_2026-10-13/backend_ops_checks.py`: 260 referências; comandos shell sintéticos; corpo Python do guia; relatório histórico regenerado.
  Sem restore real nem consulta comercial externa.

**Logs e recibos:** [backend-ops-directed-checks.json](<_correcoes_2026-10-13/backend-ops-directed-checks.json>), [api-qa/browser.json](<_correcoes_2026-10-13/api-qa/browser.json>).

### gestao-recebiveis

<a id="revisao-rec-01"></a>

#### REC-01 · P1 · corrigido e validado

**Achado:** A navegação financeira não pode ser retomada pelo endereço do navegador

**Correção:** Áreas, IDs, filtros e origem de retorno passam a ter URL validada, links reais e integração com Voltar/Avançar. Login retoma o endereço; rascunho e intenção de pagamento continuam separados, sem reenvio automático. Foco dos filtros é restaurado após aplicar a URL.

**Arquivos:** [frontend/src/lib/workspace-route.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/lib/workspace-route.tsx>), [frontend/src/features/workspace.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/workspace.tsx>), [frontend/src/components/workspace-navigation.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/components/workspace-navigation.tsx>), [frontend/src/features/overview.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/overview.tsx>), [frontend/src/features/receivables.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/receivables.tsx>), [frontend/src/features/reports.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/reports.tsx>), [frontend/src/features/receivable-detail.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/receivable-detail.tsx>), [frontend/src/components/responsive-filters.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/components/responsive-filters.tsx>), [frontend/src/app/globals.css](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/app/globals.css>), [frontend/tests/workspace-navigation.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/workspace-navigation.spec.ts>), [frontend/tests/journey.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/journey.spec.ts>), [frontend/tests/payments-reports.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/payments-reports.spec.ts>), [frontend/tests/session-safety.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/session-safety.spec.ts>), [frontend/tests/uiux-accessibility.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/uiux-accessibility.spec.ts>), [frontend/tests/uiux-financial.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/uiux-financial.spec.ts>), [docs/frontend-quality.md](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/docs/frontend-quality.md>).

- Playwright: link direto com login, filtros, detalhe, reload, Voltar/Avançar e nova aba; nenhuma mutação além do login no cenário sintético.
- 14 fluxos Chromium de pagamentos/relatórios/acessibilidade/navegação aprovados; 8 testes de sessão aprovados, incluindo resposta atrasada após troca de conta e timeout sem reenvio.
- npm run lint, npm run typecheck e npm run build aprovados.

**Limites:** O cenário específico de histórico/nova aba usa respostas sintéticas determinísticas; os fluxos financeiros e de sessão usam PostgreSQL/API locais descartáveis. Firefox não executou: download falhou por timeout e o executável continuou ausente. Não foi contado como aprovação.

<a id="revisao-rec-02"></a>

#### REC-02 · P1 · corrigido e validado

**Achado:** Os filtros oferecem combinações que a própria API rejeita

**Correção:** Selecionar faixa de aging fixa Situação em Em aberto, desabilita combinações incompatíveis e apresenta explicação associada ao controle. Entrada por URL também é normalizada; submit conserva o contrato financeiro da API.

**Arquivos:** [frontend/src/features/receivables.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/receivables.tsx>), [frontend/src/lib/workspace-route.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/lib/workspace-route.tsx>), [frontend/tests/workspace-navigation.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/workspace-navigation.spec.ts>), [frontend/tests/payments-reports.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/payments-reports.spec.ts>).

- Playwright: URL com paid + 1_30 resulta em open, controle desabilitado e requisição válida; drill-down real de aging conserva faixa/saldo aberto.
- Suíte backend completa aprovada sem alterar a validação financeira de filtros.

<a id="revisao-rec-03"></a>

#### REC-03 · P2 · corrigido e validado

**Achado:** Regras posteriores anulam o layout de filtros previsto para tablet

**Correção:** Breakpoint 901–1100 fica depois das regras base e das faixas concorrentes; a declaração contraditória de 190px foi removida.

**Arquivos:** [frontend/src/app/financial-workspace.css](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/app/financial-workspace.css>), [frontend/tests/workspace-navigation.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/workspace-navigation.spec.ts>).

- Computed styles em 900, 901, 1024, 1100 e 1101px: uma coluna externa até 1100; duas depois. No tablet filtros grid em duas colunas; sem overflow global.
- Cenários reais de acessibilidade e relatórios passaram em cinco larguras, incluindo foco e operações financeiras.

<a id="revisao-rec-04"></a>

#### REC-04 · P2 · corrigido e validado

**Achado:** A página de títulos carrega todo o histórico de parcelas de cada item

**Correção:** GET /api/v2 fornece resumos de títulos sem arrays de pagamentos e detalhe com paginação independente de pagamentos/eventos/lembretes, total e saldo globais. Leitura autenticada em snapshot REPEATABLE READ/READ ONLY. Frontend migra esses GETs para v2 e oferece paginação; mutações e clientes v1 mantêm contrato.

**Arquivos:** [backend/src/gestao_recebiveis/app.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/app.py>), [backend/src/gestao_recebiveis/routes.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/routes.py>), [backend/src/gestao_recebiveis/reporting.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/reporting.py>), [backend/src/gestao_recebiveis/responses.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/responses.py>), [backend/src/gestao_recebiveis/views.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/views.py>), [backend/tests/test_v2_read_contract.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/tests/test_v2_read_contract.py>), [frontend/src/lib/api.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/lib/api.ts>), [frontend/src/lib/types.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/lib/types.ts>), [frontend/src/features/receivable-detail.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/receivable-detail.tsx>), [docs/api-read-v2.md](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/docs/api-read-v2.md>), [docs/api-contract.md](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/docs/api-contract.md>).

- PostgreSQL real: 205 pagamentos; listagem/aging/títulos do extrato sem histórico; páginas do detalhe com no máximo 100, sem perdas/duplicações; saldo/total iguais ao agregado integral.
- Limite 101 retorna 422; v1 conserva os 205 pagamentos por compatibilidade. Suíte backend:220 passaram.
- 14 fluxos Chromium aprovados; revisão independente de API/consumidores não encontrou regressão concreta.

**Limites:** v1 mantém histórico integral por compatibilidade: a garantia de materialização limitada aplica-se à v2. Paginação por offset tem snapshot consistente por requisição; não congela alterações entre requisições distintas, conforme guia.

<a id="revisao-rec-05"></a>

#### REC-05 · P2 · corrigido e validado

**Achado:** O teste de acessibilidade usa axe-core sem declarar a dependência direta

**Correção:** axe-core 4.13.0 passa a ser dependência dev direta no manifesto/lock, resolvida por require.resolve. Playwright permite saídas de QA fora do repositório.

**Arquivos:** [frontend/package.json](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/package.json>), [frontend/package-lock.json](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/package-lock.json>), [frontend/tests/uiux-accessibility.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/uiux-accessibility.spec.ts>), [frontend/playwright.config.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/playwright.config.ts>).

- Instalação limpa em _correcoes_2026-10-13/rec-clean-install: npm ci --ignore-scripts instalou 348 pacotes; createRequire resolveu axe-core direto 4.13.0.
- Cenário real de axe de relatórios/confirmacão passou nas cinco larguras em Chromium; lint/tipos/build aprovados.

**Limites:** npm audit registra 5 nós high referentes a 1 advisory de braces 3.0.3 na cadeia de desenvolvimento já existente. Ressalva separada dos 47 achados; sem downgrade/force. A exclusão do node_modules temporário foi rejeitada pela revisão automática de aprovação ('blocked by policy'); pasta preservada.

<a id="revisao-rec-06"></a>

#### REC-06 · P2 · corrigido e validado

**Achado:** Alguns resumos mostram códigos de faixa e contagem sem concordância

**Correção:** Rótulos das cinco faixas são centralizados e reutilizados por controles/resumos; contagens usam singular/plural e partes vazias são removidas.

**Arquivos:** [frontend/src/lib/format.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/lib/format.ts>), [frontend/src/features/receivables.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/receivables.tsx>), [frontend/src/features/reports.tsx](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/src/features/reports.tsx>), [frontend/tests/workspace-navigation.spec.ts](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/frontend/tests/workspace-navigation.spec.ts>).

- Playwright puro: cinco faixas traduzidas e contagens 0/1/2 aprovadas. DOM da consulta sintética mostra Aging: 1–30 dias e 1 título; testes reais de relatórios também passaram.

<a id="revisao-rec-07"></a>

#### REC-07 · P2 · corrigido e validado

**Achado:** O roteiro de atualização descreve a migração atual como apenas aditiva

**Correção:** Roteiro de atualização identifica e71c2f, locks, validação dos saldos legados, mudanças no contrato de pagamentos, recusa explícita de inconsistência e limites do downgrade; conserva parada dos escritores/backup.

**Arquivos:** [docs/security.md](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/docs/security.md>).

- Probe integrado de upgrade em banco PostgreSQL separado: IDs, timestamps, hashes e 48 recibos legados preservados/reexecutados; parcelas suportadas; upgrade inconsistente e downgrade destrutivo recusados; provisionamento idempotente.
- Conferência do texto com migração e71c2f sem alterar o arquivo da migração.

**Limites:** Somente bancos descartáveis; nenhuma instalação real foi migrada.

<a id="revisao-rec-08"></a>

#### REC-08 · P2 · corrigido e validado

**Achado:** Campos textuais JSON aceitam NUL que a persistência não representa

**Correção:** Validador reutilizável rejeita NUL em textos persistidos/consultados: e-mail, nota, chave idempotente, motivo, busca e nome do upload. A recusa ocorre antes do domínio/INSERT e não normaliza senha ou chave. CSV continua com suas guardas existentes.

**Arquivos:** [backend/src/gestao_recebiveis/schemas.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/schemas.py>), [backend/src/gestao_recebiveis/routes.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/routes.py>), [backend/src/gestao_recebiveis/imports.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/src/gestao_recebiveis/imports.py>), [backend/tests/test_field_matrix.py](<https://github.com/arthurjoanes/gestao-recebiveis/blob/5ff3f45b73ba256f60f4a5132724a820abb49de9/backend/tests/test_field_matrix.py>).

- Matriz HTTP/PostgreSQL:422 para JSON/query/filename multipart com NUL real; saldo, pagamentos e auditoria permanecem iguais após recusa.
- Acentos, emoji e multilinha permitidos aceitos; full suite backend 220 passaram. Revisão independente validou guard de filename antes de ImportBatch.

**Rodadas registradas:**

- `backend: python -m pytest tests -q -p no:cacheprovider --junitxml=../../_correcoes_2026-10-13/rec-full.xml`: 220 passed, 2 warnings; 103.52 s, PostgreSQL descartável real.
  Warnings de depreciação de dependências; nenhuma base real.
- `backend: ruff check src tests; ruff format --check src tests; mypy src`: lint/43 arquivos formatados e tipos de 29 fontes aprovados.
- `frontend: npm run lint; npm run typecheck; npm run build`: ESLint/Prettier, Next typegen/TypeScript e build produção aprovados; next-env.d.ts novamente aponta .next/types e não tem diff.
- `frontend: playwright test workspace-navigation.spec.ts payments-reports.spec.ts uiux-accessibility.spec.ts uiux-financial.spec.ts`: 14 cenários Chromium aprovados (UI financeira, reload/replay, relatórios, axe, foco, responsividade e URL).
  14 aprovados / 15 selecionados; Firefox não iniciou por executável ausente após download com timeout de 30 s e 120 s. Sem aprovação implícita desse navegador.
- `frontend: playwright test session-safety.spec.ts; rerun direcionado 401 antigo/200 atrasado`: 8 cenários aprovados em 6+2; dois inicialmente falharam somente porque helper esperava Resumo após reautenticação, ajustado ao contrato de URL preservada.
- `frontend: playwright test workspace-navigation.spec.ts --grep 'faixas e contagens'`: 1 teste puro aprovado para 5 faixas e 0/1/2 títulos.
- `backend: python tests/database_upgrade_probe.py contra auditoria_upgrade_test`: Upgrade preservou 48 recibos/IDs/hashes/timestamps; inconsistência e downgrade destrutivo recusados; roles idempotentes.
  Banco sintético exclusivo e separado da suíte.
- `npm ci --ignore-scripts em rec-clean-install; createRequire(...).resolve('axe-core/axe.min.js')`: 348 pacotes; axe-core 4.13.0 direto resolvido.
  npm audit: 5 nós dev high/1 advisory braces 3.0.3; não causado pela adição de axe. node_modules externo preservado por bloqueio da revisão automática de aprovação.

**Condições da rodada:** 14 aprovados / 15 selecionados; Firefox não iniciou por executável ausente após download com timeout de 30 s e 120 s. Sem aprovação implícita desse navegador. Verificações Chromium executadas com API/PostgreSQL descartáveis; não foi executada a jornada completa do worker/entrega de mensagens. Dependências: 5 nós dev high do advisory GHSA-vfj7-8cjw-p6xm em braces 3.0.3; ressalva adicional, não um dos 47 achados. Fonte oficial: https://github.com/advisories/GHSA-vfj7-8cjw-p6xm . Banco/servidores descartáveis removidos/parados; node_modules da instalação limpa preservado por rejeição automática de aprovação.

**Logs e recibos:** [rec-full.xml](<_correcoes_2026-10-13/rec-full.xml>), [rec-upgrade.log](<_correcoes_2026-10-13/rec-upgrade.log>), [rec-live-report2/index.html](<_correcoes_2026-10-13/rec-live-report2/public-report.json>), [rec-session.log](<_correcoes_2026-10-13/rec-session.log>), [rec-session-final.log](<_correcoes_2026-10-13/rec-session-final.log>), [rec-session-final-report/index.html](<_correcoes_2026-10-13/rec-session-final-report/index.html>), [rec-lint-final.log](<_correcoes_2026-10-13/rec-lint-final.log>), [rec-types-final.log](<_correcoes_2026-10-13/rec-types-final.log>), [rec-build-final.log](<_correcoes_2026-10-13/rec-build-final.log>), [rec-npm-audit.json](<_correcoes_2026-10-13/rec-npm-audit.json>), [data-billing-cleanup.json](<_correcoes_2026-10-13/data-billing-cleanup.json>).

### varejo-data-pipeline

<a id="revisao-vdp-01"></a>

#### VDP-01 · P1 · corrigido e validado

**Achado:** A restauração pode trocar a tentativa apresentada como mais recente

**Correção:** Tentativas são ordenadas pelo started_at persistido, validado e convertido para UTC, com run_id como desempate estável; registros ausentes/inválidos/sem fuso são recusados explicitamente. O guia explica ordem de início e tratamento de registros legados.

**Arquivos:** [src/retail_pipeline/reporting.py](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/src/retail_pipeline/reporting.py>), [tests/unit/test_report_publication.py](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/tests/unit/test_report_publication.py>), [docs/state-recovery.md](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/docs/state-recovery.md>).

- Backup/restauração reais make_archive/restore_archive com IDs inversos à cronologia e mtimes iguais preservam latest/last_failed; fusos equivalentes e desempate testados.
- Datas ausentes/inválidas/sem fuso recusadas; suíte Linux 412 aprovados e testes Windows direcionados.

<a id="revisao-vdp-02"></a>

#### VDP-02 · P1 · corrigido e validado

**Achado:** O HTML servido é sobrescrito diretamente, sem publicação atômica

**Correção:** HTML completo é escrito em temporário no mesmo diretório, seguido de flush/fsync, preservação POSIX de dono/grupo/modo, replace e fsync do diretório. Falhas anteriores ao replace preservam o documento anterior e removem temporário. Primeira publicação 0644 permite leitura pelo UID 65534 sem ampliar permissões de arquivos existentes.

**Arquivos:** [src/retail_pipeline/reporting.py](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/src/retail_pipeline/reporting.py>), [tests/unit/test_report_publication.py](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/tests/unit/test_report_publication.py>), [tests/unit/test_report_server.py](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/tests/unit/test_report_server.py>).

- Erro de replace e fchown mantém bytes anteriores e limpa temporário; modo 0640 e ownership 1000:1001 preservados em Linux/root isolado.
- Subprocesso com grupos vazios/UID 65534 lê o novo HTML. Requisição HTTP intercalada com substituição retorna documento antigo íntegro/Content-Length correto; requisição seguinte recebe novo documento íntegro.
- Suíte Linux 412 passaram; mypy e Ruff aprovados.

**Limites:** Provas de ownership/modo/leitor POSIX são Linux; Windows não é tratado como validação de DACL. Falha em preservar ownership mantém o arquivo anterior e propaga erro. A prova de concorrência é intercalada deterministicamente, sem benchmark de carga.

<a id="revisao-vdp-03"></a>

#### VDP-03 · P1 · corrigido e validado

**Achado:** A verificação de navegador depende de ferramentas externas sem lock próprio

**Correção:** Pacote tools/browser versiona Playwright 1.64.0 e @axe-core/playwright 4.13.0 com lock; scripts resolvem módulos pelo pacote. CI instala navegador e renderiza/exercita publicação, bloqueio, ausência e comparação sem Spark; guia inclui comandos completos. Espera de fontes usa document.fonts.ready com prazo.

**Arquivos:** [tools/browser/package.json](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/tools/browser/package.json>), [tools/browser/package-lock.json](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/tools/browser/package-lock.json>), [scripts/dashboard-review.cjs](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/scripts/dashboard-review.cjs>), [scripts/profile-report-review.cjs](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/scripts/profile-report-review.cjs>), [.github/workflows/ci.yml](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/.github/workflows/ci.yml>), [docs/frontend-quality.md](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/docs/frontend-quality.md>), [.gitignore](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/.gitignore>), [.dockerignore](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/.dockerignore>).

- npm ci --prefix tools/browser: 4 pacotes, 0 vulnerabilidades; Chromium instalado pelo pacote versionado.
- Renderer atual produziu 22 fixtures; amostra de 4 estados/5 larguras: 555 checks, 0 falhas, 4 scans axe, 10 capturas; sem pageerror ou requisição remota.
- Controle negativo: KPI alterado em cópia ignorada produz exit 1 e 2 falhas esperadas em 199 checks, demonstrando gate sensível à regressão.
- Revisão independente verificou workflow/pacote/lock/resolução e os quatro casos de CI.

**Limites:** Workflow foi revisado e comandos equivalentes executados localmente; GitHub Actions não foi disparado, pois não houve push. Recibos visuais são fixtures sintéticas/históricas renderizadas pelo código atual; não provam uma execução nova de Spark/Delta.

<a id="revisao-vdp-04"></a>

#### VDP-04 · P2 · corrigido e validado

**Achado:** Um caso parametrizado de 1 MiB impede a execução do teste no Windows

**Correção:** Parâmetros de testes de JAR agora usam IDs portáveis invalid-root e over-limit; payloads hostis e asserções permanecem intactos.

**Arquivos:** [tests/unit/test_rebuilt_jars.py](<https://github.com/arthurjoanes/varejo-data-pipeline/blob/fccfcf17ddcb4cbffab3cf49217545fa711775b2/tests/unit/test_rebuilt_jars.py>).

- Testes direcionados passaram no Windows e suíte unitária completa passou no Linux; casos de conteúdo inseguro continuam exercitados.

**Limites:** A correção trata nomes de casos/paths no teste, sem mudar a plataforma de produção Linux.

**Rodadas registradas:**

- `Docker isolado pf-varejo-data:evolucao-20261012-a12e4a, fonte atual read-only, network none: ruff check src tests; ruff format --check arquivos alterados; mypy src/retail_pipeline/reporting.py; pytest tests/unit -q -p no:cacheprovider`: 412 passed em 13.59 s; Ruff e mypy aprovados.
  Imagem local existente; novas fontes montadas read-only. Não recompila imagem nem roda integração Spark completa.
- `Windows: pytest testes de reporting/publicação/server/rebuilt/state proof; final: pytest test_report_publication.py test_rebuilt_jars.py test_report_server.py -q -p no:cacheprovider`: 177 passed, 1 skip em 12.77 s na rodada inicial; final: 43 passed, 5 skips em 9.75 s.
  Skips finais: 3 Linux/root, 1 semântica POSIX rename, 1 symlink; todos cobertos no Linux.
- `npm ci --prefix tools/browser; npm run install:browser --prefix tools/browser`: Dependências com lock instaladas; 0 vulnerabilidades, Chromium disponível.
- `python scripts/render_report_fixtures.py; node scripts/dashboard-review.cjs (quatro estados)`: 22 fixtures renderizadas; amostra: 4 casos, 555 checks, 0 falhas / 4 axe / 10 capturas.
  Fixtures offline, cinco larguras 320/390/768/1024/1440; sem novo processamento Spark.
- `dashboard-review.cjs contra cópia com net_revenue alterado`: 199 checks, 2 falhas esperadas, exit 1.
  Controle negativo intencional, não falha pendente de produto.
- `Tentativa adicional de pip wheel --no-deps --no-build-isolation no container runtime`: Não executou build: runtime não possui módulo pip.
  Esta tentativa ocorreu após aprovação dos 412 testes; não foi contada como aprovação de pacote/imagem.

**Condições da rodada:** Testes reais Linux de filesystem/UID/HTTP e unitários, além de fixtures offline no navegador; sem execução nova de Spark/Delta e sem build da imagem Docker completa. CI foi implementado/revisado e seus comandos de navegador reproduzidos localmente; não houve push para disparar GitHub Actions.

**Logs e recibos:** [vdp-linux-final.log](<_correcoes_2026-10-13/vdp-linux-final.log>), [vdp-windows-final.log](<_correcoes_2026-10-13/vdp-windows-final.log>), [vdp-targeted.xml](<_correcoes_2026-10-13/vdp-targeted.xml>), [vdp-browser-final/dashboard-review.json](<_correcoes_2026-10-13/vdp-browser-final/dashboard-review.json>), [vdp-browser-final/summary.json](<_correcoes_2026-10-13/vdp-browser-final/summary.json>), [vdp-browser-negative/dashboard-review.json](<_correcoes_2026-10-13/vdp-browser-negative/dashboard-review.json>), [vdp-browser-negative/summary.json](<_correcoes_2026-10-13/vdp-browser-negative/summary.json>), [data-billing-cleanup.json](<_correcoes_2026-10-13/data-billing-cleanup.json>).

### containerops

<a id="revisao-ops-01"></a>

#### OPS-01 · P2 · corrigido e validado

**Achado:** A tabela de recursos arredonda quotas de CPU para valores diferentes da configuração

**Correção:** Quota de CPU usa Decimal, preserva fração exata e valida tipo/intervalo; tabela identifica CPUs.

**Arquivos:** [scripts/report.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/report.py>), [scripts/test_report.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/test_report.py>), [docs/examples/report.html](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/docs/examples/report.html>).

- Casos 0,25/0,5/0,75, uma nanocpu, inteiros e entradas inválidas; relatório regenerado; tabela conferida no browser.

<a id="revisao-ops-02"></a>

#### OPS-02 · P1 · corrigido e validado

**Achado:** Guias copiados para a sessão conservam links relativos para arquivos ausentes

**Correção:** Bundle mantém links entre guias copiados e converte dependências públicas para URLs do commit, com raw para imagens. Avisa quando há alterações locais e recusa referências não versionadas/externas ao repo.

**Arquivos:** [scripts/report.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/report.py>), [scripts/test_report.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/test_report.py>), [docs/report-guide.md](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/docs/report-guide.md>).

- 260 referências dos guias reais verificadas; testes de links de código/imagem/referência e recusa de .env não versionado; preservação dos fontes e bundles existentes.

**Limites:** Links externos exigem rede. Em checkout modificado, referências mostram o commit e o aviso declara que não são permalinks das mudanças locais.

<a id="revisao-ops-03"></a>

#### OPS-03 · P2 · corrigido e validado

**Achado:** Comandos copiáveis do catálogo atendem só ao shell PowerShell

**Correção:** Catálogo oferece blocos PowerShell e POSIX independentes; POSIX preserva ambiente chamador; não acrescenta confiança automaticamente.

**Arquivos:** [scripts/report.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/report.py>), [scripts/test_report.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/test_report.py>), [docs/report-guide.md](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/docs/report-guide.md>), [docs/examples/report.html](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/docs/examples/report.html>).

- Texto gerado executado em bash e PowerShell com funções inofensivas, conferindo sessão/argumentos; copiar por teclado no browser com fallback manual em file://.

**Limites:** Nenhum comando de restore real foi executado; clipboard negado no contexto file:// usou a seleção manual prevista.

<a id="revisao-ops-04"></a>

#### OPS-04 · P2 · corrigido e validado

**Achado:** O CSS mantém declarações de espaçamento e borda anuladas no mesmo bloco

**Correção:** Removidas somente declarações anuladas no mesmo bloco; relatório regenerado com as mesmas evidências históricas.

**Arquivos:** [scripts/report.css](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/report.css>), [docs/examples/report.html](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/docs/examples/report.html>).

- Estilos computados de margens/padding/bordas idênticos antes/depois: 320/768/1440 × screen/print × details aberto/fechado (12 combinações).

<a id="revisao-ops-05"></a>

#### OPS-05 · P1 · corrigido e validado

**Achado:** Importação interrompida após publicar o pacote perde as marcas de origem externa e proteção

**Correção:** Pacote portátil sem registro íntegro conserva imported/protected=true; registro posterior preserva esses flags. Recuperação usa backups protect; legado sem manifesto mantém compatibilidade.

**Arquivos:** [scripts/backup_catalog.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/scripts/backup_catalog.py>), [tests/test_backup_package.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/tests/test_backup_package.py>), [tests/test_backup_catalog.py](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/tests/test_backup_catalog.py>), [docs/security.md](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/docs/security.md>), [docs/runbooks.md](<https://github.com/arthurjoanes/containerops/blob/ed9a4047271705477609a1031593b96c625ef29a/docs/runbooks.md>).

- Falhas antes/depois da publicação e durante escrita do catálogo; reabertura em novo processo; restore sem confiança bloqueado antes do preflight; retenção mantém órfão mesmo com cópia posterior; recuperação repetida preserva hashes/flags. Linux: 48 testes de backup passaram.

**Limites:** Provas usaram dumps sintéticos e preflight/evidência mockados; nenhum pg_restore, exclusão real de backups ou falha injetada em runtime existente.

**Rodadas registradas:**

- `Windows Python3.11 unittest backup_package / backup_catalog / operations / scripts.test_report`: 26/26; 21 passed+1skip; 17 passed+1skip; 75/75.
  Tentativas iniciais Python3.12/3.13 Windows esbarraram em divergência de stat/fstat do fingerprint já existente; Python3.11 e Linux passaram sem relaxar a proteção.
- `Docker Linux/root, containerops-co-20261012-f040d4f5-test:local, fonte atual read-only, rede none: unittest test_backup*.py / test_report.py / test_operations.py`: 48/48 backup; 75/75 relatório; 18/18 operações.
  Fixtures sintéticas; comandos externos mockados; sem restauração de banco real.
- `.venv/Scripts/ruff.exe check .; .venv/Scripts/ruff.exe format --check .`: All checks passed; 66 files formatted.
- `node _correcoes_2026-10-13/backend_ops_browser.cjs`: Chromium: 320/768/1440; navegação/teclado/assets/estilos aprovados; nenhum pageerror.
  API sintética com probe desativado; OPS snapshot histórico regenerado, sem afirmar disponibilidade atual.
- `py -3.11 _correcoes_2026-10-13/backend_ops_checks.py`: 260 referências; comandos shell sintéticos; corpo Python do guia; relatório histórico regenerado.
  Sem restore real nem consulta comercial externa.

**Logs e recibos:** [backend-ops-directed-checks.json](<_correcoes_2026-10-13/backend-ops-directed-checks.json>), [api-qa/browser.json](<_correcoes_2026-10-13/api-qa/browser.json>).

### cycleops

<a id="revisao-cyc-01"></a>

#### CYC-01 · P1 · corrigido e validado

**Achado:** Catálogo e eventos do replay não têm seus hashes conferidos

**Correção:** Carregamento confere SHA-256 do catálogo e dos eventos descomprimidos contra o manifesto antes de decodificar os bytes; validações estruturais permanecem.

**Arquivos:** [apps/web/src/streams/artifact.ts](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/src/streams/artifact.ts>), [apps/web/tests/unit/artifact-loading.test.ts](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/tests/unit/artifact-loading.test.ts>), [apps/web/tests/unit/logic.test.ts](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/tests/unit/logic.test.ts>), [apps/web/tests/unit/diagnostics.test.ts](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/tests/unit/diagnostics.test.ts>).

- Mutações de catálogo e eventos ainda válidas pelo schema são rejeitadas por hash; testes demonstraram a falha antes da correção.
- 118 testes frontend passaram, incluindo gzip como arquivo e como content-encoding; seis regressões de BOM cobrem catálogo, eventos e diagnósticos.

<a id="revisao-cyc-02"></a>

#### CYC-02 · P1 · corrigido e validado

**Achado:** Abas Lista/Mapa anunciam um padrão de teclado que não implementam

**Correção:** Alternância entre Lista e Mapa usa grupo de botões com aria-pressed, estado selecionado e operação nativa por teclado.

**Arquivos:** [apps/web/src/app/App.tsx](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/src/app/App.tsx>), [apps/web/tests/e2e/uiux.spec.ts](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/tests/e2e/uiux.spec.ts>), [apps/web/tests/e2e/pages.spec.ts](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/tests/e2e/pages.spec.ts>), [apps/web/tests/media/identity.spec.ts](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/web/tests/media/identity.spec.ts>).

- 23 testes Playwright passaram, incluindo Tab/Shift+Tab/Enter/Espaço em 320 e 390 px, foco visível e axe.

<a id="revisao-cyc-03"></a>

#### CYC-03 · P2 · corrigido e validado

**Achado:** Guia chama de pura uma função que modifica o estado recebido

**Correção:** CONTRIBUTING e a instrução local descrevem o contrato determinístico com atualização do estado em memória, cópia pelo chamador quando necessária e possível emissão de warnings diagnósticos por logging.

**Arquivos:** [CONTRIBUTING.md](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/CONTRIBUTING.md>), AGENTS.md (arquivo local ignorado pelo Git).

- Descrição confrontada com o motor e seus testes; 118 testes frontend passaram sem alterar o contrato do motor.

**Limites:** AGENTS.md é ignorado pelo repositório; a orientação publicada está em CONTRIBUTING.md.

<a id="revisao-cyc-04"></a>

#### CYC-04 · P2 · corrigido e validado

**Achado:** Configuração aceita quota não finita e desativa a suspensão por tamanho

**Correção:** Configuração rejeita quotas não finitas e não positivas antes de inicializar o worker.

**Arquivos:** [apps/backend/src/cycleops/worker/main.py](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/backend/src/cycleops/worker/main.py>), [apps/backend/tests/test_worker_main.py](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/backend/tests/test_worker_main.py>).

- NaN, inf, -inf, 1e999, zero e negativo recusados; 0.5 e 1024 aceitos.
- 30 testes de configuração e arquivo bruto passaram; Ruff e mypy aprovados.

<a id="revisao-cyc-05"></a>

#### CYC-05 · P2 · corrigido e validado

**Achado:** Documentação apresenta a limpeza do arquivo bruto como teto rígido de armazenamento

**Correção:** Documentação identifica limpeza ao abrir arquivo, unidade 500 MiB e preservação do arquivo ativo, que pode crescer entre rotações.

**Arquivos:** [SECURITY.md](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/SECURITY.md>), [apps/backend/src/cycleops/worker/archive.py](<https://github.com/arthurjoanes/cycleops/blob/2a1dc6a02ad2f7958a4b7933600254e8c507420f/apps/backend/src/cycleops/worker/archive.py>).

- Política confrontada com implementação; testes de rotação, retenção e arquivo ativo preservados e aprovados.

**Rodadas registradas:**

- `corepack pnpm test --maxWorkers=1 --testTimeout=30000`: 118 passed.
  Duas rodadas anteriores tiveram timeouts de 5 s em dois testes de lista inalterados (116 passaram). A rodada final usa um worker e prazo de 30 s apenas por CLI, mantendo todas as asserções e sem mudar a configuração versionada. Isso valida o comportamento, não o tempo de execução padrão sob carga.
- `corepack pnpm e2e tests/e2e/uiux.spec.ts tests/e2e/pages.spec.ts`: 23 passed.
- `corepack pnpm typecheck; corepack pnpm lint`: Aprovados, repetidos após o ajuste final das fixtures.
- `pytest test_worker_main.py test_worker_archive.py; ruff; mypy`: 30 passed; Ruff aprovado; mypy sem erros em 77 arquivos.

**Logs e recibos:** [cyc-web-unit.log](<_correcoes_2026-10-13/cyc-web-unit.log>), [cyc-web-unit-parallel-timeout.log](<_correcoes_2026-10-13/cyc-web-unit-parallel-timeout.log>), [cyc-web-unit-two-workers-timeout.log](<_correcoes_2026-10-13/cyc-web-unit-two-workers-timeout.log>), [cyc-bom-before.log](<_correcoes_2026-10-13/cyc-bom-before.log>), [cyc-web-e2e.log](<_correcoes_2026-10-13/cyc-web-e2e.log>), [cyc-backend-tests.log](<_correcoes_2026-10-13/cyc-backend-tests.log>).

### quake-exposure

<a id="revisao-qex-01"></a>

#### QEX-01 · P1 · corrigido e validado

**Achado:** Parser confere apenas os cantos do grid e aceita células intermediárias fora de ordem

**Correção:** Parser valida a longitude e a latitude esperadas de cada célula antes de armazenar MMI, preservando tolerância e normalização do antimeridiano.

**Arquivos:** [src/quakeexposure/domain/grid.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/src/quakeexposure/domain/grid.py>), [tests/unit/test_grid.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/tests/unit/test_grid.py>).

- Troca, repetição e deslocamento de coordenadas internas são rejeitados.
- 259 testes unitários passaram, incluindo grids reais, oráculo e antimeridiano; fixture externa oficial foi obtida pelo script do projeto e teve seu hash verificado.

<a id="revisao-qex-02"></a>

#### QEX-02 · P1 · corrigido e validado

**Achado:** Consulta pendurada impede o próximo ciclo automático de atualização

**Correção:** Consultas à API local têm prazo de 15 segundos cobrindo headers e corpo; mudança de seleção aborta o ciclo anterior. Somente o tick atual agenda a próxima atualização, preservando a última publicação e a recuperação existente.

**Arquivos:** [web/src/api.ts](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/web/src/api.ts>), [web/src/refresh.ts](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/web/src/refresh.ts>), [web/src/main.ts](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/web/src/main.ts>), [web/src/api.test.ts](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/web/src/api.test.ts>), [web/src/refresh.test.ts](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/web/src/refresh.test.ts>), [docs/operacao.md](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/docs/operacao.md>).

- 133 testes frontend passaram; TypeScript e build aprovados.
- Chromium confirmou timeout, preservação da publicação, recuperação automática e aborto de seleção anterior; sem erros de página ou overflow em 320/390/768/1440 px.
- Capturas desktop e mobile inspecionadas visualmente.

**Limites:** Navegador usou build local com respostas HTTP simuladas a partir de snapshots; não foi provocada indisponibilidade no USGS. O prazo é da API local; o adaptador da demo estática conserva seu transporte próprio.

<a id="revisao-qex-03"></a>

#### QEX-03 · P2 · corrigido e validado

**Achado:** User-Agent anuncia versão diferente da versão do pacote

**Correção:** User-Agent deriva a versão dos metadados do pacote instalado e tem identificação explícita de desenvolvimento quando os metadados não existem.

**Arquivos:** [src/quakeexposure/ingestion/http.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/src/quakeexposure/ingestion/http.py>), [tests/unit/test_http.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/tests/unit/test_http.py>).

- Teste HTTP com transporte simulado confere o header enviado contra a versão instalada 0.3.0; suíte unitária aprovada.

<a id="revisao-qex-04"></a>

#### QEX-04 · P1 · corrigido e validado

**Achado:** Blob armazenado é reutilizado sem conferir a identidade SHA-256

**Correção:** Toda leitura de blob compara o SHA-256 descomprimido com a captura registrada. Reutilização de caminho valida o arquivo existente e preserva conteúdo suspeito. Projeção entra em quarentena e cálculo com grid divergente não é publicado.

**Arquivos:** [src/quakeexposure/ingestion/blobs.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/src/quakeexposure/ingestion/blobs.py>), [src/quakeexposure/ingestion/projection.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/src/quakeexposure/ingestion/projection.py>), [src/quakeexposure/exposure/worker.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/src/quakeexposure/exposure/worker.py>), [tests/unit/test_blobs.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/tests/unit/test_blobs.py>), [tests/integration/test_collector.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/tests/integration/test_collector.py>), [tests/integration/test_exposure.py](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/tests/integration/test_exposure.py>), [docs/operacao.md](<https://github.com/arthurjoanes/quake-exposure/blob/47fda4c96259e6442c89d0e1ce09fe3f055fff5d/docs/operacao.md>).

- Testes cobrem gzip íntegro adulterado, gzip truncado, hash vindo da captura e reutilização de arquivo.
- 42 integrações de coletor/exposição passaram em PostGIS descartável, incluindo quarentena e recusa de publicação com grid substituído.

**Limites:** Integrações dirigidas de coletor/exposição; a stack CDC completa não foi reexecutada nesta correção.

**Rodadas registradas:**

- `.venv/Scripts/python.exe -m pytest tests/unit -q`: 259 passed; 24.32s.
- `.venv/Scripts/python.exe -m pytest tests/integration/test_collector.py tests/integration/test_exposure.py -q`: 42 passed; PostGIS descartável.
- `ruff check .; ruff format --check .; mypy .`: Aprovados; 113 arquivos formatados, 95 arquivos verificados por mypy.
- `npm test; npm run build; verificação TypeScript`: 133 testes passaram; build e tipos aprovados.
- `node _correcoes_2026-10-13/qex-browser-check.mjs`: Timeout/recuperação/cancelamento e quatro larguras aprovados.

**Logs e recibos:** [qex-python-unit.log](<_correcoes_2026-10-13/qex-python-unit.log>), [qex-integration.log](<_correcoes_2026-10-13/qex-integration.log>), [qex-real-grid-tests.log](<_correcoes_2026-10-13/qex-real-grid-tests.log>), [qex-web-tests.log](<_correcoes_2026-10-13/qex-web-tests.log>), [qex-web-build.log](<_correcoes_2026-10-13/qex-web-build.log>), [qex-qa/browser.json](<_correcoes_2026-10-13/qex-qa/browser.json>).

## Ambiente de validação

O Docker Desktop precisou ser recuperado para permitir integrações. Duas pastas contendo apenas sockets órfãos foram renomeadas e preservadas; seus caminhos e o procedimento constam de [docker-recovery.json](<_correcoes_2026-10-13/docker-recovery.json>). Os testes usaram projetos próprios. As stacks existentes foram preservadas; a inicialização do Docker reativou containers que já tinham política de reinício.

As fixtures e serviços temporários criados para esta execução foram encerrados ao concluir as verificações. Não foi feito reset de volumes pelo agente nem restauração sobre bancos do usuário.

A revisão automática rejeitou a remoção de `_correcoes_2026-10-13/rec-clean-install/node_modules` com a mensagem `blocked by policy`, sem motivo adicional. A instalação temporária foi preservada; não houve tentativa de contornar a rejeição com outro shell ou método.

## Rastreabilidade

- [Inventário anterior às correções](<_correcoes_2026-10-13/inventario-inicial.json>)
- [Consolidado dos 47 itens e estado final dos checkouts](<_correcoes_2026-10-13/consolidated-corrections.json>)
- [Auditoria original](<AUDITORIA_COMPLETA_PORTFOLIO.md>)
- [Auditoria complementar](<COMPLEMENTO_AUDITORIA_PORTFOLIO.md>)
