import { Sequential } from '@helpers/entities'

export interface FindSequentialProtocols {
  execute: () => Promise<Sequential>
}
