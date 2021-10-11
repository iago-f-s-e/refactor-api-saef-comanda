import { TableHandlers } from '@domain/infra'
import { TableServicesProtocols } from '../contracts'

import { FindTable, UpdateTable } from '.'

export class TableServices implements TableServicesProtocols {
  constructor (private readonly tableHandles: TableHandlers) {}

  public find (): FindTable {
    return new FindTable(this.tableHandles)
  }

  public update (): UpdateTable {
    return new UpdateTable(this.tableHandles)
  }
}
