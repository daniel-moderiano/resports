export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_YOUTUBE_API_KEY: string;
    }
  }
}