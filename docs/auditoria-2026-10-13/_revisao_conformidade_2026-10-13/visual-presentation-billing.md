# Apresentação de Recebíveis, Loja e perfil

Retirados os blocos de paleta do README e do guia de UI/UX da Loja. O SVG histórico continua no repositório, sem referências que o exibam nesses documentos. A verificação de contraste permanece como documentação técnica. Nenhuma cor ou regra CSS mudou.

As capturas existentes foram abertas em detalhe com `view_image`. Recebíveis mantém o Resumo completo com saldo aberto, vencidos, em dia, recebimentos e tabela; a legenda agora explicita 12/10/2026 e a data comercial de 17/08/2026. Loja mantém pergunta, recorte, receita, pedidos, unidades, ticket e gráfico diário; a vista de Cálculo aberto continua como link complementar. Os pixels e hashes das três imagens estão idênticos a HEAD. O JSON registra conteúdo, contas, fontes e limites.

O perfil PT/EN não contém bloco de paleta ou screenshot de demo a substituir. Seu banner, layout e arquivos ficaram intactos, incluindo o pacote de auditoria.

Arquivos alterados: `loja-assistente/README.md`, `loja-assistente/docs/uiux-20261012.md` e `gestao-recebiveis/README.md`. Os checkers offline de links e `git diff --check` passaram nos três repositórios. Nenhum teste funcional ou servidor foi executado nesta etapa; nenhum commit ou push.

## Publicação

Root publicou o README de Recebíveis em `main` no commit `bd5eef405232e7bc8f49c8f642926e44af7b4b71`, junto do ajuste adicional do teste. Loja foi publicada em `main` no commit `e20759c1d2f8f6cabac4036071d47759e96d585d`; o delta contém somente README e guia de UI/UX. Perfil permaneceu sem alteração por esta tarefa. Os recibos de CI são separados e identificam o commit de cada execução.
