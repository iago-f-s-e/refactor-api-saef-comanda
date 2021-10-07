import { Request, Response } from 'express'

export interface PizzaGetProtocols {
  requestToList: (request: Request, response: Response) => Promise<Response>
}
