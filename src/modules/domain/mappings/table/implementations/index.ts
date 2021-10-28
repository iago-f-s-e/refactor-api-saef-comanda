import { TableMappingProtocols } from '../contracts'
import { table } from './table-with-orders'
import { tables } from './tables-with-orders'
import { tablesWithBudgets } from './tables-with-budgets'

export function tableMapping (): TableMappingProtocols {
  return {
    table,
    tables,
    tablesWithBudgets
  }
}
