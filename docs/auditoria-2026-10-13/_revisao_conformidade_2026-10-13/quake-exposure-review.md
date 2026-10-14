# QuakeExposure — revisão de conformidade

HEAD `a928c1f6e7faa5ee542f127e243320515c9ceab4`. Revisão da árvore com as correções anteriores preservadas.

Não foi confirmado novo defeito de código nos quatro IDs. A documentação da grade e duas legendas anteriores foram corrigidas.

## Contrato, implementação e testes

- **QEX-01** — Cada célula valida longitude/latitude esperadas antes de incluir MMI, com tolerância e antimeridiano. Casos troca/repetição/deslocamento e oráculo de capturas passaram.
- **QEX-02** — Prazo 15 s cobre headers e corpo da API local. Mudança de seleção aborta geração antiga; erros/resultados obsoletos não pintam nova seleção. Tick atual é o único a reagendar. Retry já existia e foi preservado. Demo estática não recebe esse deadline.
- **QEX-03** — User-Agent deriva metadata instalada e identifica desenvolvimento se o pacote não estiver instalado. Teste usa MockTransport e nenhuma chamada USGS.
- **QEX-04** — Leitura valida SHA dos bytes descomprimidos contra captura; put valida caminho existente. Divergência permanece preservada, projeção quarentena, leitura de grid falha antes de publicação. Integrações PostGIS da rodada anterior não repetidas.

## Documentação efetivamente lida

- `_auditoria_2026-10-13/sources/quake-exposure/CONTRIBUTING.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/README.en.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/README.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/adr/0001-escopo-inicial.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/adr/0002-kafka-na-carteira.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/adr/0003-calculo-e-cas.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/adr/0004-exclusao-contra-replay.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/adr/0005-exploracao-e-demo.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/exploracao.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/identidade-visual.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/operacao.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/padrao-documentacao.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/progress.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/referencias.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/results/m3-tempo-de-publicacao.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/results/m4-cdc-smoke.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/results/m6-bootstrap-cold.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/docs/stack/README.md`: leitura integral.
- `_auditoria_2026-10-13/sources/quake-exposure/NOTICE`: leitura integral.

## Correções desta rodada

- `CONTRIBUTING.md:87`: Regra de ordenação agora descreve cada célula, não só cantos.
- `README.md:66,68; README.en.md:66,68`: Duas legendas históricas adequadas ao que as capturas mostram; arquivos de imagem intactos.

## Cobertura visual

35 recursos locais: 20 SVGs na prancha `quake-exposure-visual/svg-contact.png` e 15 capturas abertas individualmente. Dois Mermaid PT/EN renderizados e vistos em pixels. Todos os hashes dos recursos originais continuam idênticos ao inventário. Os 110 usos e seus contextos estão registrados no JSON, com distinção entre o inventário anterior e as legendas corrigidas.

- `docs/results/ui-assets.png`: Lista histórica com 4.999 ativos, 45 classificados e detalhes/revisões do evento. Rótulo Lista e revisões corresponde aos pixels.
- `docs/results/ui-comparison.png`: Comparação histórica com 45→46 classificados e aumento USD; posições anterior/atual visíveis.
- `docs/results/ui-exploration-mobile.png`: Polígono selecionado com vértices e comparação sobre mapa no celular; legenda compatível.
- `docs/results/ui-exploration.png`: Comparação no mapa com linha entre posições e botão Selecionar área, ainda sem polígono selecionado. Legenda PT/EN corrigida para mapa com comparação.
- `docs/results/ui-map-charts.png`: Composição de 4.999 ativos, 45 classificados, moedas separadas, histograma e ausência de publicação anterior identificada.
- `docs/results/ui-mobile-charts.png`: Gráficos históricos em coluna no celular; dinheiro por moeda e ausência de amostra MMI explicitados.
- `docs/results/ui-operations.png`: Recorte de comparação, lista de ativos e detalhes do evento; não mostra seção Operação. Legenda PT/EN corrigida.
- `docs/results/ui-overview.png`: Visão histórica REPLAY com fontes desatualizadas explicitadas, 45 classificados e 1.972 elegíveis. Não usada como diagnóstico da revisão atual.
- `docs/results/ui-ux-assets.jpg`: Lista filtrada em classificados, 46 encontrados, revisões e entradas/saídas; corresponde ao README atual.
- `docs/results/ui-ux-charts.jpg`: Gráficos com 46 classificados/5.000, 1.972 amostras MMI; totais BRL e USD separados e uma entrada.
- `docs/results/ui-ux-comparison.jpg`: Comparação 45→46, USD +16.131,63 e BRL zero; 1 ativo mudou posição/intensidade.
- `docs/results/ui-ux-desktop.jpg`: Mapa desktop e resumo da carteira inteira: 46 classificados/1.972 elegíveis; snapshot explicitado no cabeçalho.
- `docs/results/ui-ux-mobile.jpg`: Mapa e filtros recolhidos no celular. Captura histórica, não prova atual de foco/navegação/ausência de overflow.
- `docs/results/ui-ux-operations.jpg`: Operação expandida identifica CDC não executado no exemplo e tempo de origem ao painel não medido; rótulo do README fiel.
- `docs/results/ui-v0.3.png`: Interface histórica mais simples, 45 classificados, avisos de fonte desatualizada. Número do registro de 09/10 corresponde aos pixels.

## Validação atual

- `uv run --no-sync pytest tests/unit/test_grid.py tests/unit/test_blobs.py tests/unit/test_http.py -q`: não executou: uv fora do PATH. Resolvido usando Python da venv já instalada, sem instalar dependências.
- `.venv/Scripts/python.exe -m pytest tests/unit/test_grid.py tests/unit/test_blobs.py tests/unit/test_http.py -q`: 61 passed, 2.38 s, exit 0. Sem infraestrutura PostGIS/CDC ou rede USGS nesta rodada.
- `npm test -- src/api.test.ts src/refresh.test.ts --maxWorkers=1`: 16 passed, 2 files, 731 ms, exit 0. Fetch e temporizadores simulados; não é nova execução de browser da aplicação.
- `node _revisao_conformidade_2026-10-13/render-quake-visuals.cjs`: 20 SVGs renderizados em prancha e 2 Mermaid renderizados, depois inspecionados em pixels. Mermaid 11 via CDN em Chromium; não garante renderização idêntica à versão do GitHub.
- `git diff --check`: exit 0. 

## Limites

- Sem nova execução fullstack, integração PostGIS/CDC ou deploy público; resultados anteriores citados como anteriores.
- Badges remotos observados pontualmente por root; sem validação do deploy GitHub Pages ou CI do checkout.
- A inspeção de imagens históricas não prova o funcionamento atual; dimensões de PNG não substituem recibo do viewport histórico.
- Sem novo teste humano de leitor de tela/foco ou UI live; nenhum claim desse tipo acrescentado.
- NOTICE lido, sem auditoria jurídica.

## Badges remotos — revisão coordenada

Root verificou em Chromium em 2026-10-14T00:31:40Z os três badges remotos de CycleOps/Quake (cinco usos): HTTP 200 e texto CI/ci passing. Recibos remote-badges.json e remote-badges.png. Observação pontual, sem reexecutar CI nem validar o checkout local.
