import { TableHandlers } from '@domain/infra'
import { Budget, Table } from '@domain/entities'
import { FindTableProtocols } from '../contracts'

export class FindTable implements FindTableProtocols {
  constructor (private readonly tableHandles: TableHandlers) {}

  private getTableBudgets (budgets: Budget[]): Budget[] {
    const isEmpty = !budgets.length

    if (isEmpty) return []

    const budgetsFiltered = budgets.filter(budget => budget.printed === 'N')

    return budgetsFiltered
  }

  public async tablesWithBudgets (): Promise<Table[]> {
    const tables = await this.tableHandles.queryBuilder
      .leftJoinAndSelect('Table.budgets', 'budgets')
      .getMany()

    const tablesFiltered = tables.map((table): Table => {
      return {
        ...table,
        budgets: this.getTableBudgets(table.budgets)
      }
    })

    return tablesFiltered
  }
}
