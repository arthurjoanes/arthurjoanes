# Revisão — API Sentinel

HEAD `a0e1375bfecabcdf0a5e98802598bff63bbe44f6`. Cinco IDs conformes; quatro ajustes documentais. Sem alteração de código nesta rodada.

## Documentos lidos

- `README.md`
- `docs/architecture.md`
- `docs/demo.md`
- `docs/verification.md`
- `docs/incident-console.md`
- `docs/screenshots.md`
- `docs/operational-story.md`
- `docs/security.md`
- `docs/decisoes-tecnicas.md`
- `docs/problem-solution.md`

## IDs

- API-01: Migração BEGIN IMMEDIATE, FK suspensa antes da transação, copia IDs/eventos, restaura índices e verifica foreign_key_check. Limite de IDs já apagados documentado; testes retenção/reabertura/rollback.
- API-02: Consulta limit+1, desempate por ID, cursor por filtro e retenção, navegação/retorno preservados. Snapshot entre páginas explicitamente não congelado; teste205/100-100-5.
- API-03: copytree assets públicos, teste bytes e manifest; doc raiz HTTP. Recibo anterior confirma4assets/fonte/marca.
- API-04: Bloco Python3 urllib lê token UTF-8 e imprime só3campos. Recibo anterior validou com transporte sintético; não afirmada consulta real nova.
- API-05: Conteúdo UTF-8 portável,0600 condicionado POSIX; testes Linux/root preservados.

## Mudanças

- `docs/demo.md`: Explicar paginação além de100 e ID como atalho.
- `docs/decisoes-tecnicas.md`: Atualizar limite por página, navegação e GCRA já existente, mantendo janela fixa padrão.
- `docs/problem-solution.md`: Gráfico usa página atual, não sempre primeiros100 do filtro.
- `docs/screenshots.md`: Identificar capturas anteriores à paginação e HTML histórico que depende de assets da execução.

## Matriz visual

| Dimensão | Verificação |
|---|---|
| palette | Azul/petróleo atual separa marca de estados vermelho/verde/neutro; fotos antigas verde/laranja identificadas como históricas. |
| typography | Títulos, números e horários legíveis em pixels nativos; labels menores exigem abrir imagem original. |
| spacing | Fila desktop e coluna móvel preservam grupos; capturas parciais do runbook/topo não alegam fluxo completo. |
| icons | 24SVGs vistos, marca/seta, stack, badges; ícones com rótulos. |
| charts | Barra1:2, três inícios no dia12 e fixture8500+4000=12500 conferidos. Dados sintéticos e amostra explícitos. |
| states | Ativo, recuperado, administrativo, firing atrasado, vazio e probe validado/desativado visíveis. Não é saúde atual. |

## Recursos vistos

