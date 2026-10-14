# Revisão de gestao-recebiveis

Propósito, telas e regras financeiras são coerentes: importar, conferir saldo, registrar parcelas e reconciliar lembretes simulados. Nenhum novo defeito de execução confirmado. O diagrama e as descrições de capturas precisavam acompanhar o contrato v2 e separar as datas das provas.

## Documentação e escopo

- README; docs/architecture; docs/api-contract e novo api-read-v2; docs/decisoes-tecnicas; docs/demo; docs/frontend-quality; docs/image-captures; docs/restore-proof: lidos antes da conclusão.
- docs/security; fontes-e-afirmacoes e trechos relacionados de problem-solution, data-contract, provider-integration-plan e SECURITY-REVIEW-2026-10-03; não atribuir leitura integral às saídas truncadas.
- Código/diff: rotas, schemas, respostas, reporting/v2, navegação workspace-route e testes de navegação/v2.

## Ajustes desta revisão

- README e arquitetura agora identificam leituras /api/v2 junto de /api/v1.
- Diagrama de componentes teve sobreposição entre rótulos de polling/claim removida, sem alterar os módulos.
- restore-proof não chama todas as imagens de atuais; image-captures explicita aritmética, recortes e dois prints históricos ainda carregando.

## Achados reexaminados

- REC-01: URL validada, histórico nativo, links e retomada após login conferidos em código/teste.
- REC-02: aging normaliza status para open no formulário e URL.
- REC-03: ordem do breakpoint tablet preserva grade900/901/1050/1100.
- REC-04: v2 limita linhas no SQL e conserva totais globais/snapshot; detalhe pagina separadamente.
- REC-05: axe-core direto no manifesto/lock, require.resolve; advisory dev separado permanece aberto.
- REC-06: labels e singular/plural centralizados; PNGhistórico não foi adulterado.
- REC-07: roteiro atual cita revisãoe71c2f, locks/recusa/downgrade.
- REC-08: NUL rejeitado antes da persistência; contrato de senha não normalizado.

## Inspeção individual dos recursos

46 arquivos locais e 3 diagramas abertos. Todos os arquivos de mídia mantiveram seus hashes. As pranchas e os recibos de renderização ficam nas pastas deste repositório ao lado deste registro.

