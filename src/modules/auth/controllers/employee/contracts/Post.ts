import { Request, Response } from 'express'

export interface EmployeePostProtocols {
  requestToLogin: (request: Request, response: Response) => Promise<Response>
}
