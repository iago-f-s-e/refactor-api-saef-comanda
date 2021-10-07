import { typeormHandlers } from '@src/infra'
import { Instances } from '@src/types/instances'

import { Employee } from '@auth/entities'
import { EmployeeServices } from '@auth/services'

import { Table, Group, Pizza } from '@domain/entities'
import { TableServices, GroupServices, PizzaServices } from '@domain/services'

export function initializeInstances (): Instances {
  return {
    employee: new EmployeeServices(typeormHandlers(Employee)),

    group: new GroupServices(typeormHandlers(Group)),
    pizza: new PizzaServices(typeormHandlers(Pizza)),
    table: new TableServices(typeormHandlers(Table))
  }
}
