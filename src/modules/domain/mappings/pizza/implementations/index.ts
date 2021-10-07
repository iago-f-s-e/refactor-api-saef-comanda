import { PizzaMappingProtocols } from '../contracts'
import { pizza } from './pizza'
import { pizzas } from './pizzas'

export function pizzaMapping (): PizzaMappingProtocols {
  return {
    pizza,
    pizzas
  }
}
