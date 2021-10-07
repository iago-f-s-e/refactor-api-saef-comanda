import { ChildControllers, Controller } from '@overnightjs/core'
import { PizzaGet } from './PizzaGet'

@Controller('pizzas')
@ChildControllers([
  new PizzaGet()
])
export class PizzaController {}
