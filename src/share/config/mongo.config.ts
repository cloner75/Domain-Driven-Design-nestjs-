export const MONGO_URL = 'MONGO_URL';

export const mongoConfig = () => {
  if (!process.env.MONGO_URL) {
    throw new Error('MONGO_URL is required in .env file');
  }

  return {
    MONGO_URL: process.env.MONGO_URL
  };
}; 