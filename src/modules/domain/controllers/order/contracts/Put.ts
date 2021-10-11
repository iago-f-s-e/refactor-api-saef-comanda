import { Request, Response } from 'express'

export interface OrderPutProtocols {
  requestToUpdate: (request: Request, response: Response) => Promise<Response>
}
