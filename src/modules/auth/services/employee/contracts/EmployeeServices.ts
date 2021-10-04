import { FindEmployee } from '../implementations'

export interface EmployeeServicesProtocols {
  find: () => FindEmployee
}
