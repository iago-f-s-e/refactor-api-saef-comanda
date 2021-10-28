import { BudgetMappingProtocols } from '../contracts'
import { budget } from './budget'
import { budgets } from './budgets'

export function budgetMapping (): BudgetMappingProtocols {
  return {
    budget,
    budgets
  }
}
