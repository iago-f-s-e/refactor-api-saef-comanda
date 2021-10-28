import { Budget } from '@domain/entities'
import { MappedOrder } from '@domain/controllers'

export interface BudgetMappingProtocols {
  budget: (entity: Budget) => MappedOrder
  budgets: (entities: Budget[]) => MappedOrder[]
}
