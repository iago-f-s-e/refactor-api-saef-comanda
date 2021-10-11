import { pizzaFollowUpMapping } from '@domain/mappings'
import { MappedPizzaWithFollowUp, MappedPizzaWithFollowUpProps } from '../contracts'
import { typeormHandlers } from '@src/infra'
import { BudgetProduct } from '@src/modules/domain/entities'

export function createPizzaProps (props: MappedPizzaWithFollowUpProps): MappedPizzaWithFollowUp {
  const pizza = getPizzaProps(props)
  return {
    pizza,
    pizzaFollowUp: pizzaFollowUpMapping().followUps({
      pizza,
      followUps: props.acompanhamentos,
      productIndex: props.productIndex
    })
  }
}

function getPizzaProps ({ productIndex, preço, codigo, budget }: MappedPizzaWithFollowUpProps): BudgetProduct {
  const handler = typeormHandlers(BudgetProduct)

  return handler.repository.create({
    budgetProductCode: productIndex,
    price: preço,
    productCode: codigo,
    value: preço,
    budget: budget,
    quantity: 1
  })
}
