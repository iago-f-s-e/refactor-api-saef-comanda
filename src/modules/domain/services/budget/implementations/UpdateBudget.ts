import { BudgetHandlers } from '@domain/infra'
import { UpdateResult } from 'typeorm'
import { UpdateBudgetProtocols, UpdateBudgetProps } from '../contracts'

export class UpdateBudget implements UpdateBudgetProtocols {
  constructor (private readonly budgetHandles: BudgetHandlers) {}

  public value ({ budgetCode, value }: UpdateBudgetProps): Promise<UpdateResult> {
    return this.budgetHandles.repository.update({ budgetCode: budgetCode }, {
      value
    })
  }
}
