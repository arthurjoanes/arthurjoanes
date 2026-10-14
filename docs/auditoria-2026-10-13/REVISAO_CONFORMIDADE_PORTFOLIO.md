# Revisão de conformidade do portfólio GitHub

**Perfil:** [arthurjoanes](https://github.com/arthurjoanes)  
**Data da rodada:** 13 de outubro de 2026  
**Escopo:** perfil, oito projetos próprios e duas contribuições em forks; documentação, correções anteriores e evidências visuais.

Esta revisão confronta o pedido original com a [auditoria completa](AUDITORIA_COMPLETA_PORTFOLIO.md), o [complemento](COMPLEMENTO_AUDITORIA_PORTFOLIO.md), os [recibos de correção](CORRECOES_PORTFOLIO_2026-10-13.md) e os checkouts locais. Foram encontrados e corrigidos três defeitos funcionais residuais: dois em EvidenceDesk e um em Loja Assistente. Também foram corrigidas descrições de contratos, instruções operacionais, legendas e seis lacunas dos relatórios.

Os 47 IDs anteriores foram reexaminados. Os três defeitos pertencem a EVD-02, EVD-05 e LOJ-01; não são contados outra vez como novos IDs. Os resultados abaixo identificam quais testes foram realmente executados nesta revisão. As notas da auditoria inicial permanecem históricas: esta etapa não repetiu todas as suítes nem produziu novas notas por uma fórmula baseada na contagem de testes.

As alterações estão locais. Nenhum commit, push, PR ou deploy foi realizado nesta etapa. Os originais das imagens foram preservados. As versões anteriores dos três relatórios estão em `_revisao_conformidade_2026-10-13/antes-*.md`.

## Sumário

- [Comparação com o pedido original](#conformidade)
- [Revisão por repositório](#repositorios)
- [Defeitos encontrados novamente](#defeitos)
- [Cobertura das imagens](#imagens)
- [Matriz visual por projeto](#matriz-visual)
- [Conclusões sustentadas pelas imagens](#conclusoes-visuais)
- [Verificações e limites](#validacao)

<a id="conformidade"></a>
## Comparação com o pedido original

O anexo foi relido integralmente, assim como os três relatórios anteriores. O parecer independente e a localização dos problemas na versão anterior estão no [registro de conformidade](_revisao_conformidade_2026-10-13/report-compliance-review.md). Esse registro documenta o diagnóstico anterior aos ajustes; os estados atualizados estão nesta tabela.

| Requisito | Resultado após a revisão |
| --- | --- |
| Inventário, diagnóstico, notas e análise individual | Onze repositórios públicos mantidos no escopo; forks avaliados pelo diff autoral. Notas e achados históricos identificados como tal. |
| Problemas com evidência, causa, impacto, correção, prioridade e validação | Os 47 IDs foram preservados e associados aos recibos. O que foi testado antes está separado do que foi executado agora. |
| D-01: coerência do contrato CycleOps | `step` altera o estado recebido e pode emitir warnings. A afirmação de ausência de logging no recibo foi corrigida após leitura do motor. Também corrigido o nome do controle para Lista/Mapa. |
| D-02: alterações proporcionais em documentação boa | Parte 3 substituída por blocos pontuais, com destino e seção, preservando as partes que já estavam corretas. |
| D-03: texto pronto para copiar | Instruções editoriais e IDs da auditoria ficaram fora das cercas de código; o conteúdo copiável descreve o projeto. |
| D-04: plano único | Parte 5 reúne os 47 IDs: 24 P1 e 23 P2, com links para achado e recibo. A tabela complementar está identificada como recorte histórico. |
| D-05: checklist específica | Nove instruções genéricas foram substituídas pelos respectivos critérios: request ID, NUL, migração, Argon2, segredos, importação interrompida, quota finita, retenção e SHA-256. |
| D-06: exame visual demonstrável | Matriz abaixo registra cores, texto, espaçamento, ícones, gráficos e estados; os pacotes individuais registram cada arquivo inspecionado. |
| Uso de IA, autoria e contratação | Mantidos os critérios e fontes da auditoria: defeitos são verificáveis; estilo, organização ou volume de testes não provam autoria. Capacidades técnicas permanecem ligadas a decisões e arquivos, sem inferir senioridade, emprego ou uso em produção. |
| Figuras e portabilidade | Cinco imagens incorporadas ao relatório principal passaram a usar caminhos relativos. Capturas históricas não foram alteradas para parecerem atuais. |
| Entrega Markdown e PDF | Quatro documentos de consulta: auditoria, complemento, correções e esta revisão; PDFs gerados a partir da edição final dos Markdown. |

A documentação de cada projeto foi lida antes do parecer correspondente. Os pacotes identificam arquivos e trechos; não se afirma leitura integral de todos os logs, licenças de terceiros ou documentos upstream. O inventário automático de 273 documentos é uma contagem de arquivos examinados pelo extrator, e não uma contagem de leituras humanas integrais.

<a id="repositorios"></a>
## Revisão por repositório

| Repositório | IDs | Conclusão e ajustes desta revisão | Registro individual |
| --- | --- | --- | --- |
| arthurjoanes | PER-01 | README PT/EN e banner coerentes. Demos distinguem dados públicos de casos fictícios. Biografia permanece declaração do autor. | [Perfil](_revisao_conformidade_2026-10-13/profile-review.md) |
| evidencedesk | EVD-01 a 07 | Dois defeitos residuais corrigidos. Exportação e recuperação têm limites explícitos; legendas distinguem crop, HTML offline e prova histórica. | [Código](_revisao_conformidade_2026-10-13/evidencedesk-code-review.md), [visuais](_revisao_conformidade_2026-10-13/evidencedesk-visual-review.md) |
| gestao-recebiveis | REC-01 a 08 | Nenhum novo defeito de execução confirmado nos caminhos lidos. Arquitetura passou a mostrar leituras v2; removida sobreposição no diagrama; restore e capturas foram datados. | [Recebíveis](_revisao_conformidade_2026-10-13/gestao-recebiveis-root-review.md) |
| loja-assistente | LOJ-01 a 08 | Corrigida troca de contexto com intenção incerta. Contrato, recuperação e estado entre conversas alinhados; README aponta para a imagem que realmente contém o cálculo. | [Código](_revisao_conformidade_2026-10-13/loja-code-review.md), [visuais](_revisao_conformidade_2026-10-13/loja-assistente-root-review.md) |
| varejo-data-pipeline | VDP-01 a 04 | Sem novo defeito concreto nos caminhos revisitados. Documentados preparo das ferramentas de captura e limites das telas históricas, tabelas móveis e cenários diferentes. | [Varejo](_revisao_conformidade_2026-10-13/varejo-data-pipeline-review.md) |
| api-sentinel | API-01 a 05 | Sem nova regressão concreta. Documentação explica paginação, limite por página e gráfico do recorte carregado; HTML antigo identificado com suas limitações. | [API Sentinel](_revisao_conformidade_2026-10-13/api-sentinel-review.md) |
| containerops | OPS-01 a 05 | Instruções de runbook distinguidas por contexto de sessão e cenário histórico. Corrigida sobreposição em dois Mermaid. Capturas apresentam resultados salvos, não saúde atual. | [ContainerOps](_revisao_conformidade_2026-10-13/containerops-review.md) |
| cycleops | CYC-01 a 05 | Sem novo defeito de código confirmado. Documentação corrigida sobre retenção como limiar, cobertura dos hashes, warnings e semântica dos botões Lista/Mapa. | [CycleOps](_revisao_conformidade_2026-10-13/cycleops-review.md) |
| quake-exposure | QEX-01 a 04 | Sem novo defeito de código confirmado. Grade validada célula por célula, legenda PT/EN alinhada às imagens e limites de operação preservados. | [QuakeExposure](_revisao_conformidade_2026-10-13/quake-exposure-review.md) |
| delta | Sem achados anteriores | Os dois exemplos do diff compilam; os anteriores falham. Nenhuma alteração de runtime ou autoria sobre o restante do Delta Lake é inferida. | [Delta](_revisao_conformidade_2026-10-13/delta-review.md) |
| fastapi-pagination | Sem achados anteriores | Executado o bloco real de documentação: total antes do slice, páginas vazias e `include_total=False` coerentes. | [Paginação](_revisao_conformidade_2026-10-13/fastapi-pagination-review.md) |

O checkout de QuakeExposure usado é `_auditoria_2026-10-13/sources/quake-exposure`. A pasta `QuakeExposure` da raiz contém outro material e não substitui esse clone. Os dois forks ficam em `_contributions`.

<a id="defeitos"></a>
## Defeitos encontrados novamente

### EVD-02 — segunda exportação após uma exportação concluída

Quando uma exportação A já tinha terminado e a resposta de uma nova exportação B se perdia, o estado terminal de A podia fazer a recuperação gerar uma terceira chave. A referência terminal agora é limpa ao iniciar B, conservando a chave dessa tentativa na recuperação. Os testes novos verificam a sequência e a reutilização correta da intenção.

### EVD-05 — campo de pedidos relacionados sem ligação completa ao formulário

O campo não recebia todos os atributos e referências necessários para a associação do erro e o foco pelo resumo. Foram ligados `name`, `ref` e `aria-invalid` ao controle. O teste confere que o erro leva ao campo esperado.

Essas correções estão nos componentes de exportação e análise de EvidenceDesk, com quatro novos testes Chromium aprovados. Build, tipos, lint e formato direcionados passaram. O [pacote técnico](_revisao_conformidade_2026-10-13/evidencedesk-code-review.md) contém arquivos, cenários e recibos.

### LOJ-01 — intenção incerta atravessava conversas

Abrir outra conversa ou favoritos limpava o conflito, mas preservava a intenção anterior. Uma pergunta nova podia reutilizar o corpo e a chave antigos; o estado local ainda podia juntar respostas de conversas diferentes. A falha foi reproduzida antes da alteração com APIs sintéticas.

A interface agora mantém a recuperação acessível e impede mudar o contexto enquanto a intenção está incerta. “Nova análise” abandona explicitamente o estado local; não promete cancelar uma operação já admitida no servidor. O reducer separa conversas e cursores, e a mensagem após recuperação com 404 corresponde ao caminho realmente executado. O contrato e a arquitetura documentam a admissão durável da intenção.

Passaram 13 testes no arquivo direcionado: 11 de navegador e dois puros, incluindo cinco novos. Outros dois testes puros de estado também passaram. Build, tipos, lint, formato e links documentais foram conferidos. A [prova anterior e os recibos posteriores](_revisao_conformidade_2026-10-13/loja-code-review.md) delimitam o uso de transporte simulado.

<a id="imagens"></a>
## Cobertura das imagens

O inventário registra 441 arquivos de mídia nos repositórios e 18 PNGs da auditoria: **459 arquivos**, compostos por 294 PNGs, 157 SVGs, seis JPGs e dois vídeos WEBM. Foram inspecionados os pixels das imagens e as renderizações dos SVGs, incluindo recursos de documentação sem referência direta no README. Os vídeos foram examinados em seis quadros de cada um, incluindo início e fim; não se afirma revisão contínua de todos os frames.

Também foram renderizados e examinados **31 diagramas Mermaid**, 12 HTMLs de evidência e seus 18 SVGs inline. São sete HTMLs de Varejo, um de API Sentinel e quatro de ContainerOps; neste último foram vistos 33 painéis. Três URLs de badges remotos, usadas cinco vezes, foram abertas em navegador; seu estado é pontual e não comprova o checkout local. O [inventário](_revisao_conformidade_2026-10-13/visual-inventory.json) continua sendo um registro do extrator: a confirmação de inspeção visual está nos pacotes de revisão, não no campo automático `visual_content_reviewed` desse inventário.

| Escopo | Arquivos de mídia | Mermaid | O que foi examinado |
| --- | ---: | ---: | --- |
| Perfil | 1 | 0 | Banner e correspondência com o README PT/EN. |
| EvidenceDesk | 37 | 6 | Workspace, citações, revisão, conflito, capturas do workbench HTML offline e identidade. |
| Recebíveis | 46 | 3 | Carteira, títulos, importação, lembretes, restore, relatório e marca. |
| Loja Assistente | 172 | 4 | 149 PNGs e 23 SVGs; antes/depois, foco, mobile, cálculo, recusa e propostas. |
| Varejo | 35 | 3 | Publicação, bloqueio, comparação, indicadores, recuperação e HTMLs. |
| API Sentinel | 49 | 3 | Incidentes, runbooks, probe, vazio, gráfico, identidade e HTML histórico. |
| ContainerOps | 27 | 3 | Aplicação, pacote, backup, rollback, mobilidade e painéis salvos. |
| CycleOps | 39 | 7 | 14 PNGs, 23 SVGs, dois vídeos amostrados; mapa, lista, ajuda e replay. |
| QuakeExposure | 35 | 2 | Nove PNGs, seis JPGs e 20 SVGs; carteira, mapa, comparação e operação. |
| Imagens da auditoria | 18 | 0 | Capturas adicionais desktop/mobile e recortes de operação/comparação. |
| Forks | 0 no diff autoral | 0 | Nenhuma imagem alterada pelas duas contribuições. Visuais upstream fora da autoria avaliada. |

O [registro das 18 capturas da auditoria](_revisao_conformidade_2026-10-13/audit-report-images-review.md) inclui a observação individual, além dos registros por repositório. Capturas longas foram vistas por segmentos ou no original quando a prancha não permitia ler números e legendas. Arquivos binários e manifests históricos não foram reescritos para simular uma evidência nova.

<a id="matriz-visual"></a>
## Matriz visual por projeto

As conclusões abaixo descrevem pixels e estruturas documentais efetivamente examinados. Legibilidade visual não equivale a uma medição nova de contraste WCAG. Imagens não validam teclado, leitor de tela, rede, autorização ou persistência. Esses comportamentos dependem de código e testes separados.

### EvidenceDesk

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Tons de azul/petróleo e neutros nas telas; estados e fontes têm rótulos textuais. Capturas históricas e protótipos offline identificados. Sem nova medição numérica de contraste. |
| Tipografia | Títulos, campos e trechos citados legíveis no original; JSON literal exige leitura ampliada e não é explicação humana do caso. A documentação deixou de prometer as mesmas fontes no HTML offline. |
| Layout, espaço e proporção | Workspace de 652 × 339 é um recorte de divergências. Mobile de 390 px mostra a fonte citada, sem equivaler a todas as etapas da página. |
| Ícones e coerência | Quinze SVGs de marca, navegação e stack renderizados. Símbolos apoiam rótulos; assets conceituais não são prova de execução. |
| Gráficos e propósito | A função principal é relacionar alegações a fontes. Cartões de divergência e citações sustentam esse propósito; não se inventou gráfico de desempenho para preencher a análise. |
| Estados | Lista, fontes, revisão aprovada, conflito do editor e recurso indisponível inspecionados. Controles de importar/exportar aparecem nas capturas do workbench offline; a exportação da aplicação foi exercitada separadamente nos testes sintéticos. Cinco imagens antes acessíveis só pelo manifesto ganharam contexto. Prints não provam exclusão física ou julgamento humano definitivo. |

### Recebíveis

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Azul da versão mais recente e verde das anteriores foram separados por data. Totais e status têm texto; sem nova medição de contraste. |
| Tipografia | Valores monetários, datas e títulos de tabela são legíveis no original. O singular histórico incorreto permanece no PNG e está explicado como anterior a REC-06. |
| Layout, espaço e proporção | Desktop permite conferir indicadores e tabela. O crop móvel de 390 px mostra só parte dos indicadores; não é uma página inteira. Removida colisão de rótulos no diagrama de componentes. |
| Ícones e coerência | Vinte SVGs renderizados; variantes reversas vistas em fundo escuro. Marca, navegação e stack não foram confundidas com telas. |
| Gráficos e propósito | Indicadores e tabelas mostram carteira, títulos e saldo. Não há série temporal nessas capturas; recebimento no período e saldo aberto têm recortes diferentes. |
| Estados | Importação antes do envio, fila de lembretes, baixa, parcela, conflito e restore conferidos. Dois prints ainda carregando foram identificados; não sustentam resultado final. |

### Loja Assistente

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Azul/petróleo, neutros e ocre de foco na rodada de outubro; verde nas capturas anteriores. Paleta e propostas têm função documental explícita. |
| Tipografia | Espécimes IBM Plex/Source Sans explicam escolhas; não comprovam carregamento de fonte no runtime. Números, unidades e fórmula são legíveis nas capturas ampliadas. |
| Layout, espaço e proporção | Cinco larguras Chromium e evidência Firefox de 390 px na rodada histórica. Depois da correção, filtros de 320/390 px têm uma coluna e a escolha pendente permanece fora do editor recolhido. São capturas existentes, não uma nova execução dessas combinações. |
| Ícones e coerência | Vinte e três SVGs; marcas em 16/24/32 px e fundos claro/escuro. Rótulos das ações distinguem executar e abrir registro. |
| Gráficos e propósito | Série diária tem base zero, valores, período e cálculo com sete linhas. README passou a ligar o cálculo à captura específica; a imagem de indicadores sozinha não o mostra. |
| Estados | Início, resultado, ausência, recusa, favorito, pendência e recuperação visual inspecionados. Propostas A/B estão rotuladas como simulações. HTML escapado no favorito é dado de teste, já explicado na documentação. |

### Varejo Data Pipeline

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Petróleo e neutros atuais; roxo/azul históricos identificados. Estados de publicação e falha usam texto e cor. |
| Tipografia | Receita, moeda, unidades e hierarquia legíveis no original. Capturas longas exigem ampliar; fidelidade tipográfica no GitHub não foi medida. |
| Layout, espaço e proporção | Desktop e coluna móvel mantêm grupos. Tabelas móveis usam rolagem; a captura estreita não mostra todas as colunas. |
| Ícones e coerência | Quatorze SVGs locais e os SVGs inline dos HTMLs vistos. Marca, badges e stack correspondem aos rótulos. |
| Gráficos e propósito | Receita, barras e categorias confrontadas com os indicadores. Um único dia é apresentado como ponto, sem inferir tendência; cenários com receitas de R$ 64, R$ 74, R$ 77 e R$ 104 não foram somados como uma execução. |
| Estados | Bloqueio, última publicação válida, correção, falha, recuperação e baseline ausente ou incomparável. Os HTMLs mostram estados de evidência, sem nova execução Spark. |

### API Sentinel

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Azul/petróleo atual, estados vermelho/verde/neutro. Verde/laranja antigos identificados como históricos; sem novo laudo WCAG. |
| Tipografia | Títulos, números e horários legíveis no original; rótulos menores exigem ampliação. |
| Layout, espaço e proporção | Fila desktop e coluna móvel preservam grupos. Recortes de topo/runbook não equivalem a uma jornada completa. |
| Ícones e coerência | Vinte e quatro SVGs de marca, seta, stack e badges vistos; ações acompanhadas de rótulos. |
| Gráficos e propósito | Contagem de um ativo/dois finalizados e três inícios no dia conferida. O histograma representa a página carregada; o limite não é um teto global de incidentes. |
| Estados | Ativo, recuperado, administrativo, firing atrasado, vazio e probe habilitado/desativado. HTML antigo tem assets CSS ausentes e está identificado como referência histórica. |

### ContainerOps

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Cabeçalho azul escuro, superfícies brancas/cinza, verde de aprovação e âmbar de ausência/antiguidade. Resultados têm texto; sem nova medição numérica de contraste. |
| Tipografia | Source Sans, títulos hierárquicos e comandos monoespaçados. Capturas de 354/390 px quebram IDs longos em linha; textos densos exigem o original. |
| Layout, espaço e proporção | Seções, linhas e detalhes separam resultado de prova. Catálogo de 12 cópias exige rolagem; sem corte lateral observado em 1440 px. Dois Mermaid tiveram sobreposição de rótulos eliminada com ajuste mínimo das arestas e nova inspeção em 1600 px. A renderização do GitHub não foi comparada. |
| Ícones e coerência | Dezoito SVGs externos e quatro marcas inline renderizados nos painéis. Controles de detalhe têm texto; marca e stack não são prova operacional. |
| Gráficos e propósito | Os 33 painéis usam tabelas/cartões, sem gráfico quantitativo. Cache histórico de 10,5/0,9/0,9/11,3 s não é SLA. Guia explica CPU de 0,2/0,8 nas provas antigas e 0,25/0,75 no exemplo regenerado. |
| Estados | Aprovado, ausente, parcial, antigo, íntegro, desconhecido, sem recibo e restore verificado. Sessão atual, demo padrão e procedimento histórico foram distinguidos nos runbooks. |

### CycleOps

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Cores do mapa ligadas à legenda e aos estados da lista. Não se usa só o nome do arquivo para inferir sucesso de integridade. |
| Tipografia | Estações, horários e controles legíveis nos originais; legendas menores precisam de ampliação. |
| Layout, espaço e proporção | Mapa no desktop, lista móvel e estado de prioridades vazio vistos. Espaço em branco do caso vazio corresponde à ausência de itens naquele instante. |
| Ícones e coerência | Vinte e três SVGs renderizados; estações e ações têm contexto textual. Lista/Mapa são botões agrupados, conforme o código, e não tabs declaradas por conveniência editorial. |
| Gráficos e propósito | Mapa, legenda, idade dos dados e incidentes apoiam a priorização operacional. Zero incidentes no instante capturado não prova zero no replay inteiro. |
| Estados | Replay, seleção, vazio e ajuda; dois vídeos com seis quadros cada, inclusive abertura branca. Captura chamada hash-test não mostra por si uma rejeição de hash. |

### QuakeExposure

| Dimensão | Evidência e conclusão |
| --- | --- |
| Paleta e contraste | Intensidades e classes ligadas a legendas; sem amostra aparece separadamente. Moedas não são agregadas por cor ou por soma indevida. |
| Tipografia | MMI, totais e valores legíveis nos originais. Capturas móveis longas foram divididas em segmentos para leitura. |
| Layout, espaço e proporção | Visão geral, mapa, tabela e comparação conferidos; tabelas móveis têm rolagem local. Colunas fora do enquadramento não foram declaradas visíveis. |
| Ícones e coerência | Vinte SVGs de identidade/stack/apoio vistos. Legendas PT/EN corrigidas para o conteúdo real de ui-operations e ui-exploration. |
| Gráficos e propósito | Composição, histograma MMI, mapa e delta antes/depois usam denominadores identificáveis. Imagens de 4.999/45 e 5.000/46 pertencem a snapshots distintos. |
| Estados | Replay de carteira fictícia, recorte de evento e operação sem CDC executado. A tela declara tempo não medido; isso foi preservado como limite. |

<a id="conclusoes-visuais"></a>
## Conclusões sustentadas pelas imagens

| Projeto | Conferência concreta | Limite da conclusão |
| --- | --- | --- |
| EvidenceDesk | Workspace mostra duas divergências e a fonte móvel contém o JSON citado, incluindo PED009000. | Demonstra associação visual à fonte; não prova causa de negócio, correção da inferência ou exclusão física. |
| Recebíveis | Saldo aberto 516.653,77 = vencido 244.250,17 + a vencer 272.403,60. No restore final: original 125 − recebido 75 = saldo 50. | Recebido 118.316,93 usa período próprio. Prints “Carregando…” não fazem parte da prova final do relatório. |
| Loja Assistente | Centro, 10–16/08: 1.557,80 + 0 + 0 + 1.831,00 + 1.543,70 + 1.747,90 + 4.130,55 = 10.810,95; 56 pedidos, 227 unidades e ticket 193,05. | Dois dias sem pedidos têm ticket indisponível. Organização B e outros períodos não são números concorrentes do mesmo recorte. |
| Varejo | 1.141.858,51 / 10.008 arredonda para ticket 114,09; 89.903 unidades e categorias coerentes com a captura. | Os cenários de publicação, recuperação e protótipo têm massas diferentes e não provam uma execução Spark nesta revisão. |
| API Sentinel | Um incidente ativo e dois finalizados correspondem aos três listados e aos três inícios do histograma. | Prévia sintética com probe desativado; histograma limitado ao recorte. |
| ContainerOps | Resultados salvos, timestamps e 221,7 s são coerentes com a página de verificação da aplicação. | Snapshot somente leitura; não atesta saúde atual do Docker ou da aplicação. |
| CycleOps | Replay de Oslo em 10/10, 5x, prioridades vazias e zero incidentes no instante mostrado. | A captura chamada hash-test apresenta replay normal; integridade exige os testes e recibos de código. |
| QuakeExposure | 46 + 1.926 + 3.028 = 5.000; 1.024 + 779 + 123 + 46 = 1.972. Comparação 45→46 gera USD 16.131,63 de acréscimo e BRL zero. | Carteira fictícia; mapa com recorte próprio; CDC e tempo não medidos são explicitamente declarados. |

As imagens mostram o propósito dos projetos quando lidas com suas legendas: rastrear evidências, reconciliar recebíveis, consultar vendas, publicar dados validados, acompanhar incidentes, registrar operações, priorizar estações e comparar exposição sísmica. O ajuste principal foi tornar explícito o alcance de cada imagem. Não houve necessidade de produzir capturas fictícias ou redesenhar as páginas para sustentar conclusões que o código não demonstrava.

<a id="validacao"></a>
## Verificações e limites

| Escopo | Executado nesta revisão | Não inferir |
| --- | --- | --- |
| EvidenceDesk | Quatro novos testes Chromium; build/tipos e lint/formato direcionados. Checker: 45 documentos, 829 links, zero problemas locais. | Nova integração real de backend ou recuperação automática após recarregar a página. |
| Loja Assistente | Falha anterior reproduzida; 13 testes direcionados e dois puros de estado; build/tipos/lint/formato. Checker: 41 documentos, 1.040 links, zero problemas locais. | Provedor pago, PostgreSQL real ou nova execução Firefox. |
| CycleOps | 33 testes web unitários e 30 Python direcionados. | Nova stack completa ou entrega HTTP real de todos os casos de gzip/hash. |
| QuakeExposure | 61 testes Python de grade/blobs/HTTP e 16 de API/refresh do frontend. | Nova execução PostGIS/CDC ou redes externas. |
| Delta | Dois exemplos anteriores falham; dois atuais compilam. | Execução Spark ou suíte upstream completa. |
| fastapi-pagination | Bloco real da documentação executado para páginas 2/3/4 e `include_total=False`. | Todos os adaptadores de banco e integrações upstream. |
| ContainerOps | Helper PowerShell extraído do Markdown: parser aprovado; stub confirma que sessão aborta antes de Docker e contexto padrão usa o projeto esperado. Leitura de código/diff, 33 painéis e diagramas. | Acesso ao daemon, nova stack, restore ou suíte integral. |
| Recebíveis, Varejo e API Sentinel | Leitura de documentação, código/diff e recibos relacionados; inspeção visual e renderização de diagramas/HTMLs. | Suítes anteriores repetidas ou todos os caminhos de runtime certificados. |

As quantidades de testes de diferentes rodadas se sobrepõem. Não devem ser somadas como casos únicos. Links externos excluídos pelos checkers não foram declarados válidos: 83 em EvidenceDesk e 62 em Loja Assistente.

Permanece registrada a ressalva de desenvolvimento de Recebíveis sobre `braces` e a cadeia de lint: cinco nós afetados correspondem a um advisory, e não a cinco falhas independentes. O registro anterior não encontrou versão corrigida aplicável; essa consulta não foi repetida agora. Não se declarou produção vulnerável com base nessa cadeia de desenvolvimento nem se forçou uma atualização incompatível. Consulte o [recibo de dependências](_correcoes_2026-10-13/dependency-advisory.json).

Não houve novo teste com leitor de tela, pessoas usuárias, dispositivos físicos, carga de produção ou medição integral de contraste. Também não houve revisão integral do código e documentação upstream dos forks. Os pacotes individuais preservam esses limites junto de cada evidência.

Os servidores exclusivos criados para os novos testes de EvidenceDesk e Loja Assistente foram encerrados. Nenhum banco real, volume ou container foi criado nesta revisão. A limpeza anteriormente rejeitada pela aprovação automática em `_correcoes_2026-10-13/rec-clean-install/node_modules` não foi repetida; a pasta foi preservada.

A [verificação final](_revisao_conformidade_2026-10-13/final-verification.json) confirmou cobertura dos 459 arquivos, hashes de mídia preservados, os 11 HEADs intactos, `git diff --check` aprovado e os 47 IDs únicos com âncoras. Os links locais dos quatro relatórios foram conferidos; URLs externas não consultadas e links absolutos Windows ficaram registrados como limites de validação e portabilidade.

Os registros legíveis e estruturados estão em `_revisao_conformidade_2026-10-13`, incluindo inventário, pacotes por repositório, hashes e logs dos testes. Eles permitem distinguir material histórico, inspeção visual nova e execução nova sem depender de uma afirmação genérica de que “tudo passou”.
