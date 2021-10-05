import { OrderMappingProtocols } from '../contracts'
import { order } from './order'
import { orders } from './orders'

export function orderMapping (): OrderMappingProtocols {
  return {
    order,
    orders
  }
}
