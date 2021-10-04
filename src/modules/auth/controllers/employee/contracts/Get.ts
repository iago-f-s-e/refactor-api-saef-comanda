import { Request, Response } from 'express'

export interface EmployeeGetProtocols {
  requestToLogin: (request: Request, response: Response) => Promise<Response>
}
