import { ChildControllers, Controller } from '@overnightjs/core'
import { EmployeeController } from '@auth/controllers'
import { TableController, GroupController, PizzaController, OrderController } from '@domain/controllers'
import { ConfigController, PrintController } from '@src/modules/helpers/controllers'

@Controller('')
@ChildControllers([
  new EmployeeController(),
  new TableController(),
  new GroupController(),
  new PizzaController(),
  new ConfigController(),
  new OrderController(),
  new PrintController()
])
export class MappingControllers {}
