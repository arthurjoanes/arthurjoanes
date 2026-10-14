# Correção de UUID na CI de navegador da Loja

A execução de PR 38494308614, código `0786395`, aprovou os 485 testes de backend, mas terminou com 41 falhas e 57 aprovações na etapa de navegador. O código publicado em `e20759c` é o mesmo; esse commit alterou apenas documentação.

O envio de pergunta chamava `crypto.randomUUID()` antes do try/finally. Essa API não existe na origem HTTP `frontend:3102` da CI. A exceção ocorria antes do POST e mantinha a consulta ocupada. A hipótese foi confirmada em Chromium 153 por uma página HTTP sintética inteiramente respondida por Playwright, sem servidor: `isSecureContext=false`, `randomUUID` indefinido e TypeError na chamada original.

O helper `createClientRequestId` usa a API nativa quando disponível e, em HTTP, usa 16 bytes de `crypto.getRandomValues`, com versão/variante UUIDv4. A geração foi movida para o try/finally. A intenção continua conservando a mesma chave e o mesmo payload para recuperação; nenhum fallback usa Math.random. O UUID do proxy Node permanece nativo.

Três testes Chromium passaram em 1,4 s: HTTP, HTTPS e falha da fonte criptográfica. Conferem UUIDv4, chamada da API criptográfica, duas chaves distintas e rejeição sem entropia. O teste existente de resposta perdida agora exige o formato UUIDv4, mantendo a verificação de POST único. Lint, tipos, formato, build e diff check passaram. Arquivos, comandos e hashes estão no JSON; diff completo em `loja-browser-ci-fix.diff`.

Fontes: [Web Crypto randomUUID](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID), [getRandomValues](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) e [RFC 9562, UUIDv4](https://www.rfc-editor.org/rfc/rfc9562.html#name-uuid-version-4).

As jornadas completas da correção ainda precisam da próxima CI. Não houve servidor local, mudança de Compose, polyfill global, novas dependências, commit ou push. O bloqueio anterior foi respeitado. Os três testes locais não substituem a integração completa com PostgreSQL.

## Publicação posterior e CI

Root publicou os quatro arquivos em `main`, commit `d46a980f520e7ac7c8610c8852f5e829566cfdc9`. Consulta remota: 2026-10-14 01:58:35 UTC. As provas locais e a falha histórica acima permanecem vinculadas aos seus próprios contextos.

- [Local stack checks · run 38498010897](https://github.com/arthurjoanes/loja-assistente/actions/runs/38498010897): in_progress.

O snapshot `loja-assistente-ci-published-latest.json` contém jobs e etapas desse SHA. A aprovação remota só deve ser declarada quando a execução estiver concluída com sucesso.

Recibo congelado para exportação com o estado observado às 01:58:35 UTC de 14/10/2026: `verify` em `Browser journeys`, `secret-history` concluído com sucesso. A suíte completa permanece pendente, sem contagem final de testes neste SHA. O monitoramento foi encerrado por solicitação do responsável; este documento não afirma aprovação da integração completa.
