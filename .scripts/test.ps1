param(
  [switch]$View, 
  [switch]$Render,
  [switch]$Pretty
)

. (Join-Path $PSScriptRoot 'utils.ps1')

$cdir = (Get-Location).Path 
Push-Location (Join-FPath $PSScriptRoot, '..')

function prettypath($relPath) {
  if (!$Pretty) { return $relPath }
  return $relPath.Replace($cdir, '.')
}
 
Write-Host "Testing all packages`n" -f Green
$covDir = Join-FPath $PSScriptRoot, '..', 'coverage'
 
$jestPath = Join-FPath ., node_modules, jest, bin, jest.js
$reporters = 'text'
$cfgPath  = Join-FPath ., jest.config.js

if ($View -or $Render) {
  $reporters += ' lcov'
}

$cmd = "  node $jestPath ```n    --coverage true"
if ($View -or $Render) {
  $cmd += " ```n    --coverageDirectory $covDir"
}
$cmd += " ```n    --coverageReporters $reporters"  
$cmd += " ```n    --projects $cfgPath"    
 
if ($Package -and (Test-Path $covDir)) {
  Write-Host "`nClearing existing coverage dir $(prettypath $covDir)`n" -f Cyan
  Remove-Item -Recurse -Force $covDir
}
 
Write-Host ((prettypath $cmd) + "`n") -f Cyan

Invoke-Expression $cmd
   
if ($View) {
  $covPath = Join-FPath $covDir, 'lcov-report', 'index.html'
  Write-Host "`nOpening coverage report $(prettypath $covPath)`n" -ForegroundColor Green
  . $covPath
} 

Pop-Location
