import { Employee } from '@auth/entities'
import { MappedEmployee, MappedEmployeeWithToken } from '@auth/controllers'

export interface EmployeeMappingProtocols {
  employee: (entity: Employee) => MappedEmployee
  employeeWithToken: (entity: Employee) => MappedEmployeeWithToken
}
