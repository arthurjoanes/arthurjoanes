# EvidenceDesk — revisão dos recursos visuais

HEAD `e4dd8efe73e50999b9a75896ce74b75d460223da`. 22 PNGs, 15 SVGs e 6 diagramas Mermaid inspecionados. Os 37 arquivos de mídia mantêm seus hashes.

A leitura distingue captura histórica, recorte, símbolo e diagrama conceitual. Nenhuma dessas categorias, sozinha, prova funcionamento atual, julgamento humano ou correção do negócio. Todos os usos, linhas, legendas e contextos estão no JSON do packet.

## Capturas e recortes

### `docs/evidence/evolution-20261012/workbench-desktop.png`

Ferramenta HTML offline de revisão semântica: aviso Gate humano inconclusivo, importar bundle, retomar anotação, exportar rascunho/resposta submetida, três casos sintéticos e duas alegações. A fonte congelada e a alegação exibem literalmente tags/script e um canary de teste; a decisão está preenchida como sustentada.

Sustenta a existência da ferramenta de anotação e a disposição de seus controles. Não é a aplicação autenticada de incidentes. A imagem não prova execução segura do texto hostil nem aprovação humana.

### `docs/evidence/evolution-20261012/workbench-mobile.png`

A mesma ferramenta offline em coluna vertical: navegação dos três casos, alegação, decisão, motivo, assistência recebida e fonte congelada. O aviso de gate inconclusivo continua visível. Texto hostil da fixture aparece literalmente.

Sustenta o arranjo móvel do ensaio e a necessidade de rolagem longa. A visualização automática reduz o arquivo longo; campos equivalentes foram conferidos também no desktop.

### `docs/evidence/evolution-20261012/workbench-zoom-200.png`

Captura longa de 720 por 7527 pixels, com os controles e fontes do workbench empilhados. O estado é o mesmo ensaio sintético com gate inconclusivo e texto hostil literal.

Sustenta a disposição resultante do ensaio identificado no recibo como ampliação. Pixels isolados não comprovam zoom nativo de 200%; legenda restringida a ensaio de ampliação.

### `docs/evidence/restore-read-story/20260922T072246Z-492911fe/screenshots/ed03-approved-desktop.png`

A mesma revisão aprovada sem painel lateral, com uma alegação que cita inventory.reserved, justificativa e botão de fonte.

Sustenta estado aprovado e oferece visão sem o leitor. Link direto foi acrescentado à narrativa de restore.

### `docs/evidence/restore-read-story/20260922T072246Z-492911fe/screenshots/ed03-approved-source-desktop.png`

Reentrega do webhook, 222 pedidos e zero divergências, revisão 1 aprovada. Admin Aurora visualiza a revisão assinada por Bruno; fonte inventory.reserved de PED001015 está aberta e seu trecho literal aparece na alegação.

Demonstra rastreabilidade visual entre uma alegação e uma fonte. Não certifica semântica humana nem restauração do banco isoladamente.

### `docs/evidence/restore-read-story/20260922T072246Z-492911fe/screenshots/ed03-conflict-preserved-draft-desktop.png`

Editor aberto e rolado para a região inferior. Aviso de revisão mais recente afirma que o texto foi preservado e orienta copiar/comparar; há referência de erro e botão salvar como nova revisão.

Sustenta mensagem e permanência do editor. O campo de texto superior e o status HTTP 409 não aparecem; preservação byte a byte depende do recibo do ensaio.

### `docs/evidence/restore-read-story/20260922T072246Z-492911fe/screenshots/restore-erased-dossier-desktop.png`

Aba Dossiê com histórico vazio, ação criar e alerta Recurso não encontrado ou sem acesso, referência e tentativa novamente.

Sustenta indisponibilidade do recurso solicitado na interface. Não prova HTTP 404, eliminação física nem distingue exclusão de falta de permissão; documentação agora explicita isso.

### `docs/evidence/restore-read-story/20260922T072246Z-492911fe/screenshots/restore-erased-source-desktop.png`

Lista longa de fontes, 20 itens por página, e painel lateral com Recurso não encontrado ou sem acesso para a fonte solicitada. As demais fontes continuam listadas.

Sustenta erro de acesso da fonte selecionada, não ausência física no armazenamento. Arquivo longo exige tamanho original para todos os detalhes.

