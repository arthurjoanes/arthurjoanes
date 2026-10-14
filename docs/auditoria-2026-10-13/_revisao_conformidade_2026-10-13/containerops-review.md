# Revisão de conformidade — ContainerOps

HEAD: `57dc89474b8aa2067a1c8a925f33def0ceb27abe`. Revisão de docs, implementação dos cinco IDs, provas anteriores e pixels documentais. Cinco arquivos de documentação ajustados; nenhuma alteração da aplicação, commit ou push.

## Escopo e método

Documentação lida antes dos diffs: `README.md`, `docs/architecture.md`, `docs/demo.md`, `docs/runbooks.md`, `docs/verification.md`, `docs/report-guide.md`, `docs/screenshots.md`, `docs/brand.md`, `docs/frontend-quality.md`, `docs/operational-recovery.md`, `docs/security.md`, `docs/admission-measurement.md (trechos das seções1–5; não reivindicada leitura integral por saída truncada)`.

Diferenças lidas: `diff scripts/report.py`, `diff scripts/report.css`, `diff scripts/backup_catalog.py`, `diff scripts/test_report.py`, `diff tests/test_backup_catalog.py`, `diff tests/test_backup_package.py`. A leitura do prompt inicial e dos relatórios globais foi registrada em `report-compliance-review.md`; esta revisão distingue auditoria histórica do estado corrigido.

Cobertura visual: **27 assets (9 PNG +18 SVG),4 HTMLs com 33 painéis,4 SVGs inline nos cabeçalhos e 3 Mermaid**. Cada arquivo foi aberto em pixels; os PNGs densos foram vistos individualmente/por recortes, logos em prancha. Hashes dos 31 arquivos originais (assets+HTMLs) permanecem iguais à baseline desta revisão.

Recibos: `ops-visual-review/render-receipt.json`, `panels-receipt.json`, `details-receipt.json`, `containerops-diagrams/receipt.json` e `containerops-doc-helper-check.json`. A existência de screenshots dos detalhes não é tratada como inspeção de todos eles: foram vistos os painéis e tabelas expandidas de CPU/cache.

## IDs confrontados

| ID | Resultado | Evidência |
|---|---|---|
|OPS-01|conforme|Decimal converte NanoCpus inteiros validados para CPUs sem arredondar a uma casa; testes de frações/tipos/faixa. Pixels do exemplo mostram 0,25/0,75; snapshots antigos preservados e agora explicados no guia.|
|OPS-02|conforme|bundle_guides vincula arquivos rastreados ao HEAD, diferencia originais/copias e alterações locais, recusa caminho não rastreado/externo. Testes de links no diff e recibo anterior 260 referências; nenhuma promessa de permalink fiel a arquivo sujo.|
|OPS-03|conforme|Comandos PowerShell/POSIX separados, namespace explícito, ramo padrão sem sessão em subshell POSIX, sem trusted-source implícito. Render atual mostra os dois shells. Esta revisão também bloqueia helper manual dc em sessão para não operar pf-containerops.|
|OPS-04|conforme|Diff remove declarações CSS sobrepostas no mesmo bloco. Recibo anterior compara 12 combinações de estilos; navegação dos 33 painéis e pixels legíveis nesta rodada. Não repetida suíte de estilos.|
|OPS-05|conforme|Descoberta de pacote portátil sem registro mantém imported/protected=true; registro posterior preserva flags. Diffs dos testes cobrem falhas de publicação/catálogo, novo processo, retenção e preflight sem confiança. Compatibilidade legada sem manifesto mantida.|

## Ajustes confirmados

- `docs/runbooks.md:68`: Limita helper dc à demonstração padrão; guarda CONTAINEROPS_SESSION antes de Docker e direciona sessão à CLI.
- `docs/operational-recovery.md:91`: Preserva bloco histórico com builder padrão e cria sequência separada para sessão, sem parar builder de outro contexto.
- `docs/report-guide.md:8`: Explica regeneração da apresentação com dados históricos e arredondamento CPU preservado nos HTMLs antigos; não confunde geração do HTML com nova operação/scan.

