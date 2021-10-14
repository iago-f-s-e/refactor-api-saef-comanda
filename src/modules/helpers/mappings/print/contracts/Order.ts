import { Budget } from '@domain/entities'
import { OrderProgress } from '@src/modules/helpers/entities'
import { PrintProductProps } from '.'

export interface TableProps {
  number: number
  date: string
  hour: string
  minutes: string
}

export interface PrintOrder {
  budgetCode: string
  orderCode: string
  products: PrintProductProps[]
  value: number
  table: TableProps
}

export interface PrintOrderByTable extends Omit<PrintOrder, 'budgetCode' | 'orderCode'> {
  budgetCodes: string[]
  orderCodes: string[]
}

export interface OrderProps {
  budget: Budget
  orderProgress: OrderProgress
}

export interface OrdersByTableProps extends Pick<OrderProps, 'orderProgress'> {
  tableCode: number
  budgets: Budget[]
}
