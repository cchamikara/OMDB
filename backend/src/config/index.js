export const config = {
  omdb: {
    url: process.env.OMDB_URL,
    apiKey: process.env.OMDB_API_KEY,
  },
  app: {
    port: process.env.BACKEND_PORT | 8000,
  },
};

export default config;
