import { typeormHandlers } from '@src/infra'
import { Instances } from '@src/types/instances'

import { Employee } from '@auth/entities'
import { EmployeeServices } from '@auth/services'

import { Table, Group } from '@domain/entities'
import { TableServices, GroupServices } from '@domain/services'

export function initializeInstances (): Instances {
  return {
    employee: new EmployeeServices(typeormHandlers(Employee)),

    group: new GroupServices(typeormHandlers(Group)),
    table: new TableServices(typeormHandlers(Table))
  }
}
