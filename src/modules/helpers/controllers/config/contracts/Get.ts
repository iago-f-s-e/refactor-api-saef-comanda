import { Request, Response } from 'express'

export interface ConfigGetProtocols {
  requestToGetUseOrder: (request: Request, response: Response) => Promise<Response>
}
