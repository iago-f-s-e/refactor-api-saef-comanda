import { BudgetProductMappingProtocols } from '../contracts'
import { createBudgetProductProps } from './createBudgetProductProps'
import { createBudgetProductsProps } from './createBudgetProductsProps'
import { separatePizzas } from './separatePizzas'

export function budgerProductMapping (): BudgetProductMappingProtocols {
  return {
    createBudgetProductProps,
    createBudgetProductsProps,
    separatePizzas
  }
}
