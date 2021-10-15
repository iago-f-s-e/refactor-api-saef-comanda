import { ChildControllers, ClassMiddleware, Controller } from '@overnightjs/core'
import { authEmployee } from '@auth/middlewares'
import { OrderPost } from './OrderPost'
import { OrderPut } from './OrderPut'

@Controller('comandas')
@ClassMiddleware(authEmployee)
@ChildControllers([
  new OrderPost(),
  new OrderPut()
])
export class OrderController {}
