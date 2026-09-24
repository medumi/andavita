import { defineConfig } from 'astro/config';

export default defineConfig({
  // dist/ ist noch die aktuell live gehostete statische Seite (siehe README) —
  // bewusst NICHT als Build-Ziel, bis der Umzug beschlossen ist.
  outDir: './dist-astro',
});
