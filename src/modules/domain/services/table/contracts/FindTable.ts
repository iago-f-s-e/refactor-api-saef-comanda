import { Table } from '@domain/entities'

export interface FindTableProtocols {
  tablesWithBudgets: () => Promise<Table[]>
}
