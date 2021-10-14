import { OrderProgress } from '@helpers/entities'

export interface FindOrderProgressProtocols {
  byBudgetCode: (budgetCode: number) => Promise<OrderProgress>
}
