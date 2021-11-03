module.exports = {
  type: 'mssql',
  host: '192.168.0.25',
  username: 'sa',
  password: 'supportdatasql',
  database: 'Dniels_Burguer',
  options: {
    encrypt: false
  },
  entities: [
    'src/modules/auth/entities/*.ts',
    'src/modules/domain/entities/*.ts',
    'src/modules/helpers/entities/*.ts',
  ],
  migrations: [
    'src/infra/database/migrations/**/*.ts',
  ],
  cli: {
    entitiesDir: 'src/infra/database/entities',
    migrationsDir: 'src/infra/database/migrations'
  }
}