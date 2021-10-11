import { OrderProgressHandlers } from '@helpers/infra'
import { CreateOrderProgress } from '.'
import { OrderProgressServicesProtocols } from '../contracts'

export class OrderProgressServices implements OrderProgressServicesProtocols {
  constructor (private readonly orderProgressHandlers: OrderProgressHandlers) {}

  public create (): CreateOrderProgress {
    return new CreateOrderProgress(this.orderProgressHandlers)
  }
}
