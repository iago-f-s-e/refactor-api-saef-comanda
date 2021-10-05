import { Budget } from '@domain/entities'
import { MappedOrder } from '@domain/controllers'
import { order } from './order'

export function orders (entities: Budget[]): MappedOrder[] {
  return entities.length
    ? entities
      .map(entity => order(entity))
      .sort((prev, next) => prev.codigo - next.codigo)
    : []
}
