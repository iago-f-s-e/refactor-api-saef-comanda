import { EmployeeServices } from '@auth/services'
import { TableServices, GroupServices, PizzaServices } from '@domain/services'

export interface Instances {
  employee: EmployeeServices

  group: GroupServices
  pizza: PizzaServices
  table: TableServices
}
