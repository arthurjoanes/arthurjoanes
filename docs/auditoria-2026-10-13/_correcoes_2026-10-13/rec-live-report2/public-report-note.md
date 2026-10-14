# Recibo público derivado do relatório Playwright

O [recibo JSON](public-report.json) foi extraído apenas de `report.json`, índice embutido no HTML original. Ele preserva nomes de testes, resultados, contagens, durações e datas dessa execução, incluindo falhas registradas. Não representa uma nova execução nem substitui o relatório interativo completo.

- HTML original, preservado somente na entrega local: `_correcoes_2026-10-13/rec-live-report2/index.html`.
- SHA-256 do HTML original: `902fd0f2959eb1b9eaf8de90df72ba368e79e9a6b1a7b4ca7d43d3f9bec87db0`.
- SHA-256 de report.json antes da remoção dos anexos: `06366bc2839a6248eeba6a708148cd3cc5339218c08e230cad22171ec64e90a7`.
- Contagens originais: `{"expected": 14, "flaky": 0, "ok": false, "skipped": 0, "total": 15, "unexpected": 1}`.
- Anexos omitidos: accessibility.json, error-context, trace (3 referências).

Todos os campos `attachments` foram removidos da cópia JSON. Os traces ZIP, contextos de erro, corpos dos anexos e estados de navegador não foram exportados. O HTML original não está no pacote público. O hash da cópia transformada consta no plano de exportação; ela não é idêntica byte a byte ao original.
