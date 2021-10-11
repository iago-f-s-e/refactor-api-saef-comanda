import { BudgetProductMappingProtocols } from '../contracts'
import { createBudgetProductProps } from './createBudgetProductProps'
import { createBudgetProductsProps } from './createBudgetProductsProps'

export function budgerProductMapping (): BudgetProductMappingProtocols {
  return {
    createBudgetProductProps,
    createBudgetProductsProps
  }
}
