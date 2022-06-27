export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_YOUTUBE_API_KEY: string;
      TWITCH_CLIENT_ID: string;
      TWITCH_CLIENT_SECRET: string;
    }
  }
}