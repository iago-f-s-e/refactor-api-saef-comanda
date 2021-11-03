import { Budget, BudgetProduct, Pizza, PizzaFollowUp } from '@domain/entities'
import { MappedPizza, RequestToCreatePizzaOrder } from '@domain/controllers'

export interface MappedPizzaWithFollowUpProps extends RequestToCreatePizzaOrder {
  budget: Budget
  productIndex: number
}

export interface MappedPizzaWithFollowUp {
  pizza: BudgetProduct
  pizzaFollowUp: PizzaFollowUp[]
  value: number
}

export interface MappedPizzasWithFollowUp {
  pizzas: BudgetProduct[]
  pizzaFollowUps: PizzaFollowUp[][]
  productIndex: number
  value: number
}

export interface PizzaMappingProps {
  props: RequestToCreatePizzaOrder[],
  budget: Budget,
  index: number
}

export interface PizzaMappingProtocols{
  pizza: (entity: Pizza) => MappedPizza
  pizzas: (entities: Pizza[]) => MappedPizza[]
  createPizzaProps: (props: MappedPizzaWithFollowUpProps) => MappedPizzaWithFollowUp
  createPizzasProps: (props: PizzaMappingProps) => MappedPizzasWithFollowUp
}
