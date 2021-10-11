import { NextFunction, Request, Response } from 'express'
import { initializeTransactions } from '../functions'

export async function beginTransaction (request: Request, response: Response, next: NextFunction): Promise<void> {
  request.transactions = initializeTransactions()
  await request.transactions.start()

  next()
}
