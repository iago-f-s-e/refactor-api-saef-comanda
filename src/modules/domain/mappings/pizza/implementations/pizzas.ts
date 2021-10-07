import { Pizza } from '@domain/entities'
import { MappedPizza } from '@domain/controllers'
import { pizza } from './pizza'

export function pizzas (entities: Pizza[]): MappedPizza[] {
  return entities.length
    ? entities
      .map(entity => pizza(entity))
      .sort((prev, next) => prev.slices - next.slices)
    : []
}
