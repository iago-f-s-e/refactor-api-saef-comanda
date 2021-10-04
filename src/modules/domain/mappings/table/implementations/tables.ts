import { MappedTable } from '@domain/controllers'
import { Table } from '@domain/entities'
import { table } from './table'

export function tables (entities: Table[]): MappedTable[] {
  return entities.length
    ? entities
      .map(entity => table(entity))
      .sort((prev, next) => prev.numero - next.numero)
    : []
}
