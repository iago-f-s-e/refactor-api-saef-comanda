import { OrderProgress } from '@helpers/entities'

export interface CreateOrderProgressProps {
  budgetCode: number
}

export interface CreateOrderProgressProtocols {
  execute: (props: CreateOrderProgressProps) => Promise<OrderProgress>
}
