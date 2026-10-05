@echo off
chcp 65001 >nul
cd /d %~dp0
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$root = $PWD.Path;" ^
  "$mime = @{ '.html'='text/html; charset=utf-8'; '.htm'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='application/javascript; charset=utf-8'; '.mjs'='application/javascript; charset=utf-8'; '.json'='application/json; charset=utf-8'; '.svg'='image/svg+xml'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.gif'='image/gif'; '.webp'='image/webp'; '.ico'='image/x-icon'; '.woff'='font/woff'; '.woff2'='font/woff2'; '.ttf'='font/ttf'; '.mp3'='audio/mpeg'; '.mp4'='video/mp4'; '.wasm'='application/wasm' };" ^
  "$l = [System.Net.HttpListener]::new();" ^
  "$l.Prefixes.Add('http://localhost:5801/');" ^
  "try { $l.Start() } catch { Write-Host 'Error'; Read-Host; exit }" ^
  "Write-Host '按Ctrl+C终止服务';" ^
  "Start-Process 'http://localhost:5801/index.html';" ^
  "while ($l.IsListening) {" ^
  "  $c = $l.GetContext();" ^
  "  try {" ^
  "    $path = [System.Uri]::UnescapeDataString($c.Request.Url.LocalPath).TrimStart('/');" ^
  "    if ($path -eq '') { $path = 'index.html' }" ^
  "    $f = Join-Path $root $path;" ^
  "    if (Test-Path $f -PathType Leaf) {" ^
  "      $ext = [System.IO.Path]::GetExtension($f).ToLower();" ^
  "      if ($mime.ContainsKey($ext)) { $c.Response.ContentType = $mime[$ext] }" ^
  "      $b = [IO.File]::ReadAllBytes($f);" ^
  "      $c.Response.ContentLength64 = $b.Length;" ^
  "      $c.Response.OutputStream.Write($b, 0, $b.Length);" ^
  "    } else {" ^
  "      $c.Response.StatusCode = 404;" ^
  "      $msg = [Text.Encoding]::UTF8.GetBytes('404 Not Found');" ^
  "      $c.Response.OutputStream.Write($msg, 0, $msg.Length);" ^
  "    }" ^
  "  } catch { }" ^
  "  finally { $c.Response.Close() }" ^
  "}"