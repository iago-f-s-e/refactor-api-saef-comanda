import { Request, Response } from 'express'

export interface PrintPostProtocols {
  requestToPrintAtTheBar: (request: Request, response: Response) => Promise<Response>
  requestToPrintAtTheKitchen: (request: Request, response: Response) => Promise<Response>
  requestToPrintOrder: (request: Request, response: Response) => Promise<Response>
  requestToPrintOrdersByTable: (request: Request, response: Response) => Promise<Response>
}
