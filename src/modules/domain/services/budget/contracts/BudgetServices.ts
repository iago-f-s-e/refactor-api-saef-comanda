import { CreateBudget, FindBudget, UpdateBudget } from '../implementations'

export interface BudgetServicesProtocols {
  create: () => CreateBudget
  find: () => FindBudget
  update: () => UpdateBudget
}
