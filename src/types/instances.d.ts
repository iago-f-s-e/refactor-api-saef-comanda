import { EmployeeServices } from '@auth/services'
import { ConfigServices, OrderProgressServices, SequentialServices } from '@helpers/services'
import {
  TableServices,
  GroupServices,
  PizzaServices,
  PizzaFlavorsServices,
  BudgetServices,
  BudgetProductServices,
  PizzaFollowUpServices,
  OrderServices,
  ProductServices
} from '@domain/services'

export interface Instances {
  employee: EmployeeServices

  group: GroupServices
  pizza: PizzaServices
  pizzaFlavors: PizzaFlavorsServices
  pizzaFollowUp: PizzaFollowUpServices
  table: TableServices
  budget: BudgetServices
  budgetProducts: BudgetProductServices
  order: OrderServices
  product: ProductServices

  config: ConfigServices
  sequential: SequentialServices
  orderProgress: OrderProgressServices
}
