import { mkdir, rm, readFile, writeFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { build } from 'esbuild';
const root = fileURLToPath(new URL('../', import.meta.url));
const source = fileURLToPath(new URL('../../dist/', import.meta.url));
const output = `${root}www`;
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
let html = await readFile(`${source}app.html`, 'utf8');
html = html.replace('width=device-width,initial-scale=1', 'width=device-width,initial-scale=1,viewport-fit=cover');
html = html.replace('<a href="index.html#preise">Website & Mitgliedschaft ↗</a>', '<span>Andavita · App-Vorschau</span>');
html = html.replace('</head>', '<link rel="stylesheet" href="native.css"></head>');
html = html.replace('</body>', '<script src="native.js"></script></body>');
await writeFile(`${output}/index.html`, html);
for (const name of ['app.js', 'style.css', 'assets']) {
  await cp(`${source}${name}`, `${output}/${name}`, { recursive: true });
}
await cp(`${root}src/native.css`, `${output}/native.css`);
await build({entryPoints: [`${root}src/native.js`], outfile: `${output}/native.js`, bundle: true, format: 'iife', target: ['safari15', 'chrome100'], minify: true});
console.log('Andavita members UI bundled for iOS and Android. Demo content only.');