### `docs/evidence/restore-read-story/20260922T072246Z-492911fe/screenshots/restore-survivor-desktop.png`

Caso Reentrega do webhook com 222 pedidos, zero divergências e observação de PED001000: duas observações não equivalem a efeito de negócio duplicado. Dois botões de evidência.

Sustenta uma leitura utilizável do sobrevivente. O fato de ser após restore vem do manifesto, não apenas dos pixels.

### `docs/images/payment-story-20260922/01-pagamento-e-divergencias.png`

Página histórica completa do incidente de pagamento: Ana, 222 pedidos, duas divergências em PED009000 e JSON de payment.confirmed aberto. occurred_at 12:00:30Z e observed_at 12:00:31Z. Cabeçalho usa Brasília e JSON usa UTC.

Permite ligar a regra à fonte sintética. Demonstra uma diferença observada, sem estabelecer causa ou correção do negócio.

### `docs/images/payment-story-20260922/02-snapshot-detalhe.png`

Recorte nativo do leitor: pending_payment em ORDERS-PED009000 e as_of 2026-07-09T12:10:00Z.

Sustenta o instante e estado do snapshot. O intervalo de 570 segundos depende de ler também o pagamento às 12:00:30Z.

### `docs/images/payment-story-20260922/02-snapshot-pendente.png`

Página histórica completa com duas divergências e o snapshot pending_payment aberto no painel lateral.

Localiza o recorte do snapshot na aplicação. Não apresenta totais financeiros nem uma série temporal.

### `docs/images/payment-story-20260922/03-decisao-da-revisao.png`

Modal Revisar a versão 1, decisão Aprovar e justificativa preenchida para Bruno. O texto distingue execução automatizada com contas distintas de qualidade humana, causa ou correção. Estado anterior ao envio.

Sustenta decisão preenchida, não confirmação do sucesso. Foi acrescentado link com esse nome preciso; erro histórico de pluralização nos pixels não foi retocado.

### `docs/images/payment-story-20260922/04-dossie-aprovado.png`

Página completa com revisão 1 aprovada, Bruno como revisor, justificativa com limites do ensaio, resumo, lacunas, próximas verificações e uma alegação ligada a duas fontes. As duas divergências permanecem.

Sustenta estado aprovado exibido e rastreabilidade. Aprovação do dossiê não prova correção da integração ou validação humana independente.

### `docs/images/payment-story-20260922/05-dossie-com-fonte.png`

Página completa do dossiê aprovado com JSON do pagamento no painel lateral e duas divergências ainda listadas. A alegação relaciona os instantes, sem atribuir causa.

Sustenta leitura simultânea do texto e da fonte. Não prova causalidade, reparo ou revisão humana.

### `docs/images/payment-story-20260922/05-dossie-detalhe-recorte.png`

Recorte do dossiê: elaboração manual, aprovação por Bruno, justificativa limitada à automação e uma alegação com duas fontes. Há lacunas de informação.

A legenda descreve corretamente um recorte e preserva a limitação de causa não demonstrada.

### `docs/images/payment-story-20260922/06-fonte-mobile.png`

Leitor móvel da interface histórica azul, com Bruno e fonte de pagamento carregada. O JSON está visível; não é um estado de spinner.

Sustenta leitura móvel da fonte naquela execução. Não é o layout mais recente e não prova por si só o ciclo de reautorização.

### `docs/images/source-json-mobile.png`

Recorte do mesmo JSON com chaves azuis, strings vermelhas e literal null roxo.

Sustenta diferenciação sintática por cor naquele registro de 22/09. Alt deixou de chamá-lo atual; não demonstra o leitor inteiro.

### `docs/images/source-mobile.png`

Recorte de código JSON monocromático, 288 por 377 pixels: payment.confirmed de PED009000 e instantes de ocorrência/observação.

Sustenta legibilidade do texto original. Não contém nome do incidente, navegação ou página móvel completa.

### `docs/images/workspace-desktop.png`

Recorte da tabela, não página inteira: duas linhas para o mesmo PED009000. Regras de pagamento anterior ao snapshot incompatível e transição não vista na cobertura; botões indicam duas fontes e uma fonte.

Sustenta duas divergências do mesmo pedido. Não são dois pedidos, dois incidentes ou um gráfico. Alt e data foram explicitados.

