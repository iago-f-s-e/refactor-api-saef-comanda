import { OrderProgressHandlers } from '@helpers/infra'
import { UpdateOrderProgressProtocols } from '../contracts'
import { UpdateResult } from 'typeorm'

export class UpdateOrderProgress implements UpdateOrderProgressProtocols {
  constructor (private readonly orderProgressHandlers: OrderProgressHandlers) {}

  public async lastChange (budgetCode: number): Promise<UpdateResult> {
    return this.orderProgressHandlers.repository.update({ budgetCode }, {
      lastChange: new Date().toISOString()
    })
  }
}
