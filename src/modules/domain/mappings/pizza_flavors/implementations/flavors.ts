import { PizzaFlavorProps } from '@domain/services'
import { MappedPizzaFlavors } from '@domain/controllers'
import { flavor } from './flavor'

export function flavors (entities: PizzaFlavorProps[]): MappedPizzaFlavors[] {
  return entities.length
    ? entities
      .map(entity => flavor(entity))
      .sort((prev, next) => prev.name.localeCompare(next.name))
    : []
}
