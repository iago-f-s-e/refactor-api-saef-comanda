import { typeormHandlers } from '@src/infra'
import { Instances } from '@src/types/instances'

import { Employee } from '@auth/entities'
import { EmployeeServices } from '@auth/services'

import { Table } from '@domain/entities'
import { TableServices } from '@domain/services'

export function initializeInstances (): Instances {
  return {
    employee: new EmployeeServices(typeormHandlers(Employee)),

    table: new TableServices(typeormHandlers(Table))
  }
}
