import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeeController } from '@auth/controllers'
import { TableController, GroupController, PizzaController } from '@domain/controllers'

@Controller('')
@ChildControllers([
  new EmployeeController(),
  new TableController(),
  new GroupController(),
  new PizzaController()
])
export class MappingControllers {}
