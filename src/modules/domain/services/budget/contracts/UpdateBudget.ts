import { UpdateResult } from 'typeorm'

export interface UpdateBudgetProps {
  budgetCode: number
  value: number
}

export interface UpdateBudgetProtocols {
  value: (props: UpdateBudgetProps) => Promise<UpdateResult>
}
