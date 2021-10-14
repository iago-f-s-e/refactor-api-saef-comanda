import { OrderProgressHandlers } from '@helpers/infra'
import { OrderProgress } from '@helpers/entities'
import { FindOrderProgressProtocols } from '../contracts'

export class FindOrderProgress implements FindOrderProgressProtocols {
  constructor (private readonly orderProgressHandlers: OrderProgressHandlers) {}

  public async byBudgetCode (budgetCode: number): Promise<OrderProgress> {
    const orderProgress = await this.orderProgressHandlers.queryBuilder
      .where('OrderProgress.budgetCode = :budgetCode', { budgetCode })
      .getOne()

    if (!orderProgress) throw new Error('OrderProgress not found')

    return orderProgress
  }
}
