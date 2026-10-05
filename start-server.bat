@echo off
title Mezue Associates Web Server
echo Starting Mezue Associates Local Server on http://localhost:8080 ...
cd /d "%~dp0"
python -m http.server 8080
pause
