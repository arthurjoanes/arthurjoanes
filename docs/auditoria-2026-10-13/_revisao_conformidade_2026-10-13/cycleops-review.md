# CycleOps — revisão de conformidade

HEAD `330e4c6bfd61e264956add9785557857456f5aff`; alterações anteriores preservadas. Nenhum defeito adicional de execução confirmado. Ajustes desta rodada apenas nos quatro documentos listados abaixo.

## Resultado por ID

- **CYC-01 — correção coerente.** Hash usa bytes antes do TextDecoder para catálogo/eventos/diagnóstico; seis casos BOM e mutações válidas por schema rejeitados; compatibilidade sem diagnóstico preservada.
- **CYC-02 — correção coerente; documentação alinhada.** Lista/Mapa usam role group e aria-pressed, CSS suporta esse atributo; regressão cobre Tab, Enter e espaço em 320/390. Não é alternância análise/mapa como dizia o packet anterior.
- **CYC-03 — contrato publicado correto.** CONTRIBUTING permite mutação e logging diagnóstico; campo correction no packet anterior dizia ausência de logging incorretamente. Motor não foi alterado.
- **CYC-04 — correção coerente.** math.isfinite recusa NaN/inf/-inf/1e999; aceita 0.5/1024 antes da conexão.
- **CYC-05 — lacunas documentais corrigidas.** DATA_SOURCES:24 e architecture:188 ainda prometiam teto; agora descrevem limpeza ao abrir arquivo, 500 MiB e preservação do ativo.

## Ajustes

- `CycleOps/DATA_SOURCES.md:24`
- `CycleOps/docs/architecture.md:137,188,194,209`
- `CycleOps/docs/ui-ux.md:16`
- `CycleOps/docs/results/a11y-manual.md:64`

A arquitetura agora distingue cobertura unitária de Content-Encoding e entrega HTTP real; o diagrama de replay identifica hashes dos arquivos. O checklist manual continua sem marcações de conclusão.

## Documentos lidos

- `CycleOps/CONTRIBUTING.md` — leitura integral.
- `CycleOps/DATA_SOURCES.md` — leitura integral.
- `CycleOps/README.en.md` — leitura integral.
- `CycleOps/README.md` — leitura integral.
- `CycleOps/SECURITY.md` — leitura integral.
- `CycleOps/THIRD_PARTY_NOTICES.md` — linhas 1–170 e índice de títulos; licenças reproduzidas restantes não relidas.
- `CycleOps/docs/adr/0001-escopo-do-mvp.md` — leitura integral.
- `CycleOps/docs/adr/0002-fonte-cadencia-e-frescor.md` — leitura integral.
- `CycleOps/docs/adr/0003-entrega-de-eventos-sem-broker.md` — leitura integral.
- `CycleOps/docs/adr/0004-replay-no-navegador.md` — leitura integral.
- `CycleOps/docs/adr/0005-estado-e-renderizacao.md` — leitura integral.
- `CycleOps/docs/adr/0006-exploracao-e-diagnostico.md` — leitura integral.
- `CycleOps/docs/architecture.md` — leitura integral.
- `CycleOps/docs/brand/README.md` — leitura integral.
- `CycleOps/docs/explorar-dados.md` — leitura integral.
- `CycleOps/docs/padrao-documentacao.md` — leitura integral.
- `CycleOps/docs/results/a11y-manual.md` — leitura integral.
- `CycleOps/docs/results/exploracao-20261011.md` — leitura integral.
- `CycleOps/docs/results/feed-validation.md` — leitura integral.
- `CycleOps/docs/results/identity-20261009.md` — leitura integral.
- `CycleOps/docs/results/index.md` — leitura integral.
- `CycleOps/docs/results/live-manual.md` — leitura integral.
- `CycleOps/docs/results/performance.md` — leitura integral.
- `CycleOps/docs/results/publicacao.md` — leitura integral.
- `CycleOps/docs/results/uiux-20261012.md` — leitura integral.
- `CycleOps/docs/results/validacao-20261009.md` — leitura integral.
- `CycleOps/docs/ui-ux.md` — leitura integral.
- `CycleOps/scripts/basemap/README.md` — leitura integral.

