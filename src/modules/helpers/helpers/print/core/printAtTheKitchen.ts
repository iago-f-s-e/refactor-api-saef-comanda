import { PrintPizzaKitchen, PrintProductKitchen } from '@helpers/mappings'
import { createScript } from '../scripts'
import { paths, print } from '../utils'

export function printAtTheKitchen (type: 'PIZZAS' | 'PRODUCTS', payload: PrintPizzaKitchen | PrintProductKitchen): void {
  const path = paths('KITCHEN')
  console.log('🚀 ~ file: printAtTheKitchen.ts ~ line 7 ~ printAtTheKitchen ~ path', path)

  if (type === 'PIZZAS') createScript().kitchenPizzas(payload as PrintPizzaKitchen, path)
  console.log('🚀 ~ file: printAtTheKitchen.ts ~ line 9 ~ printAtTheKitchen ~ payload', payload)

  if (type === 'PRODUCTS') createScript().kitchenProducts(payload as PrintProductKitchen, path)
  console.log('🚀 ~ file: printAtTheKitchen.ts ~ line 12 ~ printAtTheKitchen ~ payload', payload)

  print(path)
  console.log('🚀 ~ file: printAtTheKitchen.ts ~ line 15 ~ printAtTheKitchen ~ path', path)
}
