# Auditoria de portfólio — 13/10/2026

Este pacote reúne o diagnóstico, as correções e a revisão dos projetos do perfil arthurjoanes. São 47 achados rastreados, com evidências, resultados de testes e limites de cada etapa.

## Ordem de leitura

1. [Publicação e estado de CI](PUBLICACAO_PORTFOLIO_2026-10-13.md): commits publicados e resultados observados.
2. [Prompt para revisão pelo Claude](PROMPT_REVISAO_CLAUDE.md): objetivo, fontes e critérios para uma revisão independente.
3. [Auditoria completa](AUDITORIA_COMPLETA_PORTFOLIO.md) e [complemento](COMPLEMENTO_AUDITORIA_PORTFOLIO.md): diagnóstico original e plano dos achados.
4. [Correções](CORRECOES_PORTFOLIO_2026-10-13.md) e [revisão de conformidade](REVISAO_CONFORMIDADE_PORTFOLIO.md): mudanças, validação e questões encontradas na segunda leitura.

Os recibos registram etapas anteriores à publicação. Frases como “sem commit ou push”, HEADs antigos e falhas iniciais descrevem aquele momento; o [manifesto de publicação](_revisao_conformidade_2026-10-13/publication-manifest.json) e o registro de publicação identificam os commits posteriores. Capturas e contagens datadas não comprovam saúde atual.

Os links de produto reescritos nos quatro relatórios usam o primeiro commit registrado de publicação de cada repositório; quando o manifesto não possui esse histórico, usam o SHA publicado disponível. Isso conserva a fonte anterior aos ajustes finais de apresentação e CI. O registro PUBLICACAO, o prompt e os demais recibos usam as versões finais. Cada adaptação de link identifica sua política e SHA em EXPORTACAO.json. URLs remotas que já eram explícitas no original permanecem como estavam.

## PDFs e navegação

As versões PDF preservam a edição local validada: [auditoria](AUDITORIA_COMPLETA_PORTFOLIO.pdf), [complemento](COMPLEMENTO_AUDITORIA_PORTFOLIO.pdf), [correções](CORRECOES_PORTFOLIO_2026-10-13.pdf) e [revisão](REVISAO_CONFORMIDADE_PORTFOLIO.pdf). Alguns links de arquivo nos PDFs ainda apontam ao workspace Windows original. Use os Markdown para navegar nas fontes e nos recibos; seus links de produto apontam aos SHAs publicados. Caminhos literais em código e logs foram preservados como contexto histórico.

O repositório do perfil define `docs/auditoria-2026-10-13/** -text` em `.gitattributes`. Essa regra impede a conversão automática de quebras de linha pelo Git nos arquivos do pacote, preservando os bytes identificados pelos hashes.

## Extrato público de diagnóstico

Um HTML Playwright de Recebíveis foi substituído por um [extrato JSON](_correcoes_2026-10-13/rec-live-report2/public-report.json). A [nota de origem](_correcoes_2026-10-13/rec-live-report2/public-report-note.md) registra os hashes, as contagens e os anexos omitidos. O extrato mantém resultados, inclusive falhas; não inclui traces, contextos de erro ou estados do navegador. Os originais locais não foram alterados. O [manifesto da exportação](EXPORTACAO.json) lista os arquivos, hashes, adaptações de links e transformações do pacote.
