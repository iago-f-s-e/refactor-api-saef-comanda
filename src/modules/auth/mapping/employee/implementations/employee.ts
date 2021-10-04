import { Employee } from '@auth/entities'
import { MappedEmployee } from '@auth/controllers'

export function employee ({ employeeCode, employeeName, role }: Employee): MappedEmployee {
  return {
    codigo: employeeCode,
    nome: employeeName,
    cargo: role.roleName
  }
}
