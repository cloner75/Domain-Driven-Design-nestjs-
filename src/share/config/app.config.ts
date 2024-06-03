export const PORT = 'PORT';

export const appConfig = () => {
  if (!process.env.PORT) {
    throw new Error('PORT is required in env');
  }

  return {
    PORT: process.env.PORT
  };
};