import { FollowUp } from '@domain/controllers'
import { BudgetProduct, PizzaFollowUp } from '@src/modules/domain/entities'

export interface PizzaFollowUpsProps {
  pizza: BudgetProduct
  followUps: FollowUp[]
  productIndex: number
}

export interface PizzaFollowUpProps {
  pizza: BudgetProduct
  followUp: FollowUp
  productIndex: number
}

export interface PizzaFollowUpMappingProtocols {
  followUp: (props: PizzaFollowUpProps) => PizzaFollowUp
  followUps: (props: PizzaFollowUpsProps) => PizzaFollowUp[]
}
