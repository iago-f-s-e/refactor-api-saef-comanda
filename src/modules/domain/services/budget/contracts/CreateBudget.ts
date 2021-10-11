import { Budget } from '@domain/entities'

export interface CreateBudgetProps {
  budgetCode: number
  employeeCode: number
  value: number
  tableCode: number
  order: {
    orderIdentifier: string
  }
}

export interface CreateBudgetProtocols {
  execute: (props: CreateBudgetProps) => Promise<Budget>
}
