import { Budget } from '@domain/entities'
import { MappedOrder } from '@domain/controllers'

export interface OrderMappingProtocols {
  order: (entity: Budget) => MappedOrder
  orders: (entities: Budget[]) => MappedOrder[]
}
