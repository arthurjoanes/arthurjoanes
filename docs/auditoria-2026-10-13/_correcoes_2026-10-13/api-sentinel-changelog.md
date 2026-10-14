# Correções — api-sentinel

Alterações locais; nenhum commit, push ou PR foi criado.

## API-01 — P1

Migração transacional para AUTOINCREMENT preserva IDs, eventos e índices, verifica referências e impede reutilização após retenção/reabertura.

Arquivos: `alert_receiver/storage.py`, `tests/unit/test_receiver_pagination_ids.py`, `docs/incident-console.md`.

Validação: Retenção apagando maior ID ou todos os IDs; migração de schema legado com eventos; reinicialização; foreign_key_check; URL expirada 404.

Limites: IDs apagados antes da atualização não têm high-water mark recuperável; a fronteira de garantia foi explicitada no guia. Nenhuma base real foi migrada.

## API-02 — P1

Fila e API recebem cursor validado por filtro, ordenação por estado/atividade/ID, próximas ocorrências e retorno ao detalhe/runbook com cursor preservado.

Arquivos: `alert_receiver/storage.py`, `alert_receiver/contracts.py`, `alert_receiver/app.py`, `alert_receiver/ui.py`, `alert_receiver/styles.css`, `tests/unit/test_receiver_pagination_ids.py`, `tests/unit/test_receiver_errors.py`, `docs/incident-console.md`.

Validação: 205 registros percorridos sem duplicação em snapshot estável; 205 ativos no navegador em 100/100/5, teclado e retorno do detalhe, 320/768/1440; cursor inválido/filtro incompatível 422.

Limites: A navegação entre páginas não congela o banco: entregas concorrentes podem mudar posições, conforme documentado.

## API-03 — P2

Exportador copia assets públicos e guia explica a raiz HTTP da prévia.

Arquivos: `scripts/render_ui_preview.py`, `tests/unit/test_receiver_ui.py`, `docs/screenshots.md`.

Validação: Exportação para pasta nova; igualdade dos bytes dos assets; 4 recursos HTTP200, fonte e marca carregadas no Chromium.

## API-04 — P2

Roteiro Linux inclui consulta autenticada com Python padrão, lê token UTF-8 e imprime somente os três resultados.

Arquivos: `docs/demo.md`.

Validação: Bloco real validado com bash -n; corpo Python executado com transporte sintético: 12500/2/6250; token ausente da saída.

Limites: A consulta do roteiro não foi executada contra a stack comercial completa; o transporte foi simulado.

## API-05 — P2

Teste lê UTF-8 explicitamente e aplica a asserção 0600 somente em POSIX, preservando a verificação de leitores Linux/root.

Arquivos: `tests/unit/test_data_private_file.py`.

Validação: Suite Windows e suite Linux/root no Docker aprovadas; sem remover testes de UID/permissão.
