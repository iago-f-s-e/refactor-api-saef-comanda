import { Config } from '@helpers/entities'

export interface FindConfigProtocols {
  execute: () => Promise<Config>
}
