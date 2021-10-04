import { FindTable } from '../implementations'

export interface TableServicesProtocols {
  find: () => FindTable
}
