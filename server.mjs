import { createServer } from 'node:http';
import { readFileSync } from 'node:fs';
createServer((_req, res) => { res.setHeader('content-type', 'text/html'); res.end(readFileSync(new URL('./public/index.html', import.meta.url))); })
  .listen(Number(process.env.PORT ?? 4300), '127.0.0.1');
