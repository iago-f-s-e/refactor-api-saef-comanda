import { Request, Response } from 'express'

export interface OrderPostProtocols {
  requestToCreate: (request: Request, response: Response) => Promise<Response>
}
