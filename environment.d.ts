// This file is needed to support autocomplete for process.env
export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      // convex public url
      NEXT_PUBLIC_CONVEX_URL: string;

      // liveblocks api keys
      NEXT_PUBLIC_LIVEBLOCKS_PUBLIC_KEY: string;
      NEXT_PUBLIC_LIVEBLOCKS_SECRET_KEY: string;
    }
  }
}
