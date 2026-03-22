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

# Crear directorios necesarios
mkdir -p .eos-landing/.next
mkdir -p .eos-landing/public
mkdir -p .eos-landing/public/_next

# Copiar directorios y archivos según la estructura solicitada:

# 1. .next/ (el que está en .next/standalone/.next)
if [ -d ".next/standalone/.next" ]; then
  cp -r .next/standalone/.next/* .eos-landing/.next/
  echo "✅ Copiado contenido de .next/ (desde standalone)"
fi

# 2. .next/static (el que está en .next/static de la raíz)
if [ -d ".next/static" ]; then
  mkdir -p .eos-landing/.next/static
  cp -r .next/static/* .eos-landing/.next/static/
  echo "✅ Copiado .next/static/"
fi

# 3. node_modules/ (el que está dentro de .next/standalone)
if [ -d ".next/standalone/node_modules" ]; then
  cp -r .next/standalone/node_modules .eos-landing/node_modules
  echo "✅ Copiado node_modules/"
fi

# 4. public/ (Copiado de la raíz)
if [ -d "public" ]; then
  cp -r public/* .eos-landing/public/
  echo "✅ Copiado public/"
fi

# 5. public/_next/ (Copiado de .next/ de este directorio .eos-landing/.next)
if [ -d ".eos-landing/.next" ]; then
  # Copiamos el contenido de .eos-landing/.next hacia .eos-landing/public/_next
  cp -r .eos-landing/.next/* .eos-landing/public/_next/
  echo "✅ Copiado public/_next/ desde .eos-landing/.next"
fi

# 6. package.json (El de .next/standalone)
if [ -f ".next/standalone/package.json" ]; then
  cp .next/standalone/package.json .eos-landing/package.json
  echo "✅ Copiado package.json"
fi

# 7. server.js (El de .next/standalone)
if [ -f ".next/standalone/server.js" ]; then
  cp .next/standalone/server.js .eos-landing/server.js
  echo "✅ Copiado server.js"
fi

# 8. index.js (El que está en la raíz)
if [ -f "index.js" ]; then
  cp index.js .eos-landing/index.js
  echo "✅ Copiado index.js"
fi

# 9. .htaccess para cPanel / Apache
echo "➡️ Generando .htaccess genérico para cPanel..."
cat << 'EOF' > .eos-landing/.htaccess
# Configuración generada para cPanel Node.js
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Si el archivo o directorio existe físicamente (ej. en public/), que Apache lo sirva
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Todo lo demás lo mandamos al servidor Node.js (index.js / Passenger)
  RewriteRule ^(.*)$ index.js [QSA,L]
</IfModule>
EOF
echo "✅ Generado .htaccess"

echo "🎉 Proceso finalizado exitosamente. La carpeta '.eos-landing/' está lista para subir."
