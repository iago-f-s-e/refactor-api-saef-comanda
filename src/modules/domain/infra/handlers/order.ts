import { TypeormHandles } from '@src/infra'
import { Order } from '@domain/entities'

export interface OrderHandlers extends TypeormHandles<Order> {}
