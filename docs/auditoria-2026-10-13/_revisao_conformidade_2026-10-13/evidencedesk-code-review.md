# EvidenceDesk — revisão contratual e correções complementares

Base: `e4dd8efe73e50999b9a75896ce74b75d460223da`. Revisão de 13/10/2026. Foram preservadas as alterações anteriores; nenhum commit, push ou PR foi criado.

## Resultado dos sete IDs

- **EVD-02:** corrigida a troca indevida de chave quando se perdia a resposta de uma nova exportação após outra ter terminado.
- **EVD-05:** corrigidos foco e associação acessível do erro em Pedidos relacionados. As quatro listas de lacunas da correção anterior continuam preservadas.
- **EVD-03:** implementação e contrato coerentes; documentação esclarecida para separar retomada na mesma janela de persistência após reload/fechamento.
- **EVD-01, EVD-04, EVD-06 e EVD-07:** não foi encontrado defeito confirmável no confronto entre documentação, código e testes. Suas suítes não foram repetidas.

## Documentação lida antes dos diffs

- `README.md`
- `frontend/README.md`
- `SECURITY.md`
- `docs/api-contract.md`
- `docs/architecture.md`
- `docs/threat-model.md`
- `docs/frontend.md`
- `docs/runbooks/local.md`
- `docs/runbooks/retention.md`
- `docs/runbooks/observability.md`

Também foram lidos o pacote `_correcoes_2026-10-13/evidencedesk.json`, a seção EvidenceDesk do changelog e a seção correspondente do relatório consolidado. Não foram encontrados AGENTS.md, CLAUDE.md ou CONTRIBUTING.md aplicáveis no checkout público. A orientação React do skill vercel-react-best-practices, lida anteriormente nesta revisão compartilhada, foi aplicada.

## EVD-02 — resposta perdida na segunda intenção

Em `frontend/src/features/dossiers/dossier-view.tsx:239`, depois de uma exportação A terminal, a criação de B gerava uma chave nova. Se a resposta de B se perdia, o estado ainda apontava para A. O próximo clique voltava a gerar chave C. Isso contrariava `docs/api-contract.md:67` e a afirmação do relatório de que transporte incerto conserva a chave.

Antes da correção, executei a função extraída do working tree com transporte sintético: `afterLostResponse=terminal-A`, chaves `key-1/key-2`, `keyPreserved=false`. Não houve rede nem exportação real nessa prova.

A linha 246 agora limpa a referência ao resultado terminal anterior ao iniciar a nova intenção. A chave de B permanece armazenada durante resultado desconhecido e é reutilizada pelo próximo clique. O teste em `frontend/e2e/audit-regressions.spec.ts:314` perde as respostas do primeiro e do terceiro POST, para failed/cancelled/expired, e exige pares de chaves iguais dentro de cada intenção e diferentes entre intenções.

## EVD-05 — foco no campo de pedidos

O resumo em `dossier-editor.tsx` procurava o campo pelo atributo name, ausente em Pedidos relacionados. Uma referência de 201 caracteres gerava erro, mas clicar no resumo não focava o controle.

Em `frontend/src/features/dossiers/dossier-editor.tsx:438`, Controller agora associa name, ref, blur, valor e erro ao input. O ID usa o identificador estável do campo da alegação; aria-invalid e aria-describedby expõem a mensagem contextual. A representação continua sendo um array separado por vírgulas.

O cenário em `frontend/e2e/audit-regressions.spec.ts:260` confirma referência de 201 caracteres, descrição acessível, foco ao salvar e ao clicar no resumo, e preservação da referência e do texto da alegação.

## EVD-03 — esclarecimento documental

`docs/frontend.md:90` deixou de apresentar a recuperação da resposta inicial como totalmente pendente. Agora descreve o teste de UI na mesma janela, com API interceptada, e o teste separado de lote/reserva em PostgreSQL. Recarregar ou fechar a página continua sem retomada persistente; não foi acrescentada arquitetura de persistência.

## Verificações desta revisão

- Build de produção: aprovado, incluindo TypeScript.
- ESLint dos três arquivos TS/TSX alterados: aprovado.
- Quatro E2E Chromium direcionados: **4 passed em 9,0 s**, sobre build de produção em loopback 3226 e API interceptada.
- Prettier dos arquivos alterados e git diff --check: aprovados.
- Recibos anteriores conferidos: 214 Python, 81 Vitest e 5 Chromium, sem falhas/skips. Estes números não são novas execuções e não foram somados aos quatro testes atuais.

Recibos: `evidencedesk-build.log`, `evidencedesk-playwright.log` e `evidencedesk-browser/e2e-results.json`, nesta pasta. O ESLint retornou Exit 0 sem saída textual; esse resultado foi observado no retorno do comando e não possui arquivo de log salvo.

## Cobertura e limites

- Browser usa API sintética interceptada; nenhuma exportação real foi gerada, nenhum provedor chamado e nenhuma stack completa criada.
- Não repeti backend, todas as jornadas frontend ou suite Vitest. Testes novos cobrem exclusivamente os dois defeitos corrigidos.
- Importação não oferece persistência de chave após desmontar/recarregar/fechar a tela; documentação esclarece o limite.
- Não houve sessão manual com leitor de tela ou inspeção pixel a pixel da documentação EvidenceDesk nesta atribuição.
- Relatórios globais e pacotes originais de correção não foram alterados; conclusões anteriores sobre EVD-02 devem ser lidas com esta correção complementar.

Imagens documentais: nenhuma examinada em pixels neste packet de código; sua existência não foi tratada como validação visual. Nenhuma imagem ou evidência histórica foi alterada.

O servidor criado exclusivamente para esta revisão (PID 38708, node scripts/start.mjs, porta 3226) foi encerrado após conferir sua identidade. Nenhum listener 3226 permaneceu e nenhum serviço do usuário foi parado.

