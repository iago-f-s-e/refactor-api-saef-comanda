import { typeormHandlers } from '@src/infra'
import { Instances } from '@src/types/instances'

import { Employee } from '@auth/entities'
import { EmployeeServices } from '@auth/services'

import { Table, Group, Pizza, PizzaFlavors } from '@domain/entities'
import { TableServices, GroupServices, PizzaServices, PizzaFlavorsServices } from '@domain/services'

export function initializeInstances (): Instances {
  return {
    employee: new EmployeeServices(typeormHandlers(Employee)),

    group: new GroupServices(typeormHandlers(Group)),
    pizza: new PizzaServices(typeormHandlers(Pizza)),
    pizzaFlavors: new PizzaFlavorsServices(typeormHandlers(PizzaFlavors)),
    table: new TableServices(typeormHandlers(Table))
  }
}
