import { MappedPizzaFlavors } from '@domain/controllers'
import { PizzaFlavorProps } from '@domain/services'

export interface PizzaFlavorsMappingProtocols {
  flavor: (entity: PizzaFlavorProps) => MappedPizzaFlavors
  flavors: (entity: PizzaFlavorProps[]) => MappedPizzaFlavors[]
}
