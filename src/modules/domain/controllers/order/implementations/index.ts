import { ChildControllers, Controller } from '@overnightjs/core'
import { OrderPost } from './OrderPost'

@Controller('comandas')
@ChildControllers([
  new OrderPost()
])
export class OrderController {}
