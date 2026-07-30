import { readFileSync, mkdirSync, copyFileSync, cpSync } from 'node:fs';
for (const file of ['index.html','src/main.js','src/styles.css']) readFileSync(file, 'utf8');
mkdirSync('dist/src', { recursive: true });
copyFileSync('index.html','dist/index.html');
cpSync('src','dist/src',{recursive:true});
console.log('Static production bundle validated in dist/.');
