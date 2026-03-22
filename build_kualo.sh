#!/bin/bash

# Finalizar la ejecución si algún comando falla
set -e

echo "➡️ Iniciando proceso de compilación..."

# 1. Validar la existencia de node_modules
if [ ! -d "node_modules" ]; then
  echo "⚠️  WARNING: El directorio 'node_modules' no existe. Ejecutando npm install..."
  npm install
else
  echo "✅ 'node_modules' encontrado."
fi

# 2. Compilar el proyecto
echo "➡️ Ejecutando 'npm run build'..."
npm run build

echo "✅ Compilación terminada."

# 3. Generar la carpeta .eos-landing/ en la raíz del proyecto
echo "➡️ Generando estructura en carpeta '.eos-landing/'..."

# Limpiamos la carpeta si ya existe
rm -rf .eos-landing
mkdir .eos-landing

# Verificamos que se haya generado la salida standalone
if [ ! -d ".next/standalone" ]; then
  echo "❌ ERROR: No se encontró el directorio '.next/standalone'. Asegúrate de tener 'output: \"standalone\"' en tu next.config.js."
  exit 1
fi

# Crear directorio public en .eos-landing/
mkdir -p .eos-landing/public

# Copiar directorios y archivos

# .next/ (el que está en .next/standalone/.next)
if [ -d ".next/standalone/.next" ]; then
  cp -r .next/standalone/.next .eos-landing/.next
  echo "✅ Copiado .next/"
fi

# node_modules/ (el que está dentro de .next/standalone)
if [ -d ".next/standalone/node_modules" ]; then
  cp -r .next/standalone/node_modules .eos-landing/node_modules
  echo "✅ Copiado node_modules/"
fi

# public/ (copiado de la raíz)
if [ -d "public" ]; then
  cp -r public/* .eos-landing/public/
  echo "✅ Copiado public/"
else
  echo "⚠️ 'public/' no encontrado en la raíz, ignorando..."
fi

# public/_next/ (copiado de .next/static)
mkdir -p .eos-landing/public/_next
if [ -d ".next/static" ]; then
  cp -r .next/static/* .eos-landing/public/_next/
  echo "✅ Copiado public/_next/"
else
  echo "⚠️ '.next/static/' no encontrado, ignorando..."
fi

# package.json (de .next/standalone)
if [ -f ".next/standalone/package.json" ]; then
  cp .next/standalone/package.json .eos-landing/package.json
  echo "✅ Copiado package.json"
fi

# server.js (de .next/standalone)
if [ -f ".next/standalone/server.js" ]; then
  cp .next/standalone/server.js .eos-landing/server.js
  echo "✅ Copiado server.js"
fi

# index.js (de la raíz del proyecto)
if [ -f "index.js" ]; then
  cp index.js .eos-landing/index.js
  echo "✅ Copiado index.js"
else
  echo "⚠️ 'index.js' no encontrado en la raíz, ignorando..."
fi

echo "🎉 Proceso finalizado exitosamente. La carpeta '.eos-landing/' está lista."
