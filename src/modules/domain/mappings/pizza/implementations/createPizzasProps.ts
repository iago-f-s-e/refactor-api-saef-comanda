import { BudgetProduct, PizzaFollowUp } from '@src/modules/domain/entities'
import { MappedPizzasWithFollowUp, PizzaMappingProps } from '../contracts'
import { createPizzaProps } from './createPizzaProps'

export function createPizzasProps ({ budget, index, props }: PizzaMappingProps): MappedPizzasWithFollowUp {
  const pizzas: BudgetProduct[] = []
  const pizzaFollowUps: PizzaFollowUp[][] = []

  let productIndex = index
  let productValue = 0

  for (const prop of props) {
    const { pizza, pizzaFollowUp, value } = createPizzaProps({ ...prop, productIndex, budget })

    pizzas.push(pizza)
    pizzaFollowUps.push(pizzaFollowUp)

    productValue += value
    productIndex++
  }

  return {
    pizzas,
    pizzaFollowUps,
    productIndex,
    value: productValue
  }
}
