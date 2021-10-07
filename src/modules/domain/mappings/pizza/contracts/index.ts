import { Pizza } from '@domain/entities'
import { MappedPizza } from '@domain/controllers'

export interface PizzaMappingProtocols{
  pizza: (entity: Pizza) => MappedPizza
  pizzas: (entities: Pizza[]) => MappedPizza[]
}
