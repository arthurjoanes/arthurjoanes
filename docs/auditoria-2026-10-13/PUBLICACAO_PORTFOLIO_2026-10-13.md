# Publicação e revisão final do portfólio

Esta etapa atende ao pedido posterior de revisar a apresentação, publicar as alterações no GitHub e preparar uma revisão independente pelo Claude. O perfil é [arthurjoanes](https://github.com/arthurjoanes). As alterações dos oito projetos próprios e do perfil foram publicadas nas branches abaixo; os dois forks já continham as contribuições examinadas.

Os quatro relatórios de auditoria e correção são snapshots anteriores à autorização de publicação. As frases sobre não ter feito commit ou push descrevem aquela etapa. Este registro documenta a publicação posterior e seus checks; não transforma capturas ou testes históricos em evidência do novo commit.

## Revisão da apresentação

A leitura editorial final produziu ajustes pontuais em 20 arquivos de entrada: READMEs PT/EN e guias de propósito, interface, demonstração e capturas. Foram corrigidos repetição, alt em idioma incorreto, frases genéricas, narração de auditoria dentro da explicação do produto e referências históricas chamadas de atuais. Na Loja, a orientação após resposta incerta passou a corresponder ao fluxo de recuperação já implementado.

Código, comandos, números e evidências não foram inventados para melhorar a apresentação. Os recibos editoriais discriminam o que foi lido e alterado. A revisão reduz problemas concretos de linguagem; não é um detector de autoria e não certifica ausência universal de padrões associados a IA.

- [Perfil, EvidenceDesk, Recebíveis e Loja](_revisao_conformidade_2026-10-13/final-presentation-review.md)
- [Varejo, API Sentinel e ContainerOps](_revisao_conformidade_2026-10-13/editorial-apps-review.md)
- [CycleOps e QuakeExposure](_revisao_conformidade_2026-10-13/editorial-cycle-quake.md)

### Imagens de demonstração e retirada das paletas

Em um pedido posterior, o usuário solicitou retirar os blocos de paleta e apresentar imagens com informações, resultados ou gráficos. A revisão preservou os arquivos históricos e o CSS; alterou a documentação que os destaca. Capturas antigas continuam identificadas como históricas.

| Projeto | Imagem principal após a revisão | Decisão |
| --- | --- | --- |
| EvidenceDesk | Investigação com 222 pedidos no snapshot, duas divergências do mesmo pedido e fonte de pagamento aberta | Substitui a lista de incidentes |
| Recebíveis | Resumo com saldos, recebimentos e tabela | Mantida, com legenda e data explícitas |
| Loja Assistente | Pergunta, recorte, indicadores e gráfico diário | Mantida |
| Varejo Data Pipeline | Visão geral com totais, receita diária, lojas e produtos | Mantida |
| API Sentinel | Central com totais, histograma e ocorrências | Mantida |
| ContainerOps | Verificação da aplicação com resultados e duração registrada | Substitui o catálogo de IDs; catálogo continua como link |
| CycleOps | Mapa de Oslo, fila e contagens do replay | Mantida |
| QuakeExposure | Mapa, classificação dos ativos e totais por moeda | Mantida |

Os blocos de paleta foram retirados dos READMEs/guias que os apresentavam. O perfil não tinha esse bloco. As escolhas, imagens abertas, hashes e verificações de links estão nos recibos de [Varejo, API e ContainerOps](_revisao_conformidade_2026-10-13/visual-presentation-apps.md), [EvidenceDesk, CycleOps e QuakeExposure](_revisao_conformidade_2026-10-13/visual-presentation-backend.md) e [Recebíveis, Loja e perfil](_revisao_conformidade_2026-10-13/visual-presentation-billing.md).

## Commits e branches

| Repositório | Branch publicada | Commit do código e apresentação | Situação |
| --- | --- | --- | --- |
| arthurjoanes | `main` | [1ffdd6753ed3](https://github.com/arthurjoanes/arthurjoanes/commit/1ffdd6753ed3f8c1332f4a5066897dfc820aa963) | Publicado nesta etapa |
| delta | `docs/fix-builder-example-syntax` | [cffa94f9e2e9](https://github.com/arthurjoanes/delta/commit/cffa94f9e2e9a4d672e994021755f3f8ec125fc7) | Contribuição já publicada; sem alteração |
| fastapi-pagination | `docs/count-before-pagination` | [b626a76fd4f3](https://github.com/arthurjoanes/fastapi-pagination/commit/b626a76fd4f32d4f9328d3bfc1376bfa16a68109) | Contribuição já publicada; sem alteração |
| gestao-recebiveis | `main` | [bd5eef405232](https://github.com/arthurjoanes/gestao-recebiveis/commit/bd5eef405232e7bc8f49c8f642926e44af7b4b71) | Publicado nesta etapa |
| evidencedesk | `main` | [39bb1e1c1427](https://github.com/arthurjoanes/evidencedesk/commit/39bb1e1c1427beea2fe813f46401dc3153bd48cb) | Publicado nesta etapa |
| cycleops | `main` | [1bbecdf355c1](https://github.com/arthurjoanes/cycleops/commit/1bbecdf355c16e76fba1c5624019cbb020cd6926) | Publicado nesta etapa |
| quake-exposure | `main` | [45ef5ee956e6](https://github.com/arthurjoanes/quake-exposure/commit/45ef5ee956e652a208e6ad43d78e78b451e8da4a) | Publicado nesta etapa |
| api-sentinel | `main` | [5e01d32197ee](https://github.com/arthurjoanes/api-sentinel/commit/5e01d32197ee4edad5a5cab56737622cfc527f40) | Publicado nesta etapa |
| containerops | `main` | [9cc4101441b0](https://github.com/arthurjoanes/containerops/commit/9cc4101441b0b0037622a8b40a3612a7b2aff26c) | Publicado nesta etapa |
| varejo-data-pipeline | `main` | [c7d3eb0e6482](https://github.com/arthurjoanes/varejo-data-pipeline/commit/c7d3eb0e64826196f54f0f1c5ac17e4fab153f33) | Publicado nesta etapa |
| loja-assistente | `main` | [d46a980f520e](https://github.com/arthurjoanes/loja-assistente/commit/d46a980f520e7ac7c8610c8852f5e829566cfdc9) | Publicado nesta etapa |

Por pedido do usuário, os oito projetos próprios e o perfil mantêm somente `main`. Na Loja, a main avançou preservando os 11 commits da branch existente; o GitHub confirmou o PR #1 como incorporado, e a branch anterior foi removida. As três branches antigas do perfil também foram removidas depois de confirmar que seus PRs já estavam incorporados. O [recibo da consolidação](_revisao_conformidade_2026-10-13/main-consolidation.json) registra as referências anteriores e o avanço sem force.

O usuário autorizou preservar as branches `docs/fix-builder-example-syntax` e `docs/count-before-pagination`, pois sustentam PRs ainda abertos nos projetos upstream. Os forks mantêm suas branches padrão de origem. Nomes futuros devem descrever uma mudança concreta; nomes vagos ou datados não fazem parte desta entrega.

O pacote documental deste registro é adicionado em um commit separado no perfil; os SHAs acima identificam o código e a apresentação dos projetos, sem depender do próprio commit que guarda este registro.

Os pushes foram normais, sem force. Cada SHA foi confirmado pela referência remota após a publicação. O [manifesto estruturado](_revisao_conformidade_2026-10-13/publication-manifest.json) registra caminhos, arquivos e commits. Os recibos pré-publicação preservam as bases anteriores; essa diferença é esperada.

A [conferência das fontes publicadas](_revisao_conformidade_2026-10-13/published-sources-verification.json) verificou os 11 SHAs e as branches remotas, além da preservação dos 459 arquivos de mídia examinados. É uma checagem de identidade; a inspeção visual está nos recibos anteriores.

## CI depois da publicação

Consulta em UTC: 2026-10-14 01:57:43 UTC. Os resultados são específicos dos SHAs abaixo; uma execução em andamento não é aprovação.

| Repositório | SHA consultado | Workflow | Estado observado |
| --- | --- | --- | --- |
| arthurjoanes | `1ffdd6753ed3` | Nenhum workflow encontrado nesse commit | Não equivale a aprovação |
| gestao-recebiveis | `bd5eef405232` | [Git history security](https://github.com/arthurjoanes/gestao-recebiveis/actions/runs/38496290589) | completed / success |
| gestao-recebiveis | `bd5eef405232` | [Gestão de recebíveis checks](https://github.com/arthurjoanes/gestao-recebiveis/actions/runs/38496290602) | completed / success |
| evidencedesk | `39bb1e1c1427` | [EvidenceDesk checks](https://github.com/arthurjoanes/evidencedesk/actions/runs/38496429519) | completed / success |
| cycleops | `1bbecdf355c1` | [pages](https://github.com/arthurjoanes/cycleops/actions/runs/38496995231) | completed / success |
| cycleops | `1bbecdf355c1` | [ci](https://github.com/arthurjoanes/cycleops/actions/runs/38496435278) | completed / success |
| quake-exposure | `45ef5ee956e6` | [CI](https://github.com/arthurjoanes/quake-exposure/actions/runs/38496440631) | completed / success |
| api-sentinel | `5e01d32197ee` | [Git history security](https://github.com/arthurjoanes/api-sentinel/actions/runs/38496499639) | completed / success |
| api-sentinel | `5e01d32197ee` | [API Sentinel — verificações](https://github.com/arthurjoanes/api-sentinel/actions/runs/38496499623) | completed / success |
| containerops | `9cc4101441b0` | [Git history security](https://github.com/arthurjoanes/containerops/actions/runs/38496509742) | completed / success |
| containerops | `9cc4101441b0` | [ContainerOps](https://github.com/arthurjoanes/containerops/actions/runs/38496509744) | completed / success |
| varejo-data-pipeline | `c7d3eb0e6482` | [Verificação local Spark e Delta](https://github.com/arthurjoanes/varejo-data-pipeline/actions/runs/38497092947) | in_progress / sem conclusão |
| varejo-data-pipeline | `c7d3eb0e6482` | [Git history security](https://github.com/arthurjoanes/varejo-data-pipeline/actions/runs/38497092931) | completed / success |
| loja-assistente | `d46a980f520e` | [Local stack checks](https://github.com/arthurjoanes/loja-assistente/actions/runs/38498010897) | in_progress / sem conclusão |

O [recibo de CI](_revisao_conformidade_2026-10-13/published-ci.json) conserva URLs e horários. Falhas encontradas após o push foram tratadas em commits complementares, sem esconder as execuções anteriores:

- [Loja: tipos da paginação](_revisao_conformidade_2026-10-13/loja-ci-fix-review.md). A primeira execução apontou três anotações ausentes. A validação Linux isolada passou em tipos, lint, migrações, 485 testes de backend e 57 avaliações offline.
- [Loja: identificador de consulta em HTTP](_revisao_conformidade_2026-10-13/loja-browser-ci-fix.md). A suíte completa revelou que `crypto.randomUUID()` não existe na origem HTTP usada pelo navegador do CI. A exceção ocorria antes do POST e fora do tratamento que libera os controles. O identificador agora usa a API nativa quando disponível ou bytes de `crypto.getRandomValues` com versão e variante UUIDv4. A geração ocorre dentro do tratamento de erro; cada intenção conserva sua chave durante a recuperação. Três casos locais em Chromium verificaram HTTP, HTTPS e falha de entropia, sem servidor; a integração completa é registrada no CI do novo SHA.
- [EvidenceDesk: erro acessível](_revisao_conformidade_2026-10-13/evidencedesk-ci-fix.md). O teste antigo encontrava duas mensagens válidas. A correção verifica alerta contextual, descrição acessível, estado inválido e foco; o cenário dirigido passou localmente.
- [Recebíveis: foco após limpar filtros](_revisao_conformidade_2026-10-13/recebiveis-ci-fix-review.md). Além do seletor atualizado de botão para link, foi corrigido o retorno de foco após limpar o recorte compacto. Os testes exigem foco, URL e recorte limpos, resultados restaurados e reabertura. Build, lint e tipos passaram localmente. A revisão automática bloqueou duas tentativas de iniciar o servidor local, informando apenas “blocked by policy”; os testes de navegador são validados no CI posterior à publicação.
- [Recebíveis: recorte entre cenários](_revisao_conformidade_2026-10-13/recebiveis-ci-followup-review.md). O CI seguinte confirmou foco e reset compactos, mas revelou uma preparação antiga em outra etapa: o Resumo preserva o recorte anterior. O teste passou a verificar essa persistência e limpar explicitamente os filtros antes de consultar títulos em dia.
- [Varejo: isolamento dos testes de permissões](_revisao_conformidade_2026-10-13/varejo-ci-fix-review.md). Três casos tentavam trocar usuário e proprietário no runtime que proíbe essas operações. Uma etapa obrigatória passou a executá-los em container de teste separado; os três passaram localmente. O Compose do produto mantém suas restrições.

## Relatórios e evidências

- [Auditoria completa](AUDITORIA_COMPLETA_PORTFOLIO.md): diagnóstico e plano único dos 47 IDs.
- [Complemento](COMPLEMENTO_AUDITORIA_PORTFOLIO.md): segurança, operação e contratos.
- [Correções](CORRECOES_PORTFOLIO_2026-10-13.md): alterações, verificações e limites por item.
- [Revisão de conformidade](REVISAO_CONFORMIDADE_PORTFOLIO.md): confronto com o pedido original, mídias e três defeitos funcionais residuais corrigidos.
- [Prompt para o Claude](PROMPT_REVISAO_CLAUDE.md): objetivo, fontes e critérios para contestar as conclusões desta entrega.

Os PDFs correspondentes foram conferidos em 195 páginas: todas em pranchas e 38 ampliadas individualmente, com atenção a tabelas, código, figuras e transições. O [recibo de QA](_revisao_conformidade_2026-10-13/PDF-QA-FINAL.md) contém a seleção e os hashes. Essa validação de paginação não substitui revisão do conteúdo técnico.

O pacote público fica em [docs/auditoria-2026-10-13](https://github.com/arthurjoanes/arthurjoanes/tree/main/docs/auditoria-2026-10-13). As cópias Markdown usam links portáveis para os commits dos projetos e os recibos incluídos. Nos quatro relatórios históricos, os links de produto apontam à primeira publicação daquela rodada, anterior às correções de CI e ao pedido de retirar paletas. Para revisar o estado final, use os SHAs da tabela deste registro. O manifesto de exportação identifica a política e o SHA de cada link adaptado.

Originais locais, logs temporários, ambientes, credenciais, estados do navegador e pastas privadas não são publicados indiscriminadamente. Uma evidência diagnóstica de navegador que depende de traces locais recebe um extrato de resultados identificado, sem os anexos.

Os PDFs preservam a edição local validada. Alguns links internos de arquivos desses PDFs apontam ao workspace original; para consultar as fontes no GitHub, use os Markdown portáveis do pacote. Imagens incorporadas e paginação dos PDFs não dependem desses links.
