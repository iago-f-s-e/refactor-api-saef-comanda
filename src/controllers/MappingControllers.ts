import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeeController } from '@auth/controllers'
import { TableController } from '@domain/controllers'

@Controller('')
@ChildControllers([
  new EmployeeController(),
  new TableController()
])
export class MappingControllers {}
