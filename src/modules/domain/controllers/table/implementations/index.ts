import { ChildControllers, Controller } from '@overnightjs/core'
import { TableGet } from './TableGet'

@Controller('mesas')
@ChildControllers([
  new TableGet()
])
export class TableController {}
