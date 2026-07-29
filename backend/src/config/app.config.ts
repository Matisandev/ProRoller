export interface AppConfig {
  readonly port: number;
  readonly corsOrigins: readonly string[];
  readonly apiPrefix: string;
}

const DEFAULT_PORT = 3001;
const DEFAULT_CORS_ORIGIN = 'http://localhost:3000';

export const appConfig = (): AppConfig => ({
  port: Number(process.env.PORT ?? DEFAULT_PORT),
  corsOrigins: (process.env.CORS_ORIGINS ?? DEFAULT_CORS_ORIGIN)
    .split(',')
    .map((origin) => origin.trim())
    .filter((origin) => origin.length > 0),
  apiPrefix: process.env.API_PREFIX ?? 'api',
});
