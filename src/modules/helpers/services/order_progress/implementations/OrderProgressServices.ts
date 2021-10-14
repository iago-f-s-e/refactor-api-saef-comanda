import { OrderProgressHandlers } from '@helpers/infra'
import { CreateOrderProgress, FindOrderProgress, UpdateOrderProgress } from '.'
import { OrderProgressServicesProtocols } from '../contracts'

export class OrderProgressServices implements OrderProgressServicesProtocols {
  constructor (private readonly orderProgressHandlers: OrderProgressHandlers) {}

  public create (): CreateOrderProgress {
    return new CreateOrderProgress(this.orderProgressHandlers)
  }

  public find (): FindOrderProgress {
    return new FindOrderProgress(this.orderProgressHandlers)
  }

  public update (): UpdateOrderProgress {
    return new UpdateOrderProgress(this.orderProgressHandlers)
  }
}
