import { BudgetServicesProtocols } from '../contracts'
import { BudgetHandlers } from '@domain/infra'
import { CreateBudget, FindBudget, UpdateBudget } from '.'

export class BudgetServices implements BudgetServicesProtocols {
  constructor (private readonly budgetHandlers: BudgetHandlers) {}

  public create (): CreateBudget {
    return new CreateBudget(this.budgetHandlers)
  }

  public find (): FindBudget {
    return new FindBudget(this.budgetHandlers)
  }

  public update (): UpdateBudget {
    return new UpdateBudget(this.budgetHandlers)
  }
}
