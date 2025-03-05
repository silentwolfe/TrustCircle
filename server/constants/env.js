function getEnv(key, defaultValue) {
  const value = process.env[key] || defaultValue;
  if (!value) {
    throw new Error(`Environment variable ${key} not found`);
  }

  return value;
}

export const PORT = getEnv("PORT");
export const MONGO_URI = getEnv("MONGO_URI");
