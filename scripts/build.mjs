import { cp, mkdir, readFile, rm, stat } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
const root=resolve(dirname(fileURLToPath(import.meta.url)), '..');
for(const file of ['app.js','config.js']) execFileSync(process.execPath,['--check',resolve(root,'src',file)],{stdio:'inherit'});
const html=await readFile(resolve(root,'src/index.html'),'utf8');
if(!html.includes('id="opening"')||!html.includes('id="invitation"')) throw Error('Missing invitation screens');
for(const path of ['assets/jesus-child-heavenly.png','assets/church.jpg','assets/little-blessing.mp3','assets/fonts/fonts.css']) {
  if(!(await stat(resolve(root,'src',path))).size) throw Error(`Missing asset: ${path}`);
}
await rm(resolve(root,'dist'),{recursive:true,force:true});
await mkdir(resolve(root,'dist'),{recursive:true});
await cp(resolve(root,'src'),resolve(root,'dist'),{recursive:true});
console.log('Production build complete: dist/ (HTML, JavaScript, local fonts, images and music).');
