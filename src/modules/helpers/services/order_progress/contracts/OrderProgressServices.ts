import { CreateOrderProgress, UpdateOrderProgress } from '../implementations'

export interface OrderProgressServicesProtocols {
  create: () => CreateOrderProgress
  update: () => UpdateOrderProgress
}
