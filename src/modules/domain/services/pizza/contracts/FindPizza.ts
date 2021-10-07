import { Pizza } from '@domain/entities'

export interface FindPizzaProtocols {
  execute: () => Promise<Pizza[]>
}
