import { Budget } from '@domain/entities'

export interface FindBudgetProtocols {
  byCode: (budgetCode: number) => Promise<Budget>
  byTable: (tableCode: number) => Promise<Budget[]>
}
