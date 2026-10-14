# Correção da CI de Gestão de Recebíveis

Base: `5ff3f45b73ba256f60f4a5132724a820abb49de9`. A execução 38493406831, job 115623614140, teve 37 testes Chromium aprovados e dois reprovados. O excerto remoto está em `recebiveis-ci-failure-excerpt.log`.

O teste de retorno procurava um botão, embora o acionador agora seja link. A expectativa continua exigindo foco. No compacto, limpar o recorte remonta os filtros e os fecha; o reset passou a chamar o mesmo callback de aplicação, que devolve o foco ao controle atual. O teste agora exige recorte e URL limpos, resultados restaurados, foco, datas vazias, reset quando já não há filtros e fechamento manual depois de reabrir. A documentação descreve esse comportamento.

Arquivos: `frontend/src/features/receivables.tsx`, `frontend/tests/journey.spec.ts` e `docs/frontend-quality.md`. Diff: `rec-ci-fix.diff`.

Build de produção, ESLint, Prettier, TypeScript, checker offline de documentação e `git diff --check` passaram. Os logs e comandos exatos estão no JSON. O arquivo gerado `next-env.d.ts` permanece sem alteração, usando `.next/types`.

**Chromium da correção ainda não foi executado.** A revisão automática rejeitou tanto o comando direto de inicialização do Next quanto `Start-Process` com janela oculta; informou somente `blocked by policy`. Nenhum servidor frontend foi iniciado e não houve contorno por outro executor. O responsável principal usará a CI autorizada após publicar para verificar os casos; este pacote não constitui aprovação comportamental.

O preparo isolado criou apenas `rec-ci-fix-b41a20-db`, `rec-ci-fix-b41a20-api` e a rede interna `rec-ci-fix-b41a20`. Banco em tmpfs, dados sintéticos e API em porta exclusiva. Todos foram removidos; as listagens finais ficaram vazias. Não houve uso ou alteração de stacks preexistentes, volume persistente, commit ou push.

## Publicação e resultado remoto

Publicado por root em `main`, commit `bd5eef405232e7bc8f49c8f642926e44af7b4b71`. Consulta: 2026-10-14 01:40:50 UTC.

| Contexto | Workflow | Run | Resultado observado |
| --- | --- | --- | --- |
| push main | Git history security | [38496290589](https://github.com/arthurjoanes/gestao-recebiveis/actions/runs/38496290589) | success |
| push main | Gestão de recebíveis checks | [38496290602](https://github.com/arthurjoanes/gestao-recebiveis/actions/runs/38496290602) | success |

Todos os workflows do push de main passaram.

Jobs e etapas estão em `gestao-recebiveis-ci-published-latest.json`. As verificações locais e seus limites continuam registrados acima como histórico da preparação.
