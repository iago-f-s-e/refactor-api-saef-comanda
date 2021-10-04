import { NextFunction, Request, Response } from 'express'
import { initializeInstances } from '../functions'

export function beginInstances (request: Request, response: Response, next: NextFunction): void {
  request.instances = initializeInstances()
  next()
}
