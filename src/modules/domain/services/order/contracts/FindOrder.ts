import { Order } from '@domain/entities'

export interface FindOrderProtocols {
  inUse: (identifier: string) => Promise<Order | undefined>
}
