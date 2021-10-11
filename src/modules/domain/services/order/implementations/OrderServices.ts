import { OrderHandlers } from '@domain/infra'
import { FindOrder } from '.'
import { OrderServicesProtocols } from '../contracts'

export class OrderServices implements OrderServicesProtocols {
  constructor (private readonly orderHandlers: OrderHandlers) {}

  public find (): FindOrder {
    return new FindOrder(this.orderHandlers)
  }
}
