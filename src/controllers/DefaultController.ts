import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('')
export class DefaultController {
  @Get('')
  public redirectToDocs (_: Request, response: Response): void {
    response.redirect('/api-docs')
  }
}
