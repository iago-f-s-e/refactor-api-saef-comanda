import { BudgetProduct } from '@src/modules/domain/entities'
import { BudgetProductsMappingProps } from '../contracts'
import { createBudgetProductProps } from './createBudgetProductProps'

export function createBudgetProductsProps ({ budget, index, props }: BudgetProductsMappingProps): BudgetProduct[] {
  const budgerProducts: BudgetProduct[] = []

  let productIndex = index

  for (const prop of props) {
    const budgetProduct = createBudgetProductProps({ ...prop, budget, productIndex })

    budgerProducts.push(budgetProduct)

    productIndex++
  }

  return budgerProducts
}
