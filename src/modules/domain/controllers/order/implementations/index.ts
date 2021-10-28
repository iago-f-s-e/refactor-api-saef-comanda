import { ChildControllers, Controller } from '@overnightjs/core'
import { OrderPost } from './OrderPost'
import { OrderPut } from './OrderPut'

@Controller('comandas')
@ChildControllers([
  new OrderPost(),
  new OrderPut()
])
export class OrderController {}
