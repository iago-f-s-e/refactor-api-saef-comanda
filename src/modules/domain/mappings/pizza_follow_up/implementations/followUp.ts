import { typeormHandlers } from '@src/infra'
import { PizzaFollowUp } from '@domain/entities'
import { PizzaFollowUpProps } from '../contracts'

export function followUp ({ followUp, pizza, productIndex }: PizzaFollowUpProps): PizzaFollowUp {
  const handler = typeormHandlers(PizzaFollowUp)

  return handler.repository.create({
    budgetCode: pizza.budget.budgetCode,
    productCode: pizza.productCode,
    productFollowUpCode: followUp.codigo,
    productIndex,
    slices: followUp.fatias,
    value: followUp.preço,
    observation: pizza.observation
  })
}
