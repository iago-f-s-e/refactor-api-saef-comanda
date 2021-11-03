import { BudgetProduct } from '@domain/entities'
import { BudgetProductHandlers } from '@domain/infra'
import { InsertResult } from 'typeorm'
import { CreateBudgetProductProtocols } from '../contracts'

export class CreateBudgetProduct implements CreateBudgetProductProtocols {
  constructor (private readonly budgetProductHandlers: BudgetProductHandlers) {}

  private async save (budgetProducts: BudgetProduct[]): Promise<InsertResult> {
    return this.budgetProductHandlers.queryBuilder.insert().values(budgetProducts).execute()
  }

  public async execute (budgetProducts: BudgetProduct[]): Promise<InsertResult> {
    return this.save(budgetProducts)
  }
}
