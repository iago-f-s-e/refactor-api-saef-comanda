import { ConfigHandlers } from '@helpers/infra'
import { ConfigServicesProtocols } from '../contracts'
import { FindConfig } from '.'

export class ConfigServices implements ConfigServicesProtocols {
  constructor (private readonly configHandles: ConfigHandlers) {}

  public find (): FindConfig {
    return new FindConfig(this.configHandles)
  }
}
