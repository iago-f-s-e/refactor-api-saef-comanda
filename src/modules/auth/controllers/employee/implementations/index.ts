import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeeGet } from './EmployeeGet'

@Controller('funcionarios')
@ChildControllers([
  new EmployeeGet()
])
export class EmployeeController {}