## Inspeção visual

39 caminhos locais: 23 SVGs, 14 PNGs e dois vídeos. Sete diagramas Mermaid renderizados. Todos os hashes dos arquivos locais permanecem iguais ao inventário. Cada uso e contexto documental consta no JSON; não foram tratados como validação apenas por existirem.

- `CycleOps/apps/web/public/brand/cycleops-mark-light.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/apps/web/public/brand/cycleops-mark.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/apps/web/public/favicon.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/media/analysis-mobile.png` — inspeção individual de pixels do PNG original. Resumo em modal de 320 px, gravação/data e denominador visíveis; painel continua abaixo do viewport.
- `CycleOps/docs/media/analysis-quality.png` — inspeção individual de pixels do PNG original. 249 tentativas, 225 válidas e 24 rejeitadas; a legenda separa HTTP e publicação.
- `CycleOps/docs/media/analysis-summary.png` — inspeção individual de pixels do PNG original. 40 confirmações/2 resoluções; duração e janela visíveis; ranking e denominadores legíveis.
- `CycleOps/docs/media/demo.webm` — 6 quadros individuais: 0, 5, 10, 15, 20 e 26,27 s. 26,52 s. Quadro inicial branco; quadros seguintes mostram simulação/conexão/replay.
- `CycleOps/docs/media/desktop-1440.png` — inspeção individual de pixels do PNG original. Simulação seed 42, Estação sintética 001; detalhes e mapa; créditos visíveis.
- `CycleOps/docs/media/identity-demo.webm` — 6 quadros individuais: 0, 5, 10, 15, 20 e 26,27 s. 26,52 s. Quadro inicial branco; Jakob kirke confirmado, em recuperação e resolvido (evento 124), com 20× e data da gravação.
- `CycleOps/docs/media/identity-desktop.png` — inspeção individual de pixels do PNG original. Replay de 10/10 Oslo, St. Olavs gate/evento 69; identidade e contagens coerentes.
- `CycleOps/docs/media/identity-mobile.png` — inspeção individual de pixels do PNG original. Mapa móvel; imagem fullPage de 1381 px coerente com viewport 320×800 citado; não há corte horizontal do conteúdo.
- `CycleOps/docs/media/mobile-320-detalhes.png` — inspeção individual de pixels do PNG original. Gaveta de estação sintética, conteúdo parcialmente abaixo do viewport; botão Fechar legível.
- `CycleOps/docs/media/recorded-1440.png` — inspeção individual de pixels do PNG original. Replay pelo Caddy, Jakob kirke/evento 106; mapa e catálogo com identificação da gravação.
- `CycleOps/docs/media/recorded-320.png` — inspeção individual de pixels do PNG original. Mesmo evento 106 em fullPage; fonte, horário, legenda e créditos presentes.
- `CycleOps/docs/media/tablet-768.png` — inspeção individual de pixels do PNG original. Simulação seed 42; fila, mapa e legenda dispostos nas duas colunas.
- `CycleOps/docs/media/uiux-analysis.png` — inspeção individual de pixels do PNG original. Resumo da mesma gravação, 40/2, duração e dois rankings; conteúdo no modal.
- `CycleOps/docs/media/uiux-desktop.png` — inspeção individual de pixels do PNG original. Replay 10/10, horário 00:44:14, contagens e mapa compatíveis com legenda README.
- `CycleOps/docs/media/uiux-mobile.png` — inspeção individual de pixels do PNG original. Lista móvel, Replay gravado/data, grupos de controles e contagens legíveis; corte inferior corresponde ao viewport.
- `CycleOps/docs/media/uiux-tablet.png` — inspeção individual de pixels do PNG original. Layout 768 px com lista, mapa e créditos; fonte e data preservadas.
- `CycleOps/docs/brand/cycleops-lockup-light.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/brand/cycleops-lockup.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/demo-en.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/architecture-en.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/run-en.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/results-en.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/linkedin.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/stack/python.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/stack/fastapi.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/stack/postgresql.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/stack/typescript.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/stack/react.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/stack/docker.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/contact/linkedin.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/demo.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/architecture.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/run.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/readme/badges/results.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/brand/cycleops-mark-light.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.
- `CycleOps/docs/brand/cycleops-mark.svg` — prancha SVG em Chromium (fundo escuro nas versões light). Marca/ícone/rótulo legível, proporção preservada; aliases examinados na mesma prancha.

- `CycleOps/README.en.md:69` — `cycleops-visual/diagram-1.png`; Fluxo e rótulos legíveis. Renderer Mermaid 11 obtido por CDN; aparência no GitHub pode variar.
- `CycleOps/README.en.md:137` — `cycleops-visual/diagram-2.png`; Fluxo e rótulos legíveis. Renderer Mermaid 11 obtido por CDN; aparência no GitHub pode variar.
- `CycleOps/README.md:69` — `cycleops-visual/diagram-3.png`; Fluxo e rótulos legíveis. Renderer Mermaid 11 obtido por CDN; aparência no GitHub pode variar.
- `CycleOps/README.md:137` — `cycleops-visual/diagram-4.png`; Fluxo e rótulos legíveis. Renderer Mermaid 11 obtido por CDN; aparência no GitHub pode variar.
- `CycleOps/docs/architecture.md:11` — `cycleops-visual/diagram-5.png`; Fluxo e rótulos legíveis. Renderer Mermaid 11 obtido por CDN; aparência no GitHub pode variar.
- `CycleOps/docs/architecture.md:45` — `cycleops-visual/diagram-6.png`; Fluxo e rótulos legíveis. Renderer Mermaid 11 obtido por CDN; aparência no GitHub pode variar.
- `CycleOps/docs/architecture.md:115` — `cycleops-visual/diagram-7.png`; Fluxo e rótulos legíveis. Renderer Mermaid 11 obtido por CDN; aparência no GitHub pode variar.

## Verificações atuais

- `vitest run artifact-loading.test.ts logic.test.ts diagnostics.test.ts --maxWorkers=1 --testTimeout=30000 (paths completos em tests/unit)`: 33 passed, 3 files, 34.93 s, exit 0. Fetch mockado; Content-Encoding simula bytes já descomprimidos. Não valida negociação HTTP de um servidor real.
- `apps/backend/.venv/Scripts/python.exe -m pytest apps/backend/tests/test_worker_main.py apps/backend/tests/test_worker_archive.py -q`: 30 passed, 4.70 s, exit 0. Sem feed externo ou PostgreSQL nesta rodada.
- `git diff --check`: exit 0; aviso CRLF anterior em App.tsx. 
- `node _revisao_conformidade_2026-10-13/render-cycle-visuals.cjs`: 23 SVGs na prancha, 7 Mermaid renderizados, 2 vídeos decodificados; inspeção dos pixels separada e registrada. Sem nova execução da aplicação; vídeos revistos por amostragem, sem áudio.

## Limites

- Badges remotos observados pontualmente por root; sem validação do deploy GitHub Pages ou CI do checkout.
- Licenças integrais de terceiros não relidas; cobertura de THIRD_PARTY_NOTICES delimitada acima. Não é auditoria jurídica.
- Capturas e métricas históricas preservadas; sua inspeção atual não comprova o funcionamento da revisão atual.
- Checklist humano de acessibilidade continua pendente.
- Não repetidos E2E/Compose/suítes integrais nesta revisão; a execução anterior de 23 E2E não é contada como nova.

## Badges remotos — revisão coordenada

Root verificou em Chromium em 2026-10-14T00:31:40Z os três badges remotos de CycleOps/Quake (cinco usos): HTTP 200 e texto CI/ci passing. Recibos remote-badges.json e remote-badges.png. Observação pontual, sem reexecutar CI nem validar o checkout local.
