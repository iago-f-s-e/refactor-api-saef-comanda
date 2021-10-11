import { SequentialServicesProtocols } from '../contracts'
import { SequentialHandlers } from '@helpers/infra'
import { FindSequential, UpdateSequential } from '.'

export class SequentialServices implements SequentialServicesProtocols {
  constructor (private readonly sequentialHandlers: SequentialHandlers) {}

  public find (): FindSequential {
    return new FindSequential(this.sequentialHandlers)
  }

  public update (): UpdateSequential {
    return new UpdateSequential(this.sequentialHandlers)
  }
}
