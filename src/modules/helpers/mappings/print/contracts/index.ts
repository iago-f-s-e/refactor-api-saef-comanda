import { Budget } from '@domain/entities'
import { RequestToCreateProductOrder } from '@src/modules/domain/controllers'
import { Instances } from '@src/types/instances'
import {
  OrdersByTableProps,
  OrderProps,
  PrintOrderByTable,
  PrintOrder,
  PrintBar,
  KitchenPizzaProps,
  PrintPizzaKitchen,
  KitchenProductProps,
  PrintProductKitchen,
  UpdateKitchenPizzaProps
} from '.'

export * from './Order'
export * from './Bar'
export * from './Kitchen'

export interface PrintProductProps {
  code: number
  name: string
  quantity: number
  unitValue: string
  value: string
  observation: string
}

export interface PrintKitchenOrBar {
  budgetCode: string
  orderCode: string
  tableCode: number
  date: string
  time: string
}

export interface UpdateKitchenOrBarProps extends Pick<KitchenPizzaProps, 'budget'> {
  products: RequestToCreateProductOrder[]
}

export interface PrintMapping {
  bar: (budget: Budget) => PrintBar
  order: (props: OrderProps) => PrintOrder
  kitchenPizzas: (props: KitchenPizzaProps, instances: Instances) => Promise<PrintPizzaKitchen>
  kitchenProducts: (props: KitchenProductProps) => PrintProductKitchen
  ordersByTable: (props: OrdersByTableProps) => PrintOrderByTable
  updateKitchenPizzas: (props: UpdateKitchenPizzaProps) => PrintPizzaKitchen
  updateKitchenOrBar: (props: UpdateKitchenOrBarProps, instances: Instances) => Promise<{kitchen: PrintProductKitchen, bar: PrintBar}>
}
