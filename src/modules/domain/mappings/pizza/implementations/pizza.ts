import { Pizza } from '@domain/entities'
import { MappedPizza } from '@domain/controllers'

export function pizza ({ maxSlices, pizzaCode, description }: Pizza): MappedPizza {
  return {
    code: pizzaCode,
    name: description.toUpperCase(),
    slices: maxSlices
  }
}
