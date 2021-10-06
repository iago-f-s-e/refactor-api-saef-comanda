import { EmployeeServices } from '@auth/services'
import { TableServices, GroupServices } from '@domain/services'

export interface Instances {
  employee: EmployeeServices

  group: GroupServices
  table: TableServices
}
