import { OrderProgressHandlers } from '@helpers/infra'
import { OrderProgress } from '@helpers/entities'
import { CreateOrderProgressProtocols, CreateOrderProgressProps } from '../contracts'

export class CreateOrderProgress implements CreateOrderProgressProtocols {
  constructor (private readonly orderProgressHandlers: OrderProgressHandlers) {}

  private create (props: CreateOrderProgressProps): OrderProgress {
    return this.orderProgressHandlers.repository.create(props)
  }

  private async save (orderProgress: OrderProgress): Promise<OrderProgress> {
    return this.orderProgressHandlers.repository.save(orderProgress)
  }

  public async execute (props: CreateOrderProgressProps): Promise<OrderProgress> {
    return this.save(this.create(props))
  }
}
