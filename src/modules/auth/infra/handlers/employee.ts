import { Employee } from '@auth/entities'
import { TypeormHandles } from '@src/infra'

export interface EmployeeHandlers extends TypeormHandles<Employee> {}
