import { UpdateResult } from 'typeorm'

export interface UpdateOrderProgressProtocols {
  lastChange: (budgetCode: number) => Promise<UpdateResult>
}
