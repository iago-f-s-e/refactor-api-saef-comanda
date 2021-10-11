import { OrderHandlers } from '@domain/infra'
import { Order } from '@domain/entities'
import { FindOrderProtocols } from '../contracts'

export class FindOrder implements FindOrderProtocols {
  constructor (private readonly orderHandlers: OrderHandlers) {}

  public async inUse (identifier: string): Promise<Order | undefined> {
    return this.orderHandlers.queryBuilder
      .innerJoinAndSelect('Order.budget', 'budget')
      .where('Order.orderIdentifier = :identifier', { identifier })
      .andWhere('Order.finished = :finished', { finished: false })
      .andWhere('budget.printed = :printed', { printed: 'N' })
      .getOne()
  }
}
