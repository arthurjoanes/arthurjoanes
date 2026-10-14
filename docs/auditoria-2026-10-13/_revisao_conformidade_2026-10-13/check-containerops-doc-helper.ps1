$ErrorActionPreference = 'Stop'
$repoPath = Join-Path $PSScriptRoot '..\containerops'
$doc = Get-Content -LiteralPath (Join-Path $repoPath 'docs\runbooks.md') -Raw -Encoding UTF8
$functionText = [regex]::Match($doc, '(?ms)^function dc \{.*?^\}').Value
if (-not $functionText) { throw 'Helper ausente' }
$tokens = $null
$parseErrors = $null
[void][System.Management.Automation.Language.Parser]::ParseInput($functionText, [ref]$tokens, [ref]$parseErrors)
if ($parseErrors.Count) { throw ($parseErrors | Out-String) }
$script:dockerCalls = @()
function docker { $script:dockerCalls += ,$args; $global:LASTEXITCODE = 0 }
Invoke-Expression $functionText
$project = 'C:\synthetic-clone'
$env:CONTAINEROPS_SESSION = 'review-synthetic'
$rejected = $false
try { dc ps -a } catch { $rejected = $_.Exception.Message -like '*somente a demonstração padrão*' }
if (-not $rejected -or $script:dockerCalls.Count -ne 0) { throw 'Guarda não bloqueou Docker na sessão' }
Remove-Item Env:CONTAINEROPS_SESSION
$env:CONTAINEROPS_RUNTIME = 'C:\synthetic-runtime'
dc ps -a
if ($script:dockerCalls.Count -ne 1) { throw 'Ramo padrão não chamou o stub uma vez' }
$call = $script:dockerCalls[0]
if (($call -join '|') -ne 'compose|--project-directory|C:\synthetic-clone|-p|pf-containerops|-f|C:\synthetic-clone\compose.yaml|ps|-a') { throw 'Argumentos inesperados' }
$result = @{ result='passed'; parser_errors=$parseErrors.Count; session_rejected_before_docker=$rejected; default_docker_stub_calls=$script:dockerCalls.Count; default_argv=$call; limitation='Stub sintético. Nenhum daemon, recurso real ou comando Docker executado.' }
$result | ConvertTo-Json -Depth 5 | Set-Content -Encoding utf8 (Join-Path $PSScriptRoot 'containerops-doc-helper-check.json')
$result | ConvertTo-Json -Depth 5
