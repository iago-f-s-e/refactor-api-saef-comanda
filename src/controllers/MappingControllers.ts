import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeeController } from '@auth/controllers'
import { TableController, GroupController, PizzaController } from '@domain/controllers'
import { ConfigController } from '@src/modules/helpers/controllers'

@Controller('')
@ChildControllers([
  new EmployeeController(),
  new TableController(),
  new GroupController(),
  new PizzaController(),
  new ConfigController()
])
export class MappingControllers {}
