import 'dotenv/config'
import 'reflect-metadata'

import cors from 'cors'
import helmet from 'helmet'

import { createConnection, getConnection } from 'typeorm'

import { Server as SetupServer } from '@overnightjs/core'
import express, { Application } from 'express'

import swaggerUi from 'swagger-ui-express'
import swaggerDocs from './docs/swagger.json'

import { beginInstances } from './middlewares'
import { DefaultController, MappingControllers } from './controllers'

export class Server extends SetupServer {
  constructor () {
    super()
  }

  public async init (): Promise<void> {
    this.setupExpress()
    this.setupControllers()
    await this.startConnection()
  }

  private setupExpress (): void {
    this.app.use(cors({
      origin: 'support.com/saef-comanda'
    }))
    this.app.use(helmet())
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(`/api/${process.env.API_VERSION}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocs))
    this.app.use(beginInstances)
  }

  private setupControllers (): void {
    this.addControllers([
      new DefaultController(),
      new MappingControllers()
    ])
  }

  public getApp (): Application {
    return this.app
  }

  public async startConnection (): Promise<void> {
    await createConnection()
  }

  public async closeConnection (): Promise<void> {
    await getConnection().close()
  }

  public start (): void {
    this.app.listen(process.env.PORT || 8080, () => {
      console.log(`Server running on port: ${process.env.PORT || 8080}`)
    })
  }
}
