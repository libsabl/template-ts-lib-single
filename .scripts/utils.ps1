function Join-FPath {
  param([string[]]$Parts, [switch]$Resolve)
  $joined = [System.IO.Path]::Combine($Parts)
  if (!$Resolve) { return $joined }
  return Resolve-Path $joined
}
