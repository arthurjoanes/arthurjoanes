# Loja Assistente — revisão independente de código e contratos

HEAD `075ea83a0a7b99ccef5868050609c3c36c4d907f`. Foi encontrada uma regressão concreta no fluxo de LOJ-01, reproduzida e corrigida. Os demais sete itens não apresentaram novo defeito concreto nos caminhos lidos.

## Defeito reproduzido e correção

openConversation e showFavorites limpavam conflict, mas preservavam queryIntent. ask reutilizava o corpo antigo; reducer concatenava resposta na conversa atual. Reproduzido com APIs sintéticas.

Guard de intenção nos caminhos de abertura/execução, manutenção do conflito ao consultar favoritos, aviso de recuperação persistente, nova intenção criada apenas depois do guard, reducer separando conversas e cursor, confirmação correta para recuperação 404.

A prova anterior está em `loja-intent-before.json`. Os testes posteriores conferem navegação, favoritos, recuperação com 404, início explícito de nova análise, troca de conta e separação do estado entre conversas. Não houve chamada paga ou dado real.

## Cobertura por item

- **LOJ-01** — Regressão de navegação confirmada e corrigida nesta revisão. Admissão backend persiste antes da interpretação, usa unicidade tenant/usuário/chave e fingerprint; resposta e vínculo com intenção são confirmados juntos. Recuperação chama get_answer com autorização atual. A UI agora impede trocar o contexto ou executar enquanto há intenção incerta, mantém recuperação acessível mesmo ao consultar favoritos e não mistura arrays de conversas. GET 404 seguido de POST usa a mesma chave e mensagem específica. Nova análise e troca de conta limpam apenas o estado local. Prova antes + quatro novas jornadas sintéticas e teste puro do reducer; teste existente de recuperação sem segundo POST também aprovado.
- **LOJ-02** — Sem regressão concreta adicional. Leituras de histórico e favoritos iniciam independentemente. Histórico tem erro/loading/recarga e hidrata pendência sem depender do sucesso de favoritos. Guards de geração/revisão descartam resultados antigos; 401/403 continuam limpando acesso. Dois testes existentes do arquivo direcionado aprovados (503 isolado em cada endpoint).
- **LOJ-03** — Sem regressão concreta adicional. Cursores HMAC incluem tenant, usuário, escopo e posição data/ID; detalhe e páginas reautorizam planos/pendências. Limites 50/100 usam item extra e desempate por ID. O consumidor tem ações explícitas para páginas anteriores. Jornada de conversa da segunda página e 101ª resposta aprovada. Testes PostgreSQL foram lidos; não reexecutados nesta etapa.
- **LOJ-04** — Sem regressão concreta adicional. Fim incluído no formulário converte para exclusivo em datas civis UTC; validação verifica datas reais e janela de 1–90 dias. Limite superior 30/12/9999 está declarado no input. Teste puro de bissexto/virada/limites e jornadas em UTC, Los Angeles e São Paulo aprovados.
- **LOJ-05** — Sem regressão concreta adicional. Histórico e resultado compartilham formatTimestamp com America/Sao_Paulo e mantêm time/dateTime. Mesmo instante 2026-10-13T01:30:00Z conferido em três fusos do navegador, exibido 12/10/2026, 22:30.
- **LOJ-06** — Sem contradição concreta adicional nas contagens lidas. README e verification mantêm 85/79/69 vinculados às respectivas rodadas; distingem casos puros e jornadas e não promovem Azure histórico a teste novo. Imagens estão com o coordenador e não foram duplicadas nesta tarefa. Leitura documental e recibos existentes. verify_evidence.py aprovado na correção anterior, sem reexecução nesta revisão.
- **LOJ-07** — Sem regressão concreta adicional. BoundedSemaphore(2) adquirido sem espera antes do hasher, 503/Retry-After no excesso e release em finally. Login desconhecido também passa por verify_password usando dummy hash. Admissão durável por conta/origem permanece. Teste controlado de dois trabalhos e exceção lido; não repetido. Os 128 MiB são orçamento nominal por processo, não RSS medido.
- **LOJ-08** — Sem regressão concreta adicional. SecretStr nos três campos e hide_input_in_errors; consumidores de banco/migração/HMAC/OpenAI extraem somente no uso. Guards de disponibilidade preservam string vazia. Teste usa marcadores sintéticos e _env_file=None; documento distingue erro textual de errors() estruturado. Leitura do teste e busca de todos os consumidores desses campos em backend/src, migrations e scripts. Nenhuma credencial lida.

