
import { PizzaFollowUp } from '@domain/entities'

export interface FindPizzaFollowUpProps {
  budgetCode: number
  productIndex: number
}

export interface FindPizzaFollowUpProtocols {
  byBudgetAndProductIndex: (props: FindPizzaFollowUpProps) => Promise<PizzaFollowUp[]>
}
