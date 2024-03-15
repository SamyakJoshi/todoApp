declare namespace NodeJS {
  type Environments = 'production' | 'development' | 'test';
  interface ProcessEnv {
    NODE_ENV: Environments;
    PORT: number;
    MONGODB_URI: string;
    GRAPHQL_PATH: string;
  }
}
