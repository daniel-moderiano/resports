// playwright.config.ts
import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: /.e2e\.*(test|spec)\.(js|ts|mjs)/
};
export default config;