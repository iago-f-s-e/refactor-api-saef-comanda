import { ChildControllers, Controller } from '@overnightjs/core'
import { ConfigGet } from './ConfigGet'

@Controller('configuracao')
@ChildControllers([
  new ConfigGet()
])
export class ConfigController {}
