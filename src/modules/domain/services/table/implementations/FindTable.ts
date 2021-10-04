import { TableHandlers } from '@domain/infra'
import { Table } from '@domain/entities'
import { FindTableProtocols } from '../contracts'

export class FindTable implements FindTableProtocols {
  constructor (private readonly tableHandles: TableHandlers) {}

  public async execute (): Promise<Table[]> {
    return this.tableHandles.queryBuilder
      .getMany()
  }
}
