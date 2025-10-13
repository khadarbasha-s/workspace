@echo off
echo Installing dependencies...
call npm install -D tailwindcss postcss autoprefixer
call npm install @monaco-editor/react xterm xterm-addon-fit framer-motion react-icons @types/styled-components @types/xterm styled-components

echo "\nSetup complete! Run 'npm run dev' to start the development server."
