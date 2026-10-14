# Apresentação de Varejo, API Sentinel e ContainerOps

Retiradas as paletas da apresentação nos oito documentos listados. Cores/CSS do produto, imagens e provas históricas foram preservados. Nenhum commit ou push foi feito por esta atribuição.

## varejo-data-pipeline

Imagem principal: `docs/readme/dashboard.png` → `docs/readme/dashboard.png`.

- Retirada a seção Paleta da marca do README, imagem palette.svg e tabela de oito cores.
- No guia de interface, substituído o bloco de paleta por Recursos locais, preservando licença e disponibilidade offline.

Documentos: `README.md`, `docs/interface.md`.

## api-sentinel

Imagem principal: `docs/readme/incidents.png` → `docs/readme/incidents.png`.

- Retirado o bloco recolhível Paleta de marca, com imagem, seis cores e explicação cromática.

Documentos: `README.md`.

## containerops

Imagem principal: `docs/screenshots/backups-desktop.png` → `docs/readme/home.png`.

- Demo principal passou ao recorte da página inicial de verificação, com data e duração conferidas no recibo.
- Catálogo de cópias continua ligado no README e visível na galeria.
- Retiradas tabelas e explicações de paleta; conservadas distinções semânticas dos estados, fontes, licenças e assets locais.
- Galeria documenta o recorte histórico e a diferença da navegação; rótulos dos links passaram a identidade/fontes.

Documentos: `README.md`, `docs/brand.md`, `docs/frontend-quality.md`, `docs/report-guide.md`, `docs/screenshots.md`.

## Cinco imagens efetivamente inspecionadas

### varejo-data-pipeline/docs/readme/dashboard.png

1440 × 1489; principal mantida. Aberta em pixels por `tools.view_image`.

Visão geral preenchida: receita de R$ 1.141.858,51, 89.903 unidades, 10.008 vendas, ticket de R$ 114,09; barras diárias, lojas e mix. Janela de 01–30/01/2026; publicação registrada em 21/09/2026. A soma dos grupos de produtos visíveis é 89.903.

Mostra a página principal com indicadores e gráficos; a legenda existente identifica a fixture sintética e o snapshot histórico.

SHA-256: `3ea83bc2ed5e659e5e79a89b5de40b0952bd3fd487f44791f6abb05511bfc801`. Bytes iguais ao asset versionado no HEAD consultado.

### api-sentinel/docs/readme/incidents.png

1440 × 1123; principal mantida. Aberta em pixels por `tools.view_image`.

Central de incidentes preenchida: um em andamento, dois finalizados, três no total; histograma de 06–12/10 com três no dia 12; três linhas e probe desabilitado. Referência sintética de 12/10/2026 06:00 UTC.

A lista principal já contém contagens e distribuição diária; legenda e guia distinguem fixture de observação em produção.

SHA-256: `8c799f8dd1d274790e4b054f24ff56cdd269c3ab19e237e15a24c401f0e4d00c`. Bytes iguais ao asset versionado no HEAD consultado.

### containerops/docs/screenshots/backups-desktop.png

1440 × 1000; anterior; preservada como link e na galeria. Aberta em pixels por `tools.view_image`.

Catálogo de cópias em desktop, 12 de 12 entradas, IDs e estados de integridade/restore, registro de 12/10/2026 05:04 UTC. As duas primeiras linhas não têm recibo de restore.

É uma prova útil do fluxo de cópias, mas o quadro de resultados da aplicação comunica melhor o propósito na primeira imagem.

SHA-256: `1c9187f42840eb58e66f7344fcf37ca8aaea029e115ffe5ca12317be0c4656d8`. Bytes iguais ao asset versionado no HEAD consultado.

### containerops/docs/readme/home.png

1280 × 720; nova principal. Aberta em pixels por `tools.view_image`.

Recorte da página Verificação da aplicação: duração de 246,7 s; critérios aprovados de HTTP pelo proxy, usuário/filesystem e rede isolada; seis requisições simultâneas e um job salvo. Fontes visíveis de 22/09/2026. O próximo título começa no limite inferior; a navegação histórica agrupa backup e restore.

Página inicial informativa. Legendas dizem recorte e snapshot histórico. A duração 246,656 s do passo verify em problem-proof-latest.json arredonda para 246,7 s.

SHA-256: `b76162852dfb230fc524f6dde72908e5c9a9dde0afef30bcd4c0f7e12014263c`. Bytes iguais ao asset versionado no HEAD consultado.

### containerops/docs/screenshots/journey-artifacts.png

1440 × 1711; alternativa avaliada; não selecionada. Aberta em pixels por `tools.view_image`.

Página longa de artefatos/release 2.0.0, identidade de imagem, HIGH/CRITICAL zero, build de 18,7 s, 52 pacotes no SBOM e idade de base de 16,9 h. Evidência de 22/09/2026.

Há resultados legíveis, mas o foco em uma release específica e a interface histórica são menos adequados à entrada geral do projeto.

SHA-256: `e479abb1420070043978c6f5c158064f44523b1ad72031468e0e6a0f6f37a212`. Bytes iguais ao asset versionado no HEAD consultado.

## Verificações e limites

Os oito documentos modificados passaram em `git diff --check`; seus blocos de código permaneceram iguais. Foram conferidos 266 destinos locais sem faltas. O guia `varejo-data-pipeline/docs/verification.md`, alterado pelo parent, recebeu checagem adicional de 96 destinos locais, também sem faltas. O [recibo estruturado](visual-presentation-apps.json) registra fontes e detalhes; a [checagem inicial](visual-presentation-apps-checks.json) conserva o resultado antes da publicação de Varejo.

Não houve diff em CSS, PNG, JPG, SVG, WebM ou WOFF2. A busca de paleta/palette nos READMEs e documentos de entrada revisados não encontrou referência restante. Nenhum screenshot foi gerado nesta rodada.

- Sem execução nova da aplicação, CI ou suítes: mudanças desta atribuição são documentais.
- Capturas existentes históricas, não retratos do runtime atual; nenhum asset apagado ou modificado.
- Os oito documentos alterados não tinham README.en.md equivalente nesses três repositórios.
- O teste de links verifica existência dos destinos locais; anchors históricos dos relatórios globais têm revisão separada no exportador.
- O parent publicou VDP durante o fechamento do recibo e responde pelos testes/CI/permissões; esses resultados não são atribuídos a esta revisão.
