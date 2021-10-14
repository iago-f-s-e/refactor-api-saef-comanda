import { ChildControllers, Controller } from '@overnightjs/core'
import { PrintPost } from './PrintPost'
import { PrintPut } from './PrintPut'

@Controller('print')
@ChildControllers([
  new PrintPost(),
  new PrintPut()
])
export class PrintController {}
