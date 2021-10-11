import { Sequential } from '@helpers/entities'
import { SequentialHandlers } from '@helpers/infra'
import { FindSequentialProtocols } from '../contracts'

export class FindSequential implements FindSequentialProtocols {
  constructor (private readonly sequentialHandlers: SequentialHandlers) {}

  public async execute (): Promise<Sequential> {
    const sequential = await this.sequentialHandlers.queryBuilder
      .getOne()

    if (!sequential) throw new Error('Sequential not found')

    return sequential
  }
}
