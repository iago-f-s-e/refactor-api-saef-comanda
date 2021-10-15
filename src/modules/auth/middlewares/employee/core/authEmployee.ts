import { employeeErrors } from '@src/modules/auth/errors'
import { NextFunction, Request, Response } from 'express'

import { checkToken } from '../functions'

export function authEmployee (request: Request, response: Response, next: NextFunction): void {
  try {
    checkToken(request.headers['access-token'])

    next()
  } catch (error: any) {
    const { code, message } = employeeErrors(error.message)

    response.status(code).json({ error: message })
  }
}
