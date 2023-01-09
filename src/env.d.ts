/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly PUBLIC_CATEGORIES: Array<string>;
  // plus de variables d'environnement...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
