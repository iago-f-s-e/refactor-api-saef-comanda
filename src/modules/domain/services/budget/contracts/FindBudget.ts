import { Budget } from '@domain/entities'

export interface FindBudgetProtocols {
  byTable: (tableCode: number) => Promise<Budget[]>
}
