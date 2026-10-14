# Correções — containerops

Alterações locais; nenhum commit, push ou PR foi criado.

## OPS-01 — P2

Quota de CPU usa Decimal, preserva fração exata e valida tipo/intervalo; tabela identifica CPUs.

Arquivos: `scripts/report.py`, `scripts/test_report.py`, `docs/examples/report.html`.

Validação: Casos 0,25/0,5/0,75, uma nanocpu, inteiros e entradas inválidas; relatório regenerado; tabela conferida no browser.

## OPS-02 — P1

Bundle mantém links entre guias copiados e converte dependências públicas para URLs do commit, com raw para imagens. Avisa quando há alterações locais e recusa referências não versionadas/externas ao repo.

Arquivos: `scripts/report.py`, `scripts/test_report.py`, `docs/report-guide.md`.

Validação: 260 referências dos guias reais verificadas; testes de links de código/imagem/referência e recusa de .env não versionado; preservação dos fontes e bundles existentes.

Limites: Links externos exigem rede. Em checkout modificado, referências mostram o commit e o aviso declara que não são permalinks das mudanças locais.

## OPS-03 — P2

Catálogo oferece blocos PowerShell e POSIX independentes; POSIX preserva ambiente chamador; não acrescenta confiança automaticamente.

Arquivos: `scripts/report.py`, `scripts/test_report.py`, `docs/report-guide.md`, `docs/examples/report.html`.

Validação: Texto gerado executado em bash e PowerShell com funções inofensivas, conferindo sessão/argumentos; copiar por teclado no browser com fallback manual em file://.

Limites: Nenhum comando de restore real foi executado; clipboard negado no contexto file:// usou a seleção manual prevista.

## OPS-04 — P2

Removidas somente declarações anuladas no mesmo bloco; relatório regenerado com as mesmas evidências históricas.

Arquivos: `scripts/report.css`, `docs/examples/report.html`.

Validação: Estilos computados de margens/padding/bordas idênticos antes/depois: 320/768/1440 × screen/print × details aberto/fechado (12 combinações).

## OPS-05 — P1

Pacote portátil sem registro íntegro conserva imported/protected=true; registro posterior preserva esses flags. Recuperação usa backups protect; legado sem manifesto mantém compatibilidade.

Arquivos: `scripts/backup_catalog.py`, `tests/test_backup_package.py`, `tests/test_backup_catalog.py`, `docs/security.md`, `docs/runbooks.md`.

Validação: Falhas antes/depois da publicação e durante escrita do catálogo; reabertura em novo processo; restore sem confiança bloqueado antes do preflight; retenção mantém órfão mesmo com cópia posterior; recuperação repetida preserva hashes/flags. Linux: 48 testes de backup passaram.

Limites: Provas usaram dumps sintéticos e preflight/evidência mockados; nenhum pg_restore, exclusão real de backups ou falha injetada em runtime existente.
