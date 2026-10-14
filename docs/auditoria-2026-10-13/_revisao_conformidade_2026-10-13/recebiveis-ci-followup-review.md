# Ajuste adicional da jornada de Recebíveis

No commit `d0681de47923eeeea9aadd88201d8111c69e68b2`, a CI aprovou 220 testes de backend e 38 casos Chromium. O compacto corrigido passou; o teste de retorno avançou além do foco e encontrou uma segunda expectativa antiga, na linha 814.

O Resumo conserva a busca e o vencimento de um título vencido. Selecionar **Ver títulos em dia** nesse recorte retorna uma lista vazia; esperar um título aberto era incompatível com a preparação do teste. A jornada agora confere que busca e datas foram preservadas, limpa o recorte explicitamente e mantém as exigências de teclado, foco, situação `current` e badge **Em aberto**.

Somente `frontend/tests/journey.spec.ts` mudou para essa correção. Prettier, ESLint direcionado, TypeScript e diff check passaram. Diff: `rec-ci-followup.diff`. Logs remotos e comandos estão no JSON.

Sem alteração de runtime, timeout, retry ou skip. Nenhum servidor local foi reiniciado; o bloqueio anterior permanece respeitado. A aprovação da jornada completa depende da próxima CI autorizada após o commit do responsável principal.

## Resultado remoto

CI do commit `bd5eef405232e7bc8f49c8f642926e44af7b4b71` aprovada: [run 38496290602](https://github.com/arthurjoanes/gestao-recebiveis/actions/runs/38496290602), job 115632681667. Foram 220 testes de backend, prova de upgrade aprovada e 39 casos Chromium sem falhas, incluindo os dois cenários corrigidos. O log resumido está em `recebiveis-ci-bd5eef4-success-summary.log`; artefato browser-evidence 11864471455. A limitação local acima permanece histórica e foi suprida por esta execução remota autorizada.
