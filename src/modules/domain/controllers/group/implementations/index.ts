import { ChildControllers, Controller } from '@overnightjs/core'
import { GroupGet } from './GroupGet'

@Controller('grupos')
@ChildControllers([
  new GroupGet()
])
export class GroupController {}
