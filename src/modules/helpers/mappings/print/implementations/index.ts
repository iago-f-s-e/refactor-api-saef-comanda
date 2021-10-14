import { PrintMapping } from '../contracts'
import { ordersByTable } from './ordersByTable'
import { order } from './order'
import { bar } from './bar'
import { kitchenPizzas } from './kitchenPizzas'
import { kitchenProducts } from './kitchenProducts'
import { updateKitchenPizzas } from './updateKitchenPizzas'
import { updateKitchenOrBar } from './updateKitchenOrBar'

export function printMapping (): PrintMapping {
  return {
    bar,
    order,
    kitchenPizzas,
    kitchenProducts,
    ordersByTable,
    updateKitchenPizzas,
    updateKitchenOrBar
  }
}