O helper `dc` foi extraído do Markdown e analisado pelo parser PowerShell. Em sessão sintética, lançou erro antes de Docker; sem sessão, chamou somente a função stub com o projeto padrão esperado. O teste não acessou daemon nem serviços. O bloco de comandos histórico foi preservado; o novo texto não retroage a evidência.

## Matriz visual

| Dimensão | Observação efetiva |
|---|---|
|Paleta|HTMLs atuais/documentais usam azul escuro no cabeçalho, superfícies brancas/cinza, verde para aprovação e âmbar para ausência/antiguidade. Capturas mais antigas C/O e badges têm paletas distintas, identificadas como históricas/decorativas.|
|Tipografia|Source Sans do relatório com títulos hierárquicos; IDs/comandos monoespaçados. Desktop 1440 legível; PNG móvel 354/390 quebra IDs/hashes em linha. Textos longos exigem abrir original, não miniatura.|
|Espaçamento|Seções, linhas e detalhes separam resultado de prova. Catálogo 12 cópias é longo e exige rolagem; nenhum corte lateral observado em 1440. PNG móvel é recorte, não prova de menu ou fluxo completo.|
|Ícones|18 SVG externos e 4 marcas inline vistos; camadas retangulares consistentes nos HTMLs; logos de stack/badges legíveis. Triângulos details acompanham texto, estados incluem palavras além da cor.|
|Gráficos/diagramas|Não há gráfico quantitativo nos 33 painéis: valores aparecem em tabelas/cartões. Cache histórico tem 10,5/0,9/0,9/11,3 s, sem alegar SLA. Três Mermaid descrevem estrutura/sequência. As duas sobreposições identificadas foram corrigidas alongando uma ligação em cada fluxograma; nós, textos e relações permanecem iguais. Os pixels finais de 1600 px foram inspecionados.|
|Estados|Vistos aprovado, ausente, parcial, antigo, íntegro, desconhecido, sem recibo e restore verificado. Datas e vínculo da imagem limitam conclusões; abrir HTML não testa saúde ou restauração atual.|

## Inspeção por recurso

### `containerops/docs/contact/linkedin.svg` — SVG

Badge linkedin com texto e ícone legíveis. Cores variam por link; não representa estado operacional.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/readme/badges/architecture.svg` — SVG

Badge architecture com texto e ícone legíveis. Cores variam por link; não representa estado operacional.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/readme/badges/demo.svg` — SVG

Badge demo com texto e ícone legíveis. Cores variam por link; não representa estado operacional.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/readme/badges/evidence.svg` — SVG

Badge evidence com texto e ícone legíveis. Cores variam por link; não representa estado operacional.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/readme/badges/linkedin.svg` — SVG

Badge linkedin com texto e ícone legíveis. Cores variam por link; não representa estado operacional.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/readme/badges/run.svg` — SVG

Badge run com texto e ícone legíveis. Cores variam por link; não representa estado operacional.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/readme/home.png` — PNG

Recorte da verificação histórica de 22/09: aprovada, 246,7 s, HTTP/hardening/rede. O fim do fluxo fica fora do recorte; não comprova a navegação atual.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/backups-desktop.png` — PNG

Catálogo com 12 cópias do contexto co-20261012-f 040 d 4 f 5; IDs completos, integridade e recibo de restore separados. Primeiras linhas legíveis; o restante fica abaixo do recorte.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/backups-mobile.png` — PNG

Recorte de 354 × 900 do catálogo: filtros, primeira cópia, ID quebrado em linha e estados íntegro/sem recibo. Não contém o seletor de navegação; não alegar demonstração do menu móvel.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/editorial-20260922/initial-job.png` — PNG

Job histórico de 22/09 12:36:32 UTC: concluído, quatro palavras, uma tentativa, v 1.0.0; estados ausentes no índice permanecem explícitos.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/editorial-20260922/restore.png` — PNG

