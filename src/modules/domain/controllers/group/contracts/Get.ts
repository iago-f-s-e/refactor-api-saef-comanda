import { Request, Response } from 'express'

export interface GroupGetProtocols {
  requestToList: (request: Request, response: Response) => Promise<Response>
}
