import { BudgetProduct } from '@src/modules/domain/entities'
import { BudgetProductsMappingProps, ResponseCreateBudgetProducts } from '../contracts'
import { createBudgetProductProps } from './createBudgetProductProps'

export function createBudgetProductsProps ({ budget, index, props }: BudgetProductsMappingProps): ResponseCreateBudgetProducts {
  const budgetProducts: BudgetProduct[] = []

  let productIndex = index
  let value: number = 0

  for (const prop of props) {
    const budgetProduct = createBudgetProductProps({ ...prop, budget, productIndex })

    budgetProducts.push(budgetProduct)

    value += budgetProduct.quantity * budgetProduct.price
    productIndex++
  }

  return { budgetProducts, value }
}
