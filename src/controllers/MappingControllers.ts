import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeeController } from '@auth/controllers'

@Controller('')
@ChildControllers([
  new EmployeeController()
])
export class MappingControllers {}
