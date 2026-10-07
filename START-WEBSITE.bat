@echo off
cd /d "%~dp0"
echo ========================================
echo       CITY COMPUTERS WEBSITE
 echo ========================================
echo.
echo Installing dependencies...
call npm install
if errorlevel 1 (
  echo.
  echo npm install failed. Make sure Node.js is installed and try again.
  pause
  exit /b 1
)
echo.
echo Starting City Computers...
call npm run dev
pause
