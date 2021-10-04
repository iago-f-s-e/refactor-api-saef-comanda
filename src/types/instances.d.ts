import { EmployeeServices } from '@auth/services'
import { TableServices } from '@domain/services'

export interface Instances {
  employee: EmployeeServices

  table: TableServices
}
