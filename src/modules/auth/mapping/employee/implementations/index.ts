import { EmployeeMappingProtocols } from '../contracts'
import { employee } from './employee'
import { employeeWithToken } from './employeeWithToken'

export function employeeMapping (): EmployeeMappingProtocols {
  return {
    employee,
    employeeWithToken
  }
}
