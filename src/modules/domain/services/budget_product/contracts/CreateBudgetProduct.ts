import { BudgetProduct } from '@domain/entities'
import { InsertResult } from 'typeorm'

export interface CreateBudgetProductProtocols {
  execute: (budgetProducts: BudgetProduct[]) => Promise<InsertResult>
}
