import { MappedTable } from '@domain/controllers'
import { Table } from '@domain/entities'
import { tableWithBudget } from './table-with-budgets'

export function tablesWithBudgets (entities: Table[]): MappedTable[] {
  return entities
    .map(entity => tableWithBudget(entity))
    .sort((prev, next) => prev.numero - next.numero)
}
