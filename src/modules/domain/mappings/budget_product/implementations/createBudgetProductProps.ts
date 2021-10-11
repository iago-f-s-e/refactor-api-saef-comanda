import { typeormHandlers } from '@src/infra'
import { BudgetProduct } from '@domain/entities'
import { BudgetProductMappingProps } from '../contracts'

export function createBudgetProductProps (props: BudgetProductMappingProps): BudgetProduct {
  const handler = typeormHandlers(BudgetProduct)

  return handler.repository.create({
    budget: props.budget,
    budgetProductCode: props.productIndex,
    price: props.preço,
    value: props.preço,
    productCode: props.id,
    quantity: props.quantidade,
    observation: props.observacao
  })
}
