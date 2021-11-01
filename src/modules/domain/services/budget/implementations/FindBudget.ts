import { BudgetHandlers } from '@domain/infra'
import { Budget } from '@src/modules/domain/entities'
import { FindBudgetProtocols } from '../contracts'

export class FindBudget implements FindBudgetProtocols {
  constructor (private readonly budgetHandles: BudgetHandlers) {}

  private filterOrders (budgets: Budget[]): Budget[] {
    return budgets.filter(budget => budget.order && !budget.order.finished)
  }

  public async byCode (budgetCode: number): Promise<Budget> {
    const budget = await this.budgetHandles.queryBuilder
      .innerJoinAndSelect('Budget.products', 'products')
      .innerJoinAndSelect('products.product', 'product')
      .leftJoinAndSelect('Budget.order', 'order')
      .where('Budget.budgetCode = :budgetCode', { budgetCode })
      .getOne()

    if (!budget) throw new Error('Budget not found')

    return budget
  }

  private async getBudgetsWithOrders (tableCode: number): Promise<Budget[]> {
    return await this.budgetHandles.repository.find({
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
  }

  private async getBudgetsWithoutOrders (tableCode: number): Promise<Budget[]> {
    return await this.budgetHandles.repository.find({
      where: { tableCode, printed: 'N' },
      join: {
        alias: 'Budget',
        innerJoinAndSelect: {
          budgetProducts: 'Budget.products',
          product: 'budgetProducts.product'
        }
      }
    })
  }

  public async byTable (tableCode: number, useOrder: boolean = true): Promise<Budget[]> {
    if (useOrder) {
      return this.filterOrders(await this.getBudgetsWithOrders(tableCode))
    }

    return this.getBudgetsWithoutOrders(tableCode)
  }
}
