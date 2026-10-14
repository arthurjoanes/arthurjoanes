# Apresentação — EvidenceDesk, CycleOps e QuakeExposure

Foram retirados os blocos de paleta dos três projetos, preservando CSS, imagens históricas e regras de legibilidade. As medições de contraste continuam documentadas. As âncoras dos títulos substituídos foram mantidas.

No EvidenceDesk, a primeira imagem do README passou da lista de incidentes para `docs/images/payment-story-20260922/01-pagamento-e-divergencias.png`: investigação com 222 pedidos no snapshot, duas divergências do mesmo pedido e a fonte de pagamento aberta. A legenda identifica 22/09/2026, dados sintéticos, IA desativada e origem da captura. A imagem pertence à aplicação real, não ao workbench offline. `home.png` e `palette.svg` permanecem no repositório como arquivos históricos.

CycleOps manteve `docs/media/uiux-desktop.png`, com o mapa de Oslo, a fila e as contagens. QuakeExposure manteve `docs/results/ui-ux-desktop.jpg`, com mapa, 46 classificados, 1.972 elegíveis e totais por moeda. As duas escolhas já atendem ao pedido. Datas e limites dos READMEs PT/EN foram conferidos: capturas de 12/10/2026, replay gravado no CycleOps; snapshot REPLAY e carteira fictícia no QuakeExposure. Os READMEs desses dois projetos não precisaram de alteração.

Foram abertas individualmente sete imagens: três candidatas do EvidenceDesk, a página principal e a análise do CycleOps, o mapa e os gráficos do QuakeExposure. O JSON registra cada arquivo e SHA-256. Todas continuam idênticas aos arquivos do HEAD. Nenhuma imagem foi recortada, editada ou recapturada.

Validação offline: 91 documentos e 1.408 referências verificados sem problema; 132 URLs externas não foram consultadas. `git diff --check` passou nos três repositórios. A busca de paleta/palette em Markdown e HTML não encontrou ocorrência. Foram alterados nove arquivos Markdown; nenhum arquivo de código ou estilo. Comando e logs constam em `visual-presentation-backend.json` e `check_visual_presentation_backend.py`.

Esta revisão verifica apresentação e procedência das capturas existentes. Não repete suítes funcionais nem transforma uma captura histórica em comprovação do estado atual. Nenhum commit ou push foi feito pelo agente.
