import { ChildControllers, Controller } from '@overnightjs/core'
import { PrintPost } from './PrintPost'
import { PrintPut } from './PrintPut'

@Controller('print')
// @ClassMiddleware(authEmployee)
@ChildControllers([
  new PrintPost(),
  new PrintPut()
])
export class PrintController {}
