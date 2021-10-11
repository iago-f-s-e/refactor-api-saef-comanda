import { BudgetProduct } from '@domain/entities'
import { MappedBudgetProduct } from '@domain/controllers'
import { budgetProduct } from './budgetProduct'

export function budgetProducts (entities: BudgetProduct[]): MappedBudgetProduct[] {
  return entities.length
    ? entities
      .map(entity => budgetProduct(entity))
      .sort((prev, next) => prev.ordinal - next.ordinal)
    : []
}
