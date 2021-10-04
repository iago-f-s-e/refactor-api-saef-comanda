import { Controller, Get } from '@overnightjs/core'
import { tableMapping } from '@src/modules/domain/mappings'
import { Request, Response } from 'express'
import { TableGetProtocols } from '../contracts'

@Controller('')
export class TableGet implements TableGetProtocols {
  @Get('')
  public async requestToList (request: Request, response: Response): Promise<Response> {
    const { instances } = request

    const tables = tableMapping().tables(await instances.table.find().execute())

    return response.status(200).json({ results: tables })
  }
}
