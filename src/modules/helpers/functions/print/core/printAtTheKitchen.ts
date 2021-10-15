import { PrintPizzaKitchen, PrintProductKitchen } from '@helpers/mappings'
import { createScript } from '../scripts'
import { paths, print } from '../utils'

export function printAtTheKitchen (type: 'PIZZAS' | 'PRODUCTS', payload: PrintPizzaKitchen | PrintProductKitchen): void {
  const path = paths('KITCHEN')

  if (type === 'PIZZAS') createScript().kitchenPizzas(payload as PrintPizzaKitchen, path)

  if (type === 'PRODUCTS') createScript().kitchenProducts(payload as PrintProductKitchen, path)

  print(path)
}