| Arquivo | Leitura visual |
| --- | --- |
| `gestao-recebiveis/docs/contact/linkedin.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/img/carteira.png` | Carteira/tabela com 240 títulos, filtros, valores e vencimentos. Versão verde anterior separada da versão azul. |
| `gestao-recebiveis/docs/img/resumo.png` | Resumo histórico da carteira; valores/datas variam conforme rodada mencionada. Indicadores e tabela, sem série temporal. O histórico não comprova o checkout posterior. |
| `gestao-recebiveis/docs/img/titulo.png` | Detalhe de título 1217,39 e ações/histórico daquela versão; recorte não mostra todos os estados possíveis. |
| `gestao-recebiveis/docs/readme/badges/architecture.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/readme/badges/demo.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/readme/badges/evidence.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/readme/badges/linkedin.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/readme/badges/run.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/readme/home.png` | Resumo histórico da carteira; valores/datas variam conforme rodada mencionada. Indicadores e tabela, sem série temporal. O histórico não comprova o checkout posterior. |
| `gestao-recebiveis/docs/readme/overview.png` | Resumo e tabela atuais da captura 12/10:516653,77  aberto = 244250,17  vencido + 272403,60  a vencer. Recebido 118316,93  tem recorte próprio. Não há gráfico de série. |
| `gestao-recebiveis/docs/screenshots/current-20260922/carteira.png` | Carteira/tabela com 240 títulos, filtros, valores e vencimentos. Versão verde anterior separada da versão azul. |
| `gestao-recebiveis/docs/screenshots/current-20260922/importacoes.png` | Tela de selecionarCSV antes de enviar. Não demonstra prévia/confirmação concluída. |
| `gestao-recebiveis/docs/screenshots/current-20260922/lembretes.png` | Fila 144 lembretes com estado e data; não demonstra entrega externa. |
| `gestao-recebiveis/docs/screenshots/current-20260922/resumo-mobile.png` | Indicadores recortados em 390 px; recebido pode ficar fora do crop. Não é página móvel inteira. |
| `gestao-recebiveis/docs/screenshots/current-20260922/resumo.png` | Resumo histórico da carteira; valores/datas variam conforme rodada mencionada. Indicadores e tabela, sem série temporal. O histórico não comprova o checkout posterior. |
| `gestao-recebiveis/docs/screenshots/current-20260922/titulo.png` | Detalhe de título 1217,39 e ações/histórico daquela versão; recorte não mostra todos os estados possíveis. |
| `gestao-recebiveis/docs/screenshots/publication-20260922/overview.png` | Resumo histórico da carteira; valores/datas variam conforme rodada mencionada. Indicadores e tabela, sem série temporal. O histórico não comprova o checkout posterior. |
| `gestao-recebiveis/docs/screenshots/restore-proof/1054efee71e84949a4951d5f752c5be2/03-mesma-tentativa-reconciliada.png` | Tentativa 1 concluída/entrega simulada 1. A versão 11 ad é 75; versões posteriores 50. Não misturar as rodadas nem inferir entrega externa. |
| `gestao-recebiveis/docs/screenshots/restore-proof/1054efee71e84949a4951d5f752c5be2/04-mesma-baixa-preservada.png` | Título 50 pago, saldo 0 e pagamento 50. Mesmo ID após restore é verificado nos recibos; print é foto do estado final. |
| `gestao-recebiveis/docs/screenshots/restore-proof/1054efee71e84949a4951d5f752c5be2/05-parcela-saldo-preservados.png` | Título 75, recebido 25, saldo 50; mostra pagamento parcial coerente com extrato. |
| `gestao-recebiveis/docs/screenshots/restore-proof/1054efee71e84949a4951d5f752c5be2/06-extrato-operacional.png` | Tentativa histórica mostra Carregando…, sem relatório pronto. Não sustenta conclusão financeira; a prova final 6 e 75361 b fornece extrato/aging completos. |
| `gestao-recebiveis/docs/screenshots/restore-proof/1054efee71e84949a4951d5f752c5be2/07-aging-residual.png` | Tentativa histórica mostra Carregando…, sem relatório pronto. Não sustenta conclusão financeira; a prova final 6 e 75361 b fornece extrato/aging completos. |
| `gestao-recebiveis/docs/screenshots/restore-proof/11adf9df35ba4314945ffdd4fbaeabfc/01-lote-confirmado.png` | Importação confirmada com dois títulos 50+75=125. Pixels mostram estado; identidade/idempotência depende da consulta do manifesto. |
| `gestao-recebiveis/docs/screenshots/restore-proof/11adf9df35ba4314945ffdd4fbaeabfc/02-conflito-sem-alteracao-financeira.png` | CSV rejeitado 150=51+99, divergindo do título original 50. Novo é diagnóstico, não inclusão confirmada. Saldo 125 preservado depende de prova do banco. |
| `gestao-recebiveis/docs/screenshots/restore-proof/11adf9df35ba4314945ffdd4fbaeabfc/03-mesma-tentativa-reconciliada.png` | Tentativa 1 concluída/entrega simulada 1. A versão 11 ad é 75; versões posteriores 50. Não misturar as rodadas nem inferir entrega externa. |
| `gestao-recebiveis/docs/screenshots/restore-proof/11adf9df35ba4314945ffdd4fbaeabfc/04-mesma-baixa-preservada.png` | Título 50 pago, saldo 0 e pagamento 50. Mesmo ID após restore é verificado nos recibos; print é foto do estado final. |
| `gestao-recebiveis/docs/screenshots/restore-proof/6e75361b018645ffa98bce7ad338d4d4/03-mesma-tentativa-reconciliada.png` | Tentativa 1 concluída/entrega simulada 1. A versão 11 ad é 75; versões posteriores 50. Não misturar as rodadas nem inferir entrega externa. |
| `gestao-recebiveis/docs/screenshots/restore-proof/6e75361b018645ffa98bce7ad338d4d4/04-mesma-baixa-preservada.png` | Título 50 pago, saldo 0 e pagamento 50. Mesmo ID após restore é verificado nos recibos; print é foto do estado final. |
| `gestao-recebiveis/docs/screenshots/restore-proof/6e75361b018645ffa98bce7ad338d4d4/05-parcela-saldo-preservados.png` | Título 75, recebido 25, saldo 50; mostra pagamento parcial coerente com extrato. |
| `gestao-recebiveis/docs/screenshots/restore-proof/6e75361b018645ffa98bce7ad338d4d4/06-extrato-operacional.png` | Extrato final 125 original−75 recebido=50 saldo; títulos 50 quitado/75 parcial, recebimentos 50+25; intervalos/datas de negócio explícitos. |
| `gestao-recebiveis/docs/screenshots/restore-proof/6e75361b018645ffa98bce7ad338d4d4/07-aging-residual.png` | Agingfinal 50  na faixa A vencer, demais 0,um título. Texto histórico 1 títulos antecedeREC 06; não editarPNGpara mascarar. |
| `gestao-recebiveis/docs/stack/docker.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/stack/fastapi.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/stack/nextjs.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/stack/postgresql.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/stack/python.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/stack/react.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/docs/stack/typescript.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/frontend/public/brand/mark-mono.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/frontend/public/brand/mark-reverse.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/frontend/public/brand/mark.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/frontend/public/brand/mono.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/frontend/public/brand/reverse.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/frontend/public/brand/wordmark.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |
| `gestao-recebiveis/frontend/src/app/icon.svg` | Marca R/Recebíveis, badge de navegação ou ícone de stack/contato; renderizado sem deformação. Variantes reversas sobre fundo escuro. Não comprova operação. |

## Diagramas

- `gestao-recebiveis/README.md:46`: renderizado e inspecionado; fronteiras, setas e rótulos correspondem ao fluxo documentado. 
- `gestao-recebiveis/docs/architecture.md:13`: renderizado e inspecionado; fronteiras, setas e rótulos correspondem ao fluxo documentado. O primeiro diagrama de architecture teve seta de polling redundante removida para eliminar sobreposição; explicação conservada no texto.
- `gestao-recebiveis/docs/architecture.md:121`: renderizado e inspecionado; fronteiras, setas e rótulos correspondem ao fluxo documentado. 

## Validação e limites

Renderização de SVGs/Mermaid, inspeção visual e conferência documental; suítes anteriores não reexecutadas pelo root.
- Capturas históricas não comprovam visual do código posterior.
- Sem leitor de tela, dispositivos físicos, nova medição de contraste ou estudo com pessoas.
- Documentos de fonte/contratos relacionados foram lidos; licenças e logs brutos não receberam leitura integral.
