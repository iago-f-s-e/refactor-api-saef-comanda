import { SequentialHandlers } from '@helpers/infra'
import { UpdateResult } from 'typeorm'
import { UpdateSequentialProtocols } from '../contracts'

export class UpdateSequential implements UpdateSequentialProtocols {
  constructor (private readonly sequentialHandlers: SequentialHandlers) {}

  public async budgetCode (budgetCode: number): Promise<UpdateResult> {
    return this.sequentialHandlers.repository.update({ sequentialCode: 1 }, {
      budgetCode
    })
  }
}
