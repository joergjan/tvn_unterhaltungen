import type { LoaderLocals } from "@sanity/svelte-loader";

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals extends LoaderLocals {}
  }
}

export {};
