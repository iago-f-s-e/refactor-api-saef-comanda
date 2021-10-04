import { typeormHandlers } from '@src/infra'
import { Instances } from '@src/types/instances'

import { Employee } from '@auth/entities'
import { EmployeeServices } from '@auth/services'

export function initializeInstances (): Instances {
  return {
    employee: new EmployeeServices(typeormHandlers(Employee))
  }
}
