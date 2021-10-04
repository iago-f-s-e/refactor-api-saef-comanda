import supertest from 'supertest'
import { Server } from '@src/server'

let server: Server

beforeAll(async () => {
  server = new Server()

  await server.init()
  global.testRequest = supertest(server.getApp())
})

afterAll(async () => {
  await server.closeConnection()
})
