import { PizzaFlavorsMappingProtocols } from '../contracts'
import { flavor } from './flavor'
import { flavors } from './flavors'

export function pizzaFlavorsMapping (): PizzaFlavorsMappingProtocols {
  return {
    flavor,
    flavors
  }
}
