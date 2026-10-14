# Revisão — Varejo Data Pipeline

HEAD: `cd8bff90ce9d1ef37f727ec6f7fd9d8cbe615134`. Revisão concluída com dois ajustes documentais; quatro IDs conformes. Nenhuma alteração de comportamento nesta rodada.

## Documentação lida

- `README.md`
- `docs/architecture.md`
- `docs/decisoes-tecnicas.md`
- `docs/verification.md`
- `docs/demo.md`
- `docs/interface.md`
- `docs/frontend-quality.md`
- `docs/state-recovery.md`
- `docs/problem-solution.md`
- `docs/evolution.md`
- `docs/fontes-e-afirmacoes.md`
- `docs/evidence/evolucao-20261012-a12e4a/README.md`

## IDs confrontados

- **VDP-01 — conforme**: reporting.py ordena started_at UTC com run_id como desempate; teste cobre restore real, empate e datas ausentes/inválidas/sem fuso.
- **VDP-02 — conforme**: Publicação HTML usa temporário, flush/fsync, preserva modo/dono, replace e fsync de diretório; testes cobrem UID65534,0644/0640, falha preservando bytes e leitura HTTP concorrente POSIX.
- **VDP-03 — conforme**: tools/browser fixa Playwright/axe com lock; CI instala runtime e roda quatro fixtures offline. Guia interface ganhou instalação e comandos PowerShell.
- **VDP-04 — conforme**: Teste parametrizado limita tamanho a 1 MiB e separa invalid-root de over-limit com IDs estáveis, sem enfraquecer rejeição.

## Ajustes

- `docs/interface.md`: Instalação do harness ausente do roteiro que o executa; adicionados Node/Python, npm ci/browser, POSIX e PowerShell.
- `docs/evolution.md`: Distinguir O que mudou atual de Indicadores > Perfil e comparação nos HTMLs históricos; explicitar limite das tabelas nas capturas móveis.

## Matriz visual

| Dimensão | Observação efetiva |
|---|---|
| palette | Teal/neutros atuais e cores semânticas coerentes. Roxo/azul nas evidências históricas explicitamente preservados. |
| typography | Hierarquia, moeda e números legíveis nativamente; não medida família/fidelidade tipográfica no GitHub. |
| spacing | Desktop e mobile com agrupamento/coluna consistentes; capturas longas exigem zoom e tabelas mobile exigem scroll. |
| icons | 14 SVGs de marca, badges, stack/paleta vistos; ícones compatíveis com rótulos. |
| charts | Moeda, barras e soma de categorias confrontadas nos screenshots/HTMLs; ponto único tratado como um dia, sem inferência de tendência. |
| states | Bloqueio, publicação, correção, falha, recuperação, comparação e ausência de baseline vistos. Não simulada interação real Spark. |

## Recursos vistos

