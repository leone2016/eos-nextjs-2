process.chdir(__dirname);
process.env.NODE_ENV = 'production';
delete process.env.__NEXT_PRIVATE_STANDALONE_CONFIG;

require('./server.js');
