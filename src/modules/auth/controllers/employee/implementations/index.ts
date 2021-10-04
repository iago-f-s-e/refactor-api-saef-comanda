import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeePost } from './EmployeePost'

@Controller('funcionarios')
@ChildControllers([
  new EmployeePost()
])
export class EmployeeController {}
