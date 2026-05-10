import { mkdir, copyFile, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const files = ['index.html', 'src/main.js', 'src/styles.css'];
await rm('dist', { recursive: true, force: true });
for (const file of files) {
  const target = join('dist', file);
  await mkdir(dirname(target), { recursive: true });
  await copyFile(file, target);
}
console.log(`Built ${files.length} files into dist/`);
