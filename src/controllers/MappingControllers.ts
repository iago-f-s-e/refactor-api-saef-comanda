import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeeController } from '@auth/controllers'
import { TableController, GroupController } from '@domain/controllers'

@Controller('')
@ChildControllers([
  new EmployeeController(),
  new TableController(),
  new GroupController()
])
export class MappingControllers {}