- `api-sentinel/alert_receiver/assets/favicon.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/alert_receiver/assets/mark-light.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/alert_receiver/assets/mark-mono.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/alert_receiver/assets/mark.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/alert_receiver/assets/wordmark-light.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/alert_receiver/assets/wordmark-mono.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/alert_receiver/assets/wordmark.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/contact/linkedin.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/readme/architecture.svg`: Mapa SVG aberto individualmente: Bearer→NGINX→API, PostgreSQL/Redis/ERP e telemetria em um host; setas e legendas legíveis e coerentes.
- `api-sentinel/docs/readme/badges/architecture.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/readme/badges/demo.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/readme/badges/evidence.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/readme/badges/linkedin.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/readme/badges/run.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/readme/commercial-fixture.svg`: Gráfico SVG individual: eixo0–10000 centavos, barras8500/4000 proporcionais; soma12500,4unidades,2pedidos,ticket62,50 corretos.
- `api-sentinel/docs/readme/home.png`: Central anterior azul, 21 finalizados, zero ativos, probe validado; viewport parcial, sem afirmar saúde atual.
- `api-sentinel/docs/readme/incident-detail.png`: Detalhe sintético ERP ativo #1: intervalo 05:40–06:00 UTC, dois eventos às06:00. Escopo prévia12/10 explícito.
- `api-sentinel/docs/readme/incidents.png`: Central sintética12/10:1 ativo e2 finalizados; barra1:2 e três inícios no dia12, seis dias zerados; probe desativado. Legenda correta.
- `api-sentinel/docs/readme/palette.svg`: Seis cores com códigos e nomes coerentes com tabela README; contraste não medido nesta rodada.
- `api-sentinel/docs/screenshots/central-desktop.png`: Central histórica laranja:1 ativo18recuperados; página parcial, sem confundir com design atual.
- `api-sentinel/docs/screenshots/central-mobile.png`: Versão móvel histórica laranja com probe e contadores legíveis; só topo da página.
- `api-sentinel/docs/screenshots/editorial-20260922/01-fixture-validada-detalhe.png`: Recorte nativo do probe:125/2/62,50, success,8ms, validade15s e2réplicas desejadas. Não é latência garantida.
- `api-sentinel/docs/screenshots/editorial-20260922/01-fixture-validada.png`: Página histórica sem incidentes e probe validado22/09 12:52:13; mesma referência125/2/62,50.
- `api-sentinel/docs/screenshots/editorial-20260922/02-incidente-ativo.png`: Ocorrência#2 ativa; início12:53:23 e entrega12:53:33, identidade e runbook visíveis.
- `api-sentinel/docs/screenshots/editorial-20260922/03-mesma-ocorrencia-recuperada-detalhe.png`: Histórico#2: abertura12:53:33 e recuperação12:53:53, fingerprint preservado. Confere legenda.
- `api-sentinel/docs/screenshots/editorial-20260922/03-mesma-ocorrencia-recuperada.png`: Ocorrência#2 resolvida, período termina12:53:43; recebimento12:53:53 separado. Sem confundir relógios.
- `api-sentinel/docs/screenshots/focused-20260922/fila-foco.png`: Recorte da fila21finalizados; duas linhas completas com recuperação e investigação.
- `api-sentinel/docs/screenshots/focused-20260922/fila-movel-foco.png`: Fila móvel com21finalizados; primeira linha, investigação e datas legíveis.
- `api-sentinel/docs/screenshots/focused-20260922/historico-foco.png`: Histórico21/09 com abertura04:19:08 e recuperação04:19:28; duas entregas.
- `api-sentinel/docs/screenshots/incident-history-desktop.png`: Prévia antiga verde #42 resolvida, firing atrasado ignorado e três eventos visíveis; quatro entregas acumuladas não equivalem à retenção.
- `api-sentinel/docs/screenshots/incidents-desktop.png`: Prévia antiga verde com1ativo,2finalizados, estados recuperado e administrativo diferenciados.
- `api-sentinel/docs/screenshots/incidents-mobile.png`: Mesma prévia móvel; duas partes inspecionadas, três ocorrências e rodapé legíveis. Não prova UI atual.
- `api-sentinel/docs/screenshots/operational-story-20260922/20260922t053056476675z/01-fixture-validada.png`: Tentativa histórica05:30: central vazia, probe05:33:09 success e125/2/62,50.
- `api-sentinel/docs/screenshots/operational-story-20260922/20260922t053056476675z/02-incidente-ativo.png`: Tentativa05:30: #3 ativa, início05:34:18, recebimento05:34:28.
- `api-sentinel/docs/screenshots/operational-story-20260922/20260922t053056476675z/03-mesma-ocorrencia-recuperada.png`: Tentativa05:30: mesma#3 resolvida; origem05:34:43 e recebimento05:34:48.
- `api-sentinel/docs/screenshots/operational-story-20260922/20260922t054206130821z/01-fixture-validada.png`: Tentativa selecionada05:42: central vazia, probe05:44:17 e125/2/62,50.
- `api-sentinel/docs/screenshots/operational-story-20260922/20260922t054206130821z/02-incidente-ativo.png`: Tentativa05:42: #3ativa com entrega05:45:38 e início05:45:33.
- `api-sentinel/docs/screenshots/operational-story-20260922/20260922t054206130821z/03-mesma-ocorrencia-recuperada.png`: Tentativa05:42: mesma#3resolvida, origem05:45:48 e recebimento05:45:58; confere história.
- `api-sentinel/docs/screenshots/runbook-desktop.png`: Runbook antigo perda de réplica; título, comandos PromQL e Docker legíveis. Captura termina antes do fim do procedimento.
- `api-sentinel/docs/screenshots/runbooks-desktop.png`: Índice antigo dos sete runbooks com ações claras; prévia declarada.
- `api-sentinel/docs/screenshots/syntax-20260922/runbook-code.png`: Recorte de código PromQL/PowerShell legível, rótulos e linhas não cortados.
- `api-sentinel/docs/stack/docker.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/stack/fastapi.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/stack/grafana.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/stack/nginx.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/stack/postgresql.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/stack/prometheus.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/stack/python.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/docs/stack/redis.svg`: SVG visto na prancha: marca/badge/logotipo coerente com o rótulo, legível; não constitui medição.
- `api-sentinel/artifacts/problem-review/20260921t064944662185z/central.html`: HTML histórico de21/09 lido no browser:0ativos7resolvidos, probe06:57:34. CSS/JS absolutos ausentes ao abrir arquivo; conteúdo visível sem layout original. Limitação agora explícita na galeria; bytes preservados.
- `api-sentinel/README.md:77`: Mermaid11 visto: rótulos e setas legíveis, sem cortes; diagrama de módulos, sequência autorizada e observação correspondem à documentação. Render local não presume GitHub.
- `api-sentinel/docs/architecture.md:13`: Mermaid11 visto: rótulos e setas legíveis, sem cortes; diagrama de módulos, sequência autorizada e observação correspondem à documentação. Render local não presume GitHub.
- `api-sentinel/docs/architecture.md:50`: Mermaid11 visto: rótulos e setas legíveis, sem cortes; diagrama de módulos, sequência autorizada e observação correspondem à documentação. Render local não presume GitHub.

## Checks e limites

- node render-other-review.cjs api-sentinel api: 24SVGs e1HTML renderizados. 25PNGs originais vistos individualmente (mobile em2partes).
- node render-review-diagrams.cjs api-sentinel: 3 diagramas renderizados e vistos.
- git -C api-sentinel diff --check: aprovado
- SHA256 dos49visuais+1HTML: 50/50 preservados
- _correcoes_2026-10-13/api-sentinel.json:384 Windows e386 Linux, lint/tipos e limites registrados; nenhuma suíte reexecutada nesta revisão.
- _correcoes_2026-10-13/api-qa/browser.json:205itens em3páginas,320/768/1440,teclado/retorno/assets aprovados; é recibo anterior.
- Sem stack nova, suites gerais, scan ou medição de carga.
- Não certificada acessibilidade completa ou WCAG nesta inspeção de pixels.
- Não migrada base real; revisão estática e recibos anteriores separam-se de execução atual.
- Imagens históricas e HTML mantidos byte a byte; renderer local não equivale ao GitHub.
