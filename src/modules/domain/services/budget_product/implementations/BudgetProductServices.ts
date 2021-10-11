import { BudgetProductHandlers } from '@domain/infra'
import { BudgetProductServicesProtocols } from '../contracts'
import { CreateBudgetProduct } from '.'

export class BudgetProductServices implements BudgetProductServicesProtocols {
  constructor (private readonly budgetProductHandlers: BudgetProductHandlers) {}

  public create (): CreateBudgetProduct {
    return new CreateBudgetProduct(this.budgetProductHandlers)
  }
}
