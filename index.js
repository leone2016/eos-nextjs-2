// Punto de entrada optimizado para cPanel/Passenger
process.chdir(__dirname);

// Configuración de entorno
process.env.NODE_ENV = 'production';

// Passenger suele pasar el puerto en process.env.PORT automáticamente.
const port = process.env.PORT || 3000;
process.env.PORT = port;

// Deshabilitamos configuraciones de standalone previas para evitar conflictos
delete process.env.__NEXT_PRIVATE_STANDALONE_CONFIG;

console.log(`> Iniciando servidor en el puerto: ${port}`);

// Importamos el servidor de Next.js standalone
require('./server.js');