## Validação executada

- `node _revisao_conformidade_2026-10-13/loja-intent-probe.cjs`: Falha reproduzida antes: após abrir conversa B, envio de texto novo usa corpo/chave antigos e seletor mistura b-1/a-1; confirmação imprecisa após GET 404+POST também reproduzida. Recibo: `loja-intent-before.json`. Limite: Build anterior PRNHH9YPY3rFsEgtP5RLT e APIs totalmente sintéticas; não houve nova chamada paga.
- `playwright test e2e/audit-regressions.spec.ts --reporter=list,json`: 13 passed, 7,7 s: 11 testes de navegador e 2 puros, incluindo 5 novos (4 navegador e 1 puro). Recibo: `loja-review-playwright.json; loja-review-playwright.log`. Limite: Chromium local em 127.0.0.1:3129, APIs interceptadas e build de produção novo; não é integração real do backend.
- `playwright test e2e/domain.spec.ts --grep "esclarecimento preserva|pendência ativa"`: 2 passed, 554 ms; regressões puras de filtros, pendência e troca de identidade. Recibo: `loja-review-state-tests.json; loja-review-state-tests.log`. Limite: Não abre navegador; não somar como jornadas.
- `next build`: Build Next.js 16.3.8 aprovado, incluindo TypeScript e geração das páginas. Recibo: `loja-review-build.log`. Limite: Dependências já instaladas; não é instalação limpa.
- `eslint use-workspace.ts conversation-state.ts workspace.tsx audit-regressions.spec.ts`: Exit 0, sem diagnósticos. Recibo: `loja-review-eslint.log`. Limite: Direcionado aos quatro arquivos TypeScript alterados nesta revisão.
- `prettier --check nos quatro arquivos TypeScript alterados`: Exit 0; todos os arquivos seguem o formato. Recibo: `loja-review-format.log`.
- `tsc --noEmit após restaurar next-env.d.ts`: Exit 0, sem diagnósticos. Recibo: `loja-review-types.log`.
- `python -m uv run --with markdown-it-py[linkify]==4.0.0 --with github-slugger==0.0.3 python evidencedesk/scripts/check_repository_docs.py --root loja-assistente`: Exit 0, problems vazio; detalhes no recibo. Recibo: `loja-review-docs-check.json`. Limite: Checagem offline de caminhos/âncoras; links externos não certificados.
- `git diff --check; git diff -- frontend/next-env.d.ts; inspeção listener 3129`: Sem erros de whitespace, next-env.d.ts sem diff e servidor temporário 3129 encerrado. Limite: Nenhum container, volume, banco ou serviço real criado por esta revisão.

## Arquivos alterados nesta revisão

- `frontend/src/features/assistant/use-workspace.ts`
- `frontend/src/features/assistant/conversation-state.ts`
- `frontend/src/features/assistant/workspace.tsx`
- `frontend/e2e/audit-regressions.spec.ts`
- `docs/api-contract.md`
- `docs/architecture.md`

## Limites

- Sem novas integrações PostgreSQL ou chamada de provedor; verificações anteriores do backend foram lidas e preservadas, não contadas como executadas aqui.
- Não constitui revisão completa de segurança, carga ou todos os módulos do repositório.
- Imagens/diagramas de Loja foram inspecionados pelo coordenador; esta atribuição cobre contratos e código.
- Recuperação automática após recarregar toda a página continua fora do contrato implementado; intenção está na instância da tela.
- Sem commit, push, PR ou alteração em base real.

Servidor exclusivo 127.0.0.1:3129 encerrado e ausência de listener conferida. Nenhum container/volume criado. next-env.d.ts voltou exatamente ao conteúdo anterior; logs e recibos externos preservados.
