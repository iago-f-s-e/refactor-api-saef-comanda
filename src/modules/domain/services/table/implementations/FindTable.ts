import { TableHandlers } from '@domain/infra'
import { Budget, Table } from '@domain/entities'
import { FindTableProtocols } from '../contracts'

export class FindTable implements FindTableProtocols {
  constructor (private readonly tableHandles: TableHandlers) {}

  private getTableBudgets (budgets: Budget[]): Budget[] {
    const isEmpty = !budgets.length

    if (isEmpty) return []

    const openBudget = budgets.filter(budget => budget.printed === 'N' && !budget.order?.finished)

    return openBudget
  }

  public async tablesWithBudgets (): Promise<Table[]> {
    const tables = await this.tableHandles.queryBuilder
      .leftJoinAndSelect('Table.budgets', 'budgets')
      .leftJoinAndSelect('budgets.order', 'order')
      .leftJoinAndSelect('budgets.products', 'budgetProducts')
      .leftJoinAndSelect('budgetProducts.product', 'product')
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
