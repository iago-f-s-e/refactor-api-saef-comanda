import { UpdateResult } from 'typeorm'

export interface UpdateSequentialProtocols {
  budgetCode: (budgetCode: number) => Promise<UpdateResult>
}
