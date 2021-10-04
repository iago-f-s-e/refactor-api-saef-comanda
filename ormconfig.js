module.exports = {
  type: process.env.NODE_ENV !== 'production' ? process.env.TYPEORM_ENGINE_DEV : process.env.TYPEORM_ENGINE_PROD,
  host: process.env.NODE_ENV !== 'production' ? process.env.TYPEORM_HOST_DEV : process.env.TYPEORM_HOST_PROD,
  username: process.env.NODE_ENV !== 'production' ? process.env.TYPEORM_USERNAME_DEV : process.env.TYPEORM_USERNAME_PROD,
  password: process.env.NODE_ENV !== 'production' ? process.env.TYPEORM_PASSWORD_DEV : process.env.TYPEORM_PASSWORD_PROD,
  database: process.env.NODE_ENV !== 'production' ? process.env.TYPEORM_DATABASE_DEV : process.env.TYPEORM_DATABASE_PROD,
  migrationsRun: process.env.NODE_ENV !== 'production' ? true : false,
  dropSchema: process.env.NODE_ENV !== 'production' ? true : false,
  entities: [
    `${process.env.NODE_ENV !== 'production' 
      ? process.env.TYPEORM_DIRECTORY_AUTH_DEV 
      : process.env.TYPEORM_DIRECTORY_AUTH_PROD}`,
  ],
  migrations: [
    `${process.env.NODE_ENV !== 'production' 
      ? process.env.TYPEORM_DIRECTORY_MIGRATIONS_DEV 
      : process.env.TYPEORM_DIRECTORY_MIGRATIONS_PROD}`,
  ],
  cli: {
    entitiesDir: process.env.TYPEORM_DIRECTORY_SAVE_ENTITIES,
    migrationsDir: process.env.TYPEORM_DIRECTORY_SAVE_MIGRATIONS
  }
}