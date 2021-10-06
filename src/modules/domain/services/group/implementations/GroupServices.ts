import { GroupServicesProtocols } from '../contracts'
import { GroupHandlers } from '@domain/infra'
import { FindGroup } from './FindGroup'

export class GroupServices implements GroupServicesProtocols {
  constructor (private readonly groupHandles: GroupHandlers) {}

  public find (): FindGroup {
    return new FindGroup(this.groupHandles)
  }
}
