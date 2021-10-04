const { resolve } = require('path')
const root = resolve(__dirname)

module.exports = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/ormconfig.js',
    '/src/controllers/',
    '/src/server.ts',
    '/src/infra/',
    '/src/shared/utils/',
    '/src/modules/domain/entities/',
    '/src/middlewares/'
  ],
  coverageProvider: 'v8',
  coverageReporters: [
    'json',
    'text',
    'lcov',
    'clover'
  ],
  displayName: 'root-tests',
  moduleNameMapper: {
    '@src/(.*)': '<rootDir>/src/$1',
    '@test/(.*)': '<rootDir>/test/$1',
    '@admin/(.*)': '<rootDir>/src/modules/domain/admin/$1',
    '@helpers/(.*)': '<rootDir>/src/modules/helpers/$1'
  },
  preset: 'ts-jest',
  rootDir: root,
  testEnvironment: 'node',
  testMatch: [
    '<rootDir>/src/**/*.(spec|test).ts'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
}