import { CreateScript } from '../contracts'
import { ordersByTable } from './ordersByTable'
import { order } from './order'
import { bar } from './bar'
import { kitchenPizzas } from './kitchenPizzas'
import { kitchenProducts } from './kitchenProducts'

export function createScript (): CreateScript {
  return {
    bar,
    order,
    kitchenPizzas,
    kitchenProducts,
    ordersByTable
  }
}