- `varejo-data-pipeline/docs/readme/dashboard.png` — Overview atual: 30 mil linhas sintéticas, R$ 1.141.858,51, 89.903 unidades, 10.008 vendas; ranking 6/12 e mix com restante coerentes. Legível no tamanho nativo.
- `varejo-data-pipeline/docs/readme/dashboard-mobile.png` — Overview atual a 390 px; cabeçalho, navegação e quatro KPIs legíveis. Recorte não mostra gráficos abaixo da dobra.
- `varejo-data-pipeline/docs/readme/palette.svg` — Oito amostras teal/navy/branco/cinza/verde/ocre/vermelho coerentes com README e UI atual.
- `varejo-data-pipeline/docs/readme/badges/demo.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/docs/readme/badges/architecture.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/docs/readme/badges/run.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/docs/readme/badges/evidence.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/docs/readme/badges/linkedin.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/docs/stack/python.svg` — Prancha SVG vista: logotipo tecnológico identificável e legível; uso decorativo, sem medição.
- `varejo-data-pipeline/docs/stack/apachespark.svg` — Prancha SVG vista: logotipo tecnológico identificável e legível; uso decorativo, sem medição.
- `varejo-data-pipeline/docs/stack/java.svg` — Prancha SVG vista: logotipo tecnológico identificável e legível; uso decorativo, sem medição.
- `varejo-data-pipeline/docs/stack/docker.svg` — Prancha SVG vista: logotipo tecnológico identificável e legível; uso decorativo, sem medição.
- `varejo-data-pipeline/docs/contact/linkedin.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/browser-comparable/profile-1440.png` — Perfil comparável: R$ 104, 7 unidades, 3 vendas; preço 9,642857→15,357143, desvio 0,592593 acima de 0,25; quantidade estável. Imagem longa inspecionada integralmente em segmentos de 1500 px; foco/copiar ID visível.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/browser-comparable/profile-320.png` — Perfil comparável: R$ 104, 7 unidades, 3 vendas; preço 9,642857→15,357143, desvio 0,592593 acima de 0,25; quantidade estável. Imagem longa inspecionada integralmente em segmentos de 1500 px; foco/copiar ID visível. Tabelas têm colunas fora da região horizontal; captura não prova leitura integral dos valores, que requer HTML com scroll ou desktop.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/browser-incomparable/profile-1440.png` — Perfil incomparável: R$ 64, 7 unidades, 3 vendas; datas Jan1/Jan10 impedem avaliação de regras. Imagem longa inspecionada integralmente em segmentos de 1500 px; foco/copiar ID visível.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/browser-incomparable/profile-320.png` — Perfil incomparável: R$ 64, 7 unidades, 3 vendas; datas Jan1/Jan10 impedem avaliação de regras. Imagem longa inspecionada integralmente em segmentos de 1500 px; foco/copiar ID visível. Tabelas têm colunas fora da região horizontal; captura não prova leitura integral dos valores, que requer HTML com scroll ou desktop.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/browser-initial/profile-1440.png` — Perfil inicial: R$ 64, 7 unidades, 3 vendas, quatro linhas; sem baseline. Imagem longa inspecionada integralmente em segmentos de 1500 px; foco/copiar ID visível.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/browser-initial/profile-320.png` — Perfil inicial: R$ 64, 7 unidades, 3 vendas, quatro linhas; sem baseline. Imagem longa inspecionada integralmente em segmentos de 1500 px; foco/copiar ID visível. Tabelas têm colunas fora da região horizontal; captura não prova leitura integral dos valores, que requer HTML com scroll ou desktop.
- `varejo-data-pipeline/docs/images/current-20260922/coverage-focus.png` — Recorte atual 2/3: S01 entregue, S02 pendente, S03 sem movimento; corresponde à tese de cobertura.
- `varejo-data-pipeline/docs/images/editorial-20260922/coverage-blocked.png` — Execução histórica bloqueada por cobertura 2/3; publicação anterior preservada.
- `varejo-data-pipeline/docs/images/editorial-20260922/partial-date-blocked.png` — Execução histórica 3/3 bloqueada por conflito de data de A1; representa a regra além da soma financeira.
- `varejo-data-pipeline/docs/images/editorial-20260922/whole-sale-corrected.png` — Indicadores históricos R$ 64, 7 unidades, 3 vendas; linhas 20+20+24.
- `varejo-data-pipeline/docs/images/editorial-20260922/failure-before-publication.png` — Indicadores históricos conservam R$ 64 após falha; a imagem não demonstra sozinha as versões físicas 74/64.
- `varejo-data-pipeline/docs/images/editorial-20260922/recovered.png` — Indicadores históricos R$ 74, 8 unidades, 3 vendas; linhas 20+20+34.
- `varejo-data-pipeline/docs/images/state-proof/blocked-1440.png` — Execução histórica azul bloqueada, S02.csv ausente, cobertura 2/3, publicação anterior preservada.
- `varejo-data-pipeline/docs/images/state-proof/publication-1440.png` — Execução histórica fixture-valid publicada, cobertura 3/3, sem ocorrências.
- `varejo-data-pipeline/docs/images/state-proof/recovery-1440.png` — Execução histórica missing-delivery publicada após correção; cobertura 3/3, quatro reenvios.
- `varejo-data-pipeline/docs/images/state-proof/corrected-1440.png` — Execução histórica late-correction publicada, cobertura 3/3, três reenvios.
- `varejo-data-pipeline/docs/images/state-proof/blocked-390.png` — Mesmo bloqueio por entrega ausente em coluna móvel; textos e controles legíveis.
- `varejo-data-pipeline/docs/images/state-proof/corrected-390.png` — Publicação late-correction em coluna móvel; ativo rastreado não citado.
- `varejo-data-pipeline/docs/readme/home.png` — Execução histórica roxa com publicação e cobertura 3/3; ativo rastreado sem uso documental. Não representa a capa atual.
- `varejo-data-pipeline/src/retail_pipeline/assets/brand-mark.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/src/retail_pipeline/assets/brand-mono.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/src/retail_pipeline/assets/favicon.svg` — Prancha SVG vista: ícone/link ou marca V/barras coerente com seu rótulo; sem afirmação quantitativa.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/evolution-demo/comparable.html` — Execução 3/3 com aviso lineage_export; indicadores R$104/7/3, matriz84+20 e baseline comparável. Gráficos diários de um ponto e tabelas coerentes; não inferida tendência. Inline SVGs vistos no contexto. Sem erro de página ou overflow global horizontal no recibo.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/evolution-demo/incomparable.html` — Execução publicada; indicadores R$64/7/3, matrizes44+20 e datas incompatíveis explicitadas. Gráficos diários de um ponto e tabelas coerentes; não inferida tendência. Inline SVGs vistos no contexto. Sem erro de página ou overflow global horizontal no recibo.
- `varejo-data-pipeline/docs/evidence/evolucao-20261012-a12e4a/evolution-demo/initial.html` — Execução publicada; indicadores R$64/7/3, matriz44+20, sem baseline. Gráficos diários de um ponto e tabelas coerentes; não inferida tendência. Inline SVGs vistos no contexto. Sem erro de página ou overflow global horizontal no recibo.
- `varejo-data-pipeline/docs/evidence/state-proof/reports/blocked.html` — Execução bloqueada por entrega; indicadores anteriores R$64/7/3. Gráficos diários de um ponto e tabelas coerentes; não inferida tendência. Inline SVGs vistos no contexto. Sem erro de página ou overflow global horizontal no recibo.
- `varejo-data-pipeline/docs/evidence/state-proof/reports/corrected.html` — Execução publicada; indicadores R$77/8/3 e produtos52+20+5. Cenário diferente do editorial R$74. Gráficos diários de um ponto e tabelas coerentes; não inferida tendência. Inline SVGs vistos no contexto. Sem erro de página ou overflow global horizontal no recibo.
- `varejo-data-pipeline/docs/evidence/state-proof/reports/publication.html` — Execução publicada inicial; indicadores R$64/7/3, produtos39+20+5. Gráficos diários de um ponto e tabelas coerentes; não inferida tendência. Inline SVGs vistos no contexto. Sem erro de página ou overflow global horizontal no recibo.
- `varejo-data-pipeline/docs/evidence/state-proof/reports/recovery.html` — Execução recuperada; indicadores R$64/7/3, produtos39+20+5. Gráficos diários de um ponto e tabelas coerentes; não inferida tendência. Inline SVGs vistos no contexto. Sem erro de página ou overflow global horizontal no recibo.
- `varejo-data-pipeline/README.md:76` — Fluxo, ramos e rótulos legíveis, sem corte; coerentes com publicação candidata, bloqueio e leitura versionAsOf. Não equivale ao renderer GitHub.
- `varejo-data-pipeline/docs/architecture.md:9` — Fluxo, ramos e rótulos legíveis, sem corte; coerentes com publicação candidata, bloqueio e leitura versionAsOf. Não equivale ao renderer GitHub.
- `varejo-data-pipeline/docs/architecture.md:81` — Fluxo, ramos e rótulos legíveis, sem corte; coerentes com publicação candidata, bloqueio e leitura versionAsOf. Não equivale ao renderer GitHub.

## Verificação e limites

- node _revisao_conformidade_2026-10-13/render-vdp-visuals.cjs: 14 SVGs e 7 HTMLs renderizados; ambas as views dos HTMLs vistas; recibo vdp-visual-review/render-receipt.json.
- node _revisao_conformidade_2026-10-13/render-review-diagrams.cjs varejo-data-pipeline: 3 diagramas renderizados e vistos.
- git -C varejo-data-pipeline diff --check: aprovado; aviso de normalização CRLF apenas.
- SHA-256 dos 35 visuais e 7 HTMLs contra inventário: 42/42 preservados
- Recibo anterior vdp-linux-final.log: 412 testes passaram, lint/formatação/tipos passaram; wheel não construído: No module named pip. Não reexecutado nesta revisão.
- Recibo anterior vdp-browser-final/summary.json: 4 casos,555 checks,0 falhas,10 screenshots,4 scans axe. Recibo anterior, não nova certificação.
- Revisão não certifica acessibilidade completa, contraste WCAG medido ou todos os browsers.
- Histórico preservado; nenhuma imagem regravada como prova do estado atual.
- Sem novas stacks, testes gerais ou alteração de app.
- Mermaid 11 baixado apenas como biblioteca de renderização; imagens remotas não baixadas.
