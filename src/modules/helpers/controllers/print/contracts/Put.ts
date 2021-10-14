import { Request, Response } from 'express'

export interface PrintPutProtocols {
  requestToUpdatePrint: (request: Request, response: Response) => Promise<Response>
}
