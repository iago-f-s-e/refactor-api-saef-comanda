import { Budget, BudgetProduct } from '@domain/entities'
import { RequestToCreatePizzaOrder } from '@domain/controllers'
import { PrintProductProps, PrintKitchenOrBar } from '.'

export interface KitchenPizzaProps {
  budget: Budget,
  pizzas: BudgetProduct[]
}

export interface UpdateKitchenPizzaProps extends Pick<KitchenPizzaProps, 'budget'> {
  pizzas: RequestToCreatePizzaOrder[]
}

export interface KitchenProductProps {
  budget: Budget,
  products: BudgetProduct[]
}

export interface PrintFollowUpProps {
  name: string
  quantity: number
}

export interface PrintKitchenProductProps extends Omit<PrintProductProps, 'unitValue' | 'value'> {}

export interface PrintKitchenPizzaProps extends Omit<PrintProductProps, 'unitValue' | 'value'>{
  followUps: PrintFollowUpProps[]
}

export interface PrintPizzaKitchen extends PrintKitchenOrBar {
  pizzas: PrintKitchenPizzaProps[]
}

export interface PrintProductKitchen extends PrintKitchenOrBar {
  products: PrintKitchenProductProps[]
}
