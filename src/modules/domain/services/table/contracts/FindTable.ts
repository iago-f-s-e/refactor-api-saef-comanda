import { Table } from '@domain/entities'

export interface FindTableProtocols {
  execute: () => Promise<{openedTables: Table[], closedTables: Table[]}>
  byTableCode: (tableCode: number) =>Promise<Table>
}