### `docs/readme/citation-mobile.png`

Leitor móvel de fonte na identidade visual em azul petróleo. Bruno Costa, alegação 1 da revisão 1, pagamento de PED009000 às 12:00:30Z e referência ao snapshot de 12:10. A alegação declara que a causa não foi estabelecida. JSON e relação apoia aparecem no leitor.

Demonstra leitura móvel contextualizada de alegação e fonte. O texto da relação não prova que um humano validou sua correção semântica.

### `docs/readme/home.png`

Página inicial desktop da aplicação: Ana Martins, Aurora Comércio, filtro de pagamentos e quatro investigações. Cada linha indica 222 pedidos; o incidente de pagamento tem duas divergências e aviso de dados sintéticos.

Demonstra a lista e a hierarquia da navegação histórica. Não demonstra resolução do incidente nem qualidade da revisão.

## Símbolos e paleta

| Arquivo | Pixels e adequação |
| --- | --- |
| `docs/contact/linkedin.svg` | Símbolo in do LinkedIn. Ícone de contato decorativo acompanhado de texto no mesmo link; alt vazio é adequado nesse contexto. |
| `docs/readme/badges/architecture.svg` | Botão ilustrado com ícone e rótulo Arquitetura. Navegação documental, não selo de qualidade, disponibilidade ou CI aprovado. |
| `docs/readme/badges/demo.svg` | Botão ilustrado com ícone e rótulo Demonstração. Navegação documental, não selo de qualidade, disponibilidade ou CI aprovado. |
| `docs/readme/badges/evidence.svg` | Botão ilustrado com ícone e rótulo Evidências. Navegação documental, não selo de qualidade, disponibilidade ou CI aprovado. |
| `docs/readme/badges/linkedin.svg` | Botão ilustrado com ícone e rótulo LinkedIn. Navegação documental, não selo de qualidade, disponibilidade ou CI aprovado. |
| `docs/readme/badges/run.svg` | Botão ilustrado com ícone e rótulo Executar. Navegação documental, não selo de qualidade, disponibilidade ou CI aprovado. |
| `docs/readme/palette.svg` | Seis amostras com nomes e códigos: Azul petróleo #14566B, Azul profundo #0B3448, Névoa #EAF3F6, Papel #F5F8FA, Grafite #202B36 e Ardósia #536573. Corresponde à tabela de identidade visual; é paleta, não gráfico de dados. |
| `docs/stack/docker.svg` | Símbolo reconhecível e nome Docker. Identifica tecnologia utilizada; o logotipo não demonstra domínio técnico, desempenho ou execução. |
| `docs/stack/fastapi.svg` | Símbolo reconhecível e nome FastAPI. Identifica tecnologia utilizada; o logotipo não demonstra domínio técnico, desempenho ou execução. |
| `docs/stack/nextjs.svg` | Símbolo reconhecível e nome Next.js. Identifica tecnologia utilizada; o logotipo não demonstra domínio técnico, desempenho ou execução. |
| `docs/stack/postgresql.svg` | Símbolo reconhecível e nome PostgreSQL. Identifica tecnologia utilizada; o logotipo não demonstra domínio técnico, desempenho ou execução. |
| `docs/stack/python.svg` | Símbolo reconhecível e nome Python. Identifica tecnologia utilizada; o logotipo não demonstra domínio técnico, desempenho ou execução. |
| `docs/stack/react.svg` | Símbolo reconhecível e nome React. Identifica tecnologia utilizada; o logotipo não demonstra domínio técnico, desempenho ou execução. |
| `docs/stack/typescript.svg` | Símbolo reconhecível e nome TypeScript. Identifica tecnologia utilizada; o logotipo não demonstra domínio técnico, desempenho ou execução. |
| `frontend/src/app/icon.svg` | Símbolo azul petróleo de duas folhas sobrepostas. Compatível com a identidade da interface. Sua menção em checks de asset não prova funcionalidade da aplicação. |

## Diagramas conceituais

