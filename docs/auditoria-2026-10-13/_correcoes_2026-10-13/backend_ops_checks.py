import contextlib
import io
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path
from unittest.mock import patch
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / '_correcoes_2026-10-13'
OPS = ROOT / 'containerops'
sys.path.insert(0, str(OPS / 'scripts'))
import report

receipt = {}
bundle_root = OUT / 'ops-guides'
urls = report.guide_urls(OPS, bundle_root / 'report.html', True)
bundle = (bundle_root / urls['readme_url']).parent
checked = 0
for source in bundle.rglob('*.md'):
    document = source.read_text(encoding='utf-8')
    for target in re.findall(r'!?\[[^\]\n]*\]\(([^\s)]+)', document):
        parsed = urlsplit(target)
        if not parsed.scheme and parsed.path:
            assert (source.parent / unquote(parsed.path)).is_file(), (source, target)
        checked += 1
receipt['guide_links'] = {'checked': checked, 'bundle': str(bundle), 'urls': urls}

# Re-render the curated evidence without modifying the recorded evidence/receipts.
with tempfile.TemporaryDirectory(prefix='ops-render-fixes-') as temporary:
    temporary = Path(temporary)
    shutil.copytree(OPS / 'docs/evidence/containerops-evolution-20261012/evidence',
                    temporary / 'docs/evidence')
    rendered = report.generate(temporary, temporary / 'runtime')
    content = rendered.read_text(encoding='utf-8')
    content = content.replace('href="evidence/', 'href="../evidence/containerops-evolution-20261012/evidence/')
    content = content.replace('href="../README.md"', 'href="../../README.md"')
    for name in ('runbooks.md', 'verification.md'):
        content = content.replace(f'href="{name}"', f'href="../{name}"')
    (OPS / 'docs/examples/report.html').write_text(content, encoding='utf-8', newline='\n')
    receipt['report'] = {'source': 'docs/evidence/containerops-evolution-20261012/evidence',
                         'output': 'docs/examples/report.html', 'new_operations_executed': False}

# Execute the actual POSIX/PowerShell copied text with harmless stand-in functions.
from html.parser import HTMLParser
class Commands(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.active=False; self.items=[]; self.feed(html)
    def handle_starttag(self, tag, attrs):
        if tag == 'pre': self.active=True; self.items.append('')
    def handle_endtag(self, tag):
        if tag == 'pre': self.active=False
    def handle_data(self, value):
        if self.active: self.items[-1] += value
shell_results = []
for namespace in ('default', 'backup-lab'):
    commands = Commands(report.catalog_commands(namespace, 'restore-test --backup synthetic-id', 'proof', 'Proof')).items
    bash = 'python3() { printf "SESSION=%s\\n" "${CONTAINEROPS_SESSION-unset}"; printf "ARG=%s\\n" "$@"; }; export CONTAINEROPS_SESSION=outer; '\
        + commands[1] + '; printf "AFTER=%s\\n" "$CONTAINEROPS_SESSION"'
    result = subprocess.run(['C:/Program Files/Git/bin/bash.exe', '-c', bash], check=True, capture_output=True, text=True)
    assert 'SESSION=' + ('unset' if namespace == 'default' else namespace) in result.stdout
    assert 'ARG=synthetic-id' in result.stdout and 'AFTER=outer' in result.stdout
    powershell = 'function python { Write-Output "SESSION=$env:CONTAINEROPS_SESSION"; $args | ForEach-Object { "ARG=$_" } }; '\
        + commands[0]
    ps = subprocess.run(['powershell', '-NoProfile', '-Command', powershell], check=True, capture_output=True, text=True)
    assert 'ARG=synthetic-id' in ps.stdout
    assert 'SESSION=' + ('' if namespace == 'default' else namespace) in ps.stdout
    shell_results.append({'namespace':namespace,'bash':result.stdout,'powershell':ps.stdout})
receipt['shell_proofs'] = shell_results

# Run the Python body copied from the Linux guide with synthetic transport only.
document = (ROOT / 'api-sentinel/docs/demo.md').read_text(encoding='utf-8')
code = document.split("python3 - <<'PY'\n", 1)[1].split('\nPY\n',1)[0]
calls = []
def response(request, timeout):
    calls.append((request.full_url, request.get_header('Authorization'), timeout))
    return io.StringIO(json.dumps({'revenue_cents':12500,'order_count':2,'average_ticket_cents':6250}))
with patch('pathlib.Path.read_text', return_value='{"probe":"SYNTHETIC_ONLY"}'), patch('urllib.request.urlopen', side_effect=response), contextlib.redirect_stdout(io.StringIO()) as stdout:
    exec(compile(code, 'docs/demo.md', 'exec'), {})
assert stdout.getvalue() == 'revenue_cents: 12500\norder_count: 2\naverage_ticket_cents: 6250\n'
assert calls[0][1] == 'Bearer SYNTHETIC_ONLY'
receipt['linux_guide_python'] = {'output':stdout.getvalue(),'synthetic_transport':True,'live_stack':False}
(OUT / 'backend-ops-directed-checks.json').write_text(json.dumps(receipt, ensure_ascii=False, indent=2), encoding='utf-8')
(OUT / 'ops-before.css').write_bytes(subprocess.check_output(['git','-C',str(OPS),'show','HEAD:scripts/report.css']))
print(json.dumps({'guide_links':checked,'shells':'passed','linux_guide_python':'passed','report':'regenerated'}))
