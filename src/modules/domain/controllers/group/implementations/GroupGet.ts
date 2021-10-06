import { Controller, Get } from '@overnightjs/core'
import { groupMapping } from '@domain/mappings'
import { Request, Response } from 'express'
import { GroupGetProtocols } from '../contracts'

@Controller('')
export class GroupGet implements GroupGetProtocols {
  @Get('')
  public async requestToList (request: Request, response: Response): Promise<Response> {
    const { instances } = request

    const groups = groupMapping().groups(await instances.group.find().execute())

    return response.status(200).json({ results: groups })
  }
}
