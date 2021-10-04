import { Employee } from '@auth/entities'
import { EmployeeHandlers } from '@auth/infra'
import { FindEmployeeProtocols } from '../contracts'

export class FindEmployee implements FindEmployeeProtocols {
  constructor (private readonly employeeHandlers: EmployeeHandlers) {}

  public async byCode (employeeCode: number): Promise<Employee> {
    const employee = await this.employeeHandlers.queryBuilder
      .where('Employee.employeeCode = :employeeCode', { employeeCode })
      .innerJoinAndSelect('Employee.role', 'role')
      .innerJoinAndSelect('Employee.passwords', 'passwords')
      .getOne()

    if (!employee) throw new Error('Employee not found')

    return employee
  }
}
