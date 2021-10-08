import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'
import { ConfigGetProtocols } from '../contracts'

@Controller('')
export class ConfigGet implements ConfigGetProtocols {
  @Get('usa_comanda')
  public async requestToGetUseOrder (request: Request, response: Response): Promise<Response> {
    const { instances } = request

    try {
      const config = await instances.config.find().execute()

      return response.status(200).json({ results: config.useOrder })
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
