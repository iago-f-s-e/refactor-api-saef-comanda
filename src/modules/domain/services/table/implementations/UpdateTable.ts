import { TableHandlers } from '@domain/infra'
import { UpdateResult } from 'typeorm'
import { UpdateTableProtocols } from '../contracts'

export class UpdateTable implements UpdateTableProtocols {
  constructor (private readonly tableHandlers: TableHandlers) {}

  public async occupy (tableCode: number): Promise<UpdateResult> {
    return this.tableHandlers.repository.update({ tableCode }, {
      inUse: true
    })
  }
}
