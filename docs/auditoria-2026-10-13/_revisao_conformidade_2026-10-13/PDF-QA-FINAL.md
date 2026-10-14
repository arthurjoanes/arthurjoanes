# QA final dos quatro PDFs

Os quatro PDFs foram gerados a partir dos Markdown finais, sem alterar seu conteúdo. O marker da skill foi executado uma única vez antes da primeira autoria. O PDF anterior da auditoria foi preservado e seu hash confere com o original.

| Relatório | Páginas | Páginas abertas individualmente |
|---|---:|---|
| AUDITORIA_COMPLETA_PORTFOLIO | 125 | 1, 2, 4, 8, 55, 59, 65, 67, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 123 |
| COMPLEMENTO_AUDITORIA_PORTFOLIO | 35 | 1, 3, 4, 8, 9, 33 |
| CORRECOES_PORTFOLIO_2026-10-13 | 23 | 1, 2, 6, 14, 22 |
| REVISAO_CONFORMIDADE_PORTFOLIO | 12 | 1, 2, 3, 4, 6, 7, 10, 12 |

Total: **195 páginas**, todas renderizadas pelo Poppler a 100 dpi e vistas em 14 pranchas. **38 páginas** foram abertas individualmente; não se afirma inspeção individual ampliada das outras 157.

As verificações automáticas passaram nos quatro arquivos: nenhum corpo de página vazio, caractere fora da MediaBox, caractere substituto ou título ausente na página registrada. As imagens renderizadas não são inteiramente brancas. As fontes e PDFs ainda correspondem aos hashes dos recibos.

A revisão em pixels cobriu capas, sumários existentes, tabelas largas e continuações, código, todas as cinco figuras e tabelas da revisão. Uma linha de tabela dividida foi corrigida no gerador e reexaminada. Não restou corte ou sobreposição confirmado na cobertura descrita.

Os pesos das colunas da revisão foram ajustados para dar espaço às conclusões. A revisão passou de 13 para 12 páginas. A auditoria final tem 125 páginas; o complemento, 35; as correções, 23. A contagem de 31 diagramas está incorporada nas fontes finais.

Os dez testes do parser/plano de layout passaram. Os recibos de build preservam o hash da versão do gerador que produziu cada PDF; correções e revisão não foram reescritos por mudanças posteriores restritas a tabelas largas.

O registro estruturado com SHA-256, pranchas, PNGs individuais, comandos e limites está em [pdf/final-qa.json](pdf/final-qa.json). Os recibos de preparação continuam históricos e não representam o estado final.

Limites: contatos não substituem leitura ampliada de cada linha; figuras são evidências históricas; código longo pode ter quebras visuais e deve ser copiado do Markdown. Nenhum conteúdo dos relatórios foi editado pelo gerador.
