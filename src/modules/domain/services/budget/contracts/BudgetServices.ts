import { CreateBudget, FindBudget } from '../implementations'

export interface BudgetServicesProtocols {
  create: () => CreateBudget
  find: () => FindBudget
}
