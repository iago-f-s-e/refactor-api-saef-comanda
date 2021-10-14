import { typeormHandlers } from '@src/infra'
import { Instances } from '@src/types/instances'

import { Employee } from '@auth/entities'
import { EmployeeServices } from '@auth/services'

import { Config, OrderProgress, Sequential } from '@helpers/entities'
import { ConfigServices, OrderProgressServices, SequentialServices } from '@helpers/services'

import {
  Table,
  Group,
  Pizza,
  PizzaFlavors,
  Budget,
  BudgetProduct,
  PizzaFollowUp,
  Order,
  Product
} from '@domain/entities'
import {
  TableServices,
  GroupServices,
  PizzaServices,
  PizzaFlavorsServices,
  PizzaFollowUpServices,
  BudgetServices,
  BudgetProductServices,
  OrderServices,
  ProductServices
} from '@domain/services'

export function initializeInstances (): Instances {
  return {
    employee: new EmployeeServices(typeormHandlers(Employee)),

    group: new GroupServices(typeormHandlers(Group)),
    pizza: new PizzaServices(typeormHandlers(Pizza)),
    pizzaFlavors: new PizzaFlavorsServices(typeormHandlers(PizzaFlavors)),
    pizzaFollowUp: new PizzaFollowUpServices(typeormHandlers(PizzaFollowUp)),
    table: new TableServices(typeormHandlers(Table)),
    budget: new BudgetServices(typeormHandlers(Budget)),
    budgetProducts: new BudgetProductServices(typeormHandlers(BudgetProduct)),
    order: new OrderServices(typeormHandlers(Order)),
    product: new ProductServices(typeormHandlers(Product)),

    config: new ConfigServices(typeormHandlers(Config)),
    sequential: new SequentialServices(typeormHandlers(Sequential)),
    orderProgress: new OrderProgressServices(typeormHandlers(OrderProgress))
  }
}