- `evidencedesk/README.md:56` — Componentes: UI, API, PostgreSQL, fontes privadas, worker, parser e modelos opcionais. Setas tracejadas identificam busca/IA opcionais. Rótulos do worker encurtados para evitar sobreposição. Explica arquitetura, sem provar uma execução.
- `evidencedesk/docs/architecture.md:13` — Fluxo da fonte/importação até incidentes, regras, elaboração manual ou opcional por IA, revisão independente e exportação. Rótulos convergentes Fontes e Regras calculadas reduzidos; render final legível. Diagrama conceitual.
- `evidencedesk/docs/architecture.md:63` — Sequência de reserva, upload de chunks/hash, finalização, lease do worker, parser fora da transação e commit após revalidação. Render legível; descreve o protocolo, não substitui teste de concorrência.
- `evidencedesk/docs/architecture.md:139` — Observabilidade separada: métricas, Collector, logs/spans, Prometheus, Alertmanager, Tempo/Loki e Grafana. Mudança LR para TB separa rótulos de consultas e scrape. Diagrama de componentes, não painel de métricas.
- `evidencedesk/docs/restore-read-story.md:47` — Sequência de recuperação: backup, ledger atual, manutenção/drenagem, destino restaurado, aplicação das exclusões antes da abertura e encerramento. Coerente com o runbook; apenas o manifesto/testes do ensaio sustentam execução real.
- `evidencedesk/docs/threat-model.md:7` — Fronteiras de confiança entre navegador, Next, API, banco/arquivos, worker/parser e serviços opcionais. Adequado como mapa de ameaças e fronteiras; não apresenta certificação de segurança.

## Ajustes documentais

- `README.md`: Distingue workbench offline de bancada autenticada; mantém gate humano inconclusivo. Encurta duas arestas do Mermaid para evitar colisão.
- `docs/demo.md`: Data o recorte em 22/09/2026; remove atual; liga decisão preenchida e dossiê aprovado sem leitor com nomes dos estados reais.
- `docs/publication-frontend.md`: Alt do JSON registra recorte datado em vez de atual.
- `docs/restore-read-story.md`: Retira igualdade não sustentada com layout atual; liga as duas capturas restantes e distingue erro visível de HTTP 404/ausência física comprovados pelo ensaio.
- `docs/screenshots.md`: Documenta as três capturas do workbench, papel offline, fixture e limites do zoom/escaping/julgamento humano.
- `docs/architecture.md`: Reduz dois rótulos no fluxo principal e orienta observabilidade em TB para melhorar legibilidade.

## Verificações e limites

- inventory_visuals.py após as alterações: 53 usos EVD, 37 arquivos referenciados, 6 Mermaid, zero referência local ausente. Inventário lexical, não certifica links remotos.
- node render_evd_visuals.cjs: 15 SVGs renderizados na prancha e 6 Mermaid com sucesso; pixels vistos. Mermaid major 11 via CDN JS. Versão minor não exposta. Não certifica o renderer GitHub.
- git diff --check: sem erro de whitespace. warning preexistente de conversão CRLF/LF em arquivo backend não editado nesta revisão.
- git diff --name-only -- *.png *.svg *.jpg *.jpeg *.webp *.gif e SHA256 do inventário: nenhuma mídia alterada; todos os 37 hashes preservados.
- REC backend .venv python scripts/check_repository_docs.py: tentativa inicial não executou verificação: ModuleNotFoundError github_slugger. Não contado como aprovação; o coordenador executou depois com dependências explícitas.
- python -m uv run --with markdown-it-py[linkify]==4.0.0 --with github-slugger==0.0.3 python scripts/check_repository_docs.py: Execução do coordenador aprovada: 45 documentos, 829 links, problems vazio. 83 links externos excluídos; recibo evidencedesk-docs-check.json, chunk 99f4a0. Resultado reutilizado, não segunda execução.

- Imagens são registros históricos de dados sintéticos; não representam automaticamente o código atual.
- Capturas longas são reduzidas pelo visualizador; conteúdo equivalente foi lido também em desktop/recortes. Não se declara legibilidade de todo texto na miniatura.
- Aprovação automatizada, estado visual de erro e diagrama não comprovam revisão humana, HTTP específico, eliminação física ou execução concorrente.
- Não há gráfico analítico nas capturas EVD: predominam tabelas, JSON, formulários e estados. Paleta é amostra de cores.
- Documentos globais e fontes históricas foram preservados. As alterações locais anteriores de outros agentes não são atribuídas a esta inspeção.