Restore histórico: três jobs, 27,6 s, cópia 8,5 s, resultado com quatro palavras. Tela antiga mostra três critérios; não é a apresentação atual com limpeza separada.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/editorial-20260922/rollback.png` — PNG

Rollback histórico aprovado em 45,1 s, job após retorno, imagens e identidade legíveis. Ausência de run_id não foi substituída por inferência.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/journey-artifacts.png` — PNG

Interface histórica com marca C/O. Release 2, build/auditoria da mesma imagem e scan HIGH/CRITICAL zero, duração 18,7 s e 52 pacotes. Datas visíveis; não equivale a scan atual. Aberta em dois recortes para ler a área densa.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/journey-release.png` — PNG

Troca histórica para v 2 em 30,2 s, cinco jobs e hashes anterior/candidato. Foco visível no título; não é medição da rodada atual.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/screenshots/journey-restore-390.png` — PNG

Tela histórica móvel de 390 px, oito jobs restaurados em 45,3 s, cópia 17,1 s. Hashes quebram linha; limite ao mesmo host explícito. Aberta em dois recortes.

Método: Pixels do arquivo original; recortes adicionais nos dois PNGs longos.

### `containerops/docs/stack/docker.svg` — SVG

Logo e nome da tecnologia docker legíveis; elemento de identificação, sem conclusão de execução.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/stack/fastapi.svg` — SVG

Logo e nome da tecnologia fastapi legíveis; elemento de identificação, sem conclusão de execução.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/stack/nginx.svg` — SVG

Logo e nome da tecnologia nginx legíveis; elemento de identificação, sem conclusão de execução.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/stack/postgresql.svg` — SVG

Logo e nome da tecnologia postgresql legíveis; elemento de identificação, sem conclusão de execução.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/stack/python.svg` — SVG

Logo e nome da tecnologia python legíveis; elemento de identificação, sem conclusão de execução.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/scripts/assets/favicon.svg` — SVG

Marca de três camadas retangulares reconhecível; variantes clara, monocromática e azul preservam forma. Favicon aberto ampliado na prancha.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/scripts/assets/mark-light.svg` — SVG

Marca de três camadas retangulares reconhecível; variantes clara, monocromática e azul preservam forma. Favicon aberto ampliado na prancha.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/scripts/assets/mark-mono.svg` — SVG

Marca de três camadas retangulares reconhecível; variantes clara, monocromática e azul preservam forma. Favicon aberto ampliado na prancha.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/scripts/assets/mark.svg` — SVG

Marca de três camadas retangulares reconhecível; variantes clara, monocromática e azul preservam forma. Favicon aberto ampliado na prancha.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/scripts/assets/wordmark-light.svg` — SVG

Nome ContainerOps e marca de três camadas legíveis; variante clara inspecionada sobre fundo escuro, monocromática e azul em fundo claro.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/scripts/assets/wordmark-mono.svg` — SVG

