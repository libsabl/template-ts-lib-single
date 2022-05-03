param(
  [switch]$View, 
  [switch]$Render
)

. (Join-Path $PSScriptRoot 'utils.ps1')

$cdir = (Get-Location).Path
$repoDir = Join-FPath $PSScriptRoot, '..' -Resolve
  
Write-Host "Cleaning output folders`n" -f Green
    
@('coverage', 'dist') | `
  ForEach-Object { Get-ChildItem $repoDir -Directory -Filter $_ } | `
  ForEach-Object { 
  Write-Host "Cleaning $($_.FullName.Replace($cdir, '.'))" -ForegroundColor Cyan
  Remove-Item -Recurse -Force $_
}
