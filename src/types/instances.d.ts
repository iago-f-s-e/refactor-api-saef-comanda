import { EmployeeServices } from '@auth/services'
import { TableServices, GroupServices, PizzaServices, PizzaFlavorsServices } from '@domain/services'
import { ConfigServices } from '@helpers/services'

export interface Instances {
  employee: EmployeeServices

  group: GroupServices
  pizza: PizzaServices
  pizzaFlavors: PizzaFlavorsServices
  table: TableServices

  config: ConfigServices
}
