import { CreateOrderProgress, UpdateOrderProgress, FindOrderProgress } from '../implementations'

export interface OrderProgressServicesProtocols {
  create: () => CreateOrderProgress
  find: () => FindOrderProgress
  update: () => UpdateOrderProgress
}
