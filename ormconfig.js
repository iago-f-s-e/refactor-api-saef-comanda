module.exports = {
  type: 'mssql',
  host: '192.168.0.25',
  username: 'sa',
  password: 'supportdatasql',
  database: 'Demostracao_Matriz',
  options: {
    encrypt: false
  },
  entities: [
    'dist/modules/auth/entities/*.js',
    'dist/modules/domain/entities/*.js',
    'dist/modules/helpers/entities/*.js',
  ],
  migrations: [
    'dist/infra/database/migrations/**/*.js',
  ],
  cli: {
    entitiesDir: 'dist/infra/database/entities',
    migrationsDir: 'dist/infra/database/migrations'
  }
}