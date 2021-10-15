import { PrintOrderByTable, PrintOrder, PrintBar, PrintPizzaKitchen, PrintProductKitchen } from '@helpers/mappings'
import { Paths } from '.'

export interface CreateScript {
  bar: (print: PrintBar, paths: Paths) => void
  order: (print: PrintOrder, paths: Paths) => void
  kitchenPizzas: (print: PrintPizzaKitchen, paths: Paths) => void
  kitchenProducts: (print: PrintProductKitchen, paths: Paths) => void
  ordersByTable: (print: PrintOrderByTable, paths: Paths) => void
}
