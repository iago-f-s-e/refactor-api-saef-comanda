import { FindTable, UpdateTable } from '../implementations'

export interface TableServicesProtocols {
  find: () => FindTable
  update: () => UpdateTable
}