Nome ContainerOps e marca de três camadas legíveis; variante clara inspecionada sobre fundo escuro, monocromática e azul em fundo claro.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/scripts/assets/wordmark.svg` — SVG

Nome ContainerOps e marca de três camadas legíveis; variante clara inspecionada sobre fundo escuro, monocromática e azul em fundo claro.

Método: Rasterização local em prancha; badge architecture também aberto individualmente.

### `containerops/docs/evidence/containerops-evolution-20261012/report.html` — HTML

Snapshot 12/10 05:06:32: verificação aprovada 221,7 s, job sete palavras, TLS aprovado, restore três jobs/30,2 s, release 38,5 s, rollback 54,2 s e 20 JSONs. Catálogo ainda é tabela de 12 cópias dentro de recovery. Artefatos aprovados para imagem vinculada. CPU histórica arredondada 0,2/0,8; explicação acrescentada ao guia.

Método: Chromium local,1440 px; todos os painéis, tabela expandida CPU e cache vistos em pixels. Marcas inline vistas no cabeçalho. Sem consultas ao daemon.

### `containerops/docs/evidence/editorial-20260922/operations-view/docs/report.html` — HTML

Snapshot editorial 22/09 12:40:58: verificação/TLS/release/artefatos ausentes aparecem em âmbar; job quatro palavras, restore três jobs/27,6 s, rollback 45,1 s e quatro JSONs. Tabela de limites e cache informa ausência, sem inventar medição.

Método: Chromium local,1440 px; todos os painéis, tabela expandida CPU e cache vistos em pixels. Marcas inline vistas no cabeçalho. Sem consultas ao daemon.

### `containerops/docs/examples/report.html` — HTML

Exemplo regenerado 13/10 23:39:57 com registros 12/10: verificação antiga 42,7 h, CPU 0,25/0,75 exata, catálogo em página própria com filtros e 12 cópias, comandos PowerShell/POSIX, restore com ID e limpeza. Dois registros de integridade desconhecida e cópias sem recibo não são aprovados indevidamente. Artefatos vinculados ao scan histórico;20 JSONs.

Método: Chromium local,1440 px; todos os painéis, tabela expandida CPU e cache vistos em pixels. Marcas inline vistas no cabeçalho. Sem consultas ao daemon.

### `containerops/docs/report.html` — HTML

Snapshot 22/09 09:15:06: verificação 246,7 s, job sete palavras, TLS, restore três jobs/27,4 s, release 30,2 s, rollback 44,9 s. Artefatos marcam verificação parcial porque scan/auditoria não correspondem ao build;37 JSONs. Cache:10,5/0,9/0,9/11,3 s e 1/9/8/2 etapas. Limites CPU antigos 0,2/0,8 preservados.

Método: Chromium local,1440 px; todos os painéis, tabela expandida CPU e cache vistos em pixels. Marcas inline vistas no cabeçalho. Sem consultas ao daemon.

### `containerops/docs/evidence/containerops-evolution-20261012/report.html:410` — SVG inline

Marca de três camadas clara sobre fundo azul escuro, sem rótulo cortado; elemento de identidade, não gráfico ou resultado.

Método: Cabeçalho do HTML renderizado

### `containerops/docs/evidence/editorial-20260922/operations-view/docs/report.html:397` — SVG inline

Marca de três camadas clara sobre fundo azul escuro, sem rótulo cortado; elemento de identidade, não gráfico ou resultado.

Método: Cabeçalho do HTML renderizado

### `containerops/docs/examples/report.html:485` — SVG inline

Marca de três camadas clara sobre fundo azul escuro, sem rótulo cortado; elemento de identidade, não gráfico ou resultado.

Método: Cabeçalho do HTML renderizado

### `containerops/docs/report.html:410` — SVG inline

Marca de três camadas clara sobre fundo azul escuro, sem rótulo cortado; elemento de identidade, não gráfico ou resultado.

Método: Cabeçalho do HTML renderizado

### `containerops/README.md:58` — Mermaid

Mapa cliente/proxy/API/banco/worker e CLI/restore/relatório corresponde à legenda; grupos são redes, não prova de isolamento executado. Antes: rótulos SQL e dump+restore-test se sobrepunham no cruzamento central. Depois: um hífen extra na ligação CLI → volume novo os separou verticalmente; textos e relações preservados, pixels finais inspecionados.

Método: Mermaid major 11, strict/default, render local; apenas biblioteca JS remota.

### `containerops/docs/architecture.md:50` — Mermaid

Mapa dos módulos API e worker separa autorização, admissão, claim/lease, conclusão e logs. Antes: rótulos de log e lock/SKIP LOCKED se sobrepunham parcialmente. Depois: um ponto extra na ligação pontilhada processamento → logs separou os textos; pixels finais inspecionados, sem mudar relações. Não certificar equivalência ao renderer do GitHub.

Método: Mermaid major 11, strict/default, render local; apenas biblioteca JS remota.

### `containerops/docs/architecture.md:83` — Mermaid

Sequência POST/consulta/worker/banco legível no render local; respostas e fronteiras temporais descrevem o contrato, sem representar medição de latência.

Método: Mermaid major 11, strict/default, render local; apenas biblioteca JS remota.

## Verificações e limites

- `powershell -NoProfile -ExecutionPolicy Bypass -File _revisao_conformidade_2026-10-13/check-containerops-doc-helper.ps1`: passed: parser 0 erros; sessão bloqueada antes de qualquer chamada; ramo padrão chama stub uma vez com argv esperado. Limite: Processo filho, variáveis e caminho sintéticos, função Docker substituída; nenhum daemon utilizado. Recibo containerops-doc-helper-check.json.
- `node render-other-review.cjs containerops ops; node render-ops-panels.cjs; node render-ops-details.cjs; node render-review-diagrams.cjs containerops`: 27 assets, 4 HTMLs, 33 painéis e 3 Mermaid renderizados; 4 marcas SVG inline inspecionadas nos cabeçalhos. Zero recursos falhos nos 4 HTMLs. Limite: Abertura local sem backend; renderização atual de snapshots históricos. Capturar detalhes não equivale a inspecionar todos: pixels de CPU/cache vistos, demais detalhes possuem recibo textual.
- `Comparação SHA-256 de ops-visual-input.json com arquivos originais após revisão`: 31/31 hashes idênticos:27 assets+4 HTMLs. Limite: Baseline é o início desta revisão, após a rodada de correções; exemplo regenerado já estava nessa baseline.
- `git -C containerops diff --check`: exit 0; sem erros whitespace. Limite: Git avisa normalização futura LF/CRLF do exemploHTML já modificado na rodada anterior.

- Campos checks_executed e checks em _correcoes_2026-10-13/containerops.json: Windows Python 3.11 backup 26/26, catálogo 21+1 skip, operações 17+1 skip, relatório 75/75; Linux backup 48/48, relatório 75/75, operações 18/18. São resultados anteriores, não execução desta revisão.
- Registro anterior ruff check/format 66 arquivos, browser 320/768/1440 e 260 referências. Mantidas limitações stat/fstat Windows 3.12/3.13 e mocks de comandos externos.

- Sem nova suíte integral, build de imagem, chamada Docker, restore real ou carga. A aplicação não foi alterada nesta revisão; guard de documentação validado com stub.
- Mermaid 11 local não certifica o renderer do GitHub. As sobreposições de rótulos identificadas foram removidas no render final; cruzamentos normais de arestas permanecem e a leitura em miniatura exige ampliação.
- Inspeção de pixels de snapshot confirma conteúdo/legibilidade observados, não reexecuta as operações datadas nem confirma segurança atual de imagens.
- Nenhuma reexecução dos testes Linux/Windows citados no recibo anterior; nenhum commit/push.

## Correção dos dois fluxogramas — antes/depois

- `README.md:73`: um hífen adicional em `O ---> T` aumenta a distância de layout até o volume novo. O rótulo dump/restore fica abaixo do rótulo SQL, sem sobreposição.
- `docs/architecture.md:76`: um ponto adicional em `X -..-> L` aumenta a distância de layout até os logs. O rótulo de início/conclusão/perda de lease fica à direita, separado do lock/SKIP LOCKED.

Os nós, textos, extremidades e tipos de seta são idênticos aos anteriores. A comparação normalizada dos blocos confirmou que essas duas inserções são as únicas alterações. Os três diagramas foram renderizados novamente a partir do Markdown final; os pixels dos dois alterados foram abertos e conferidos. `git diff --check` passou. Nenhum HTML ou asset histórico mudou: os 31 hashes continuam iguais.

Antes: `containerops-diagrams-before/diagram-1.png` e `diagram-2.png`, com fontes e hashes em `sources.json`. Depois: `containerops-diagrams/diagram-1.png` e `diagram-2.png`. Recibo: `containerops-diagrams/layout-fix-receipt.json`. A validação usa Mermaid major 11 local, sem alegar equivalência ao renderer do GitHub ou testar backend/infraestrutura.
