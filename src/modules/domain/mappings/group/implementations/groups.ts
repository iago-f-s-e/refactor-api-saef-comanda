import { Group } from '@domain/entities'
import { MappedGroup } from '@domain/controllers'
import { group } from './group'

export function groups (entities: Group[]): MappedGroup[] {
  return entities.length
    ? entities
      .map(entity => group(entity))
      .sort((prev, next) => prev.nome.localeCompare(next.nome))
    : []
}
