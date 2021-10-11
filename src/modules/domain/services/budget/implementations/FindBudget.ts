import { BudgetHandlers } from '@domain/infra'
import { Budget } from '@src/modules/domain/entities'
import { FindBudgetProtocols } from '../contracts'

export class FindBudget implements FindBudgetProtocols {
  constructor (private readonly budgetHandles: BudgetHandlers) {}

  private filterOrders (budgets: Budget[]): Budget[] {
    return budgets.filter(budget => budget.order && !budget.order.finished)
  }

  public async byTable (tableCode: number): Promise<Budget[]> {
    const budgets = await this.budgetHandles.repository.find({
      where: { tableCode, printed: 'N' },
      relations: ['order'],
      join: {
        alias: 'Budget',
        innerJoinAndSelect: {
          budgetProducts: 'Budget.products',
          product: 'budgetProducts.product'
        }
      }
    })

    return this.filterOrders(budgets)
  }
}
