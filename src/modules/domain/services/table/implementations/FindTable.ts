import { TableHandlers } from '@domain/infra'
import { Table } from '@domain/entities'
import { FindTableProtocols } from '../contracts'

export class FindTable implements FindTableProtocols {
  constructor (private readonly tableHandles: TableHandlers) {}

  public async execute (): Promise<{closedTables: Table[], openedTables: Table[]}> {
    const tables = await this.tableHandles.queryBuilder.getMany()

    const closedTables: Table[] = []
    const openedTables: Table[] = []

    for (const table of tables) {
      if (!table.inUse) {
        openedTables.push(table)
        continue
      }

      closedTables.push(table)
    }

    return { closedTables, openedTables }
  }

  public async byTableCode (tableCode: number): Promise<Table> {
    const table = await this.tableHandles.queryBuilder
      .where('Table.tableCode = :tableCode', { tableCode })
      .getOne()

    if (!table) throw new Error('Table not found')

    return table
  }
}
