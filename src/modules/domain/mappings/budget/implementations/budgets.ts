import { Budget } from '@domain/entities'
import { MappedOrder } from '@domain/controllers'
import { budget } from './budget'

export function budgets (entities: Budget[]): MappedOrder[] {
  return entities
    .map(entity => budget(entity))
    .sort((prev, next) => prev.codigo - next.codigo)
}
