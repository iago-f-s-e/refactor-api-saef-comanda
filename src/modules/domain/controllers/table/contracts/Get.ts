import { Request, Response } from 'express'

export interface TableGetProtocols {
  requestToList: (request: Request, response: Response) => Promise<Response>
}
