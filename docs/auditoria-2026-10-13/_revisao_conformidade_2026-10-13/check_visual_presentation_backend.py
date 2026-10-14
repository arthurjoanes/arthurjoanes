from pathlib import Path
import hashlib,json,subprocess
root=Path.cwd(); out=root/'_revisao_conformidade_2026-10-13'
repos={'evidencedesk':root/'evidencedesk','cycleops':root/'CycleOps','quake-exposure':root/'_auditoria_2026-10-13/sources/quake-exposure'}
images={
'evidencedesk':['docs/images/payment-story-20260922/01-pagamento-e-divergencias.png','docs/images/payment-story-20260922/05-dossie-com-fonte.png','docs/images/workspace-desktop.png'],
'cycleops':['docs/media/uiux-desktop.png','docs/media/uiux-analysis.png'],
'quake-exposure':['docs/results/ui-ux-desktop.jpg','docs/results/ui-ux-charts.jpg']}
result=[]
for name, repo in repos.items():
    doclog={'evidencedesk':'presentation-evidencedesk-docs.log','cycleops':'presentation-cycleops-docs.log','quake-exposure':'presentation-quake-docs.log'}[name]
    docs=subprocess.run([str(root/'evidencedesk/.venv/Scripts/python.exe'),str(root/'evidencedesk/scripts/check_repository_docs.py'),'--root',str(repo)],capture_output=True,text=True,encoding='utf8')
    (out/doclog).write_text(docs.stdout+docs.stderr,encoding='utf8')
    assert docs.returncode==0,docs.stdout+docs.stderr
    check=subprocess.run(['git','-C',str(repo),'diff','--check'],capture_output=True,text=True)
    assert check.returncode==0,check.stdout+check.stderr
    files=subprocess.check_output(['git','-C',str(repo),'diff','--name-only'],text=True).splitlines()
    assert all(x.endswith('.md') for x in files),files
    images_out=[]
    for path in images[name]:
        content=(repo/path).read_bytes()
        prior=subprocess.check_output(['git','-C',str(repo),'show','HEAD:'+path])
        assert content==prior,path
        images_out.append({'path':str((repo/path).relative_to(root)).replace(chr(92),'/'),'sha256':hashlib.sha256(content).hexdigest(),'unchanged_from_head':True,'opened_individually_in_pixels':True})
    result.append({'repo':name,'head':subprocess.check_output(['git','-C',str(repo),'rev-parse','HEAD'],text=True).strip(),'files_changed':files,'docs_check':json.loads(docs.stdout),'docs_log':doclog,'diff_check_exit':check.returncode,'images':images_out})
print(json.dumps(result,ensure_ascii=False))
