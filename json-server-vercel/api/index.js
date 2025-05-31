import jsonServer from 'json-server';
import { createRequire } from 'module'; // For JSON imports

// For importing db.json
const require = createRequire(import.meta.url);
const db = require('./db.json');

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use('/api', router);

export default server; // ES Modules export