import { Budget } from '@domain/entities'
import { BudgetHandlers } from '@domain/infra'
import { CreateBudgetProtocols, CreateBudgetProps } from '../contracts'

export class CreateBudget implements CreateBudgetProtocols {
  constructor (private readonly budgetHandles: BudgetHandlers) {}

  private create (props: CreateBudgetProps): Budget {
    return this.budgetHandles.repository.create(props)
  }

  private async save (budget: Budget): Promise<Budget> {
    return this.budgetHandles.repository.save(budget)
  }

  public async execute (props: CreateBudgetProps): Promise<Budget> {
    return this.save(this.create(props))
  }
}
