import { EmployeeHandlers } from '@auth/infra'
import { EmployeeServicesProtocols } from '../contracts'
import { FindEmployee } from '.'

export class EmployeeServices implements EmployeeServicesProtocols {
  constructor (private readonly employeeHandlers: EmployeeHandlers) {}

  public find (): FindEmployee {
    return new FindEmployee(this.employeeHandlers)
  }
}
