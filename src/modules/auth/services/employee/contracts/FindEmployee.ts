import { Employee } from '@auth/entities'

export interface FindEmployeeProtocols {
  byCode: (employeeCode: number) => Promise<Employee>
}
