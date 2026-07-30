import { createServer } from 'node:http';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
const root = resolve(process.argv[2] || '.');
const port = Number(process.argv[3] || process.env.PORT || 5173);
const types = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css', '.svg':'image/svg+xml', '.json':'application/json' };
createServer((req,res)=>{
  const url = new URL(req.url || '/', `http://localhost:${port}`);
  let file = join(root, url.pathname === '/' ? 'index.html' : url.pathname);
  if (!existsSync(file) || statSync(file).isDirectory()) file = join(root, 'index.html');
  try { res.writeHead(200, {'content-type': types[extname(file)] || 'application/octet-stream'}); res.end(readFileSync(file)); }
  catch { res.writeHead(404); res.end('Not found'); }
}).listen(port, '0.0.0.0', () => console.log(`Think Stack dashboard running at http://localhost:${port}`));
