import { Table } from '@domain/entities'
import { MappedTable } from '@domain/controllers'

export interface TableMappingProtocols {
  table: (entity: Table) => MappedTable
  tables: (entities: Table[]) => MappedTable[]
}
