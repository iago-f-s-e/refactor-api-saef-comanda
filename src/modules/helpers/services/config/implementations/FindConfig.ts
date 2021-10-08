import { Config } from '@helpers/entities'
import { ConfigHandlers } from '@helpers/infra'
import { FindConfigProtocols } from '../contracts'

export class FindConfig implements FindConfigProtocols {
  constructor (private readonly configHandles: ConfigHandlers) {}

  public async execute (): Promise<Config> {
    const config = await this.configHandles.queryBuilder.getOne()

    if (!config) throw new Error('Config not found')

    return config
  }
}
