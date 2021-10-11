import { PizzaMappingProtocols } from '../contracts'
import { pizza } from './pizza'
import { pizzas } from './pizzas'
import { createPizzaProps } from './createPizzaProps'
import { createPizzasProps } from './createPizzasProps'

export function pizzaMapping (): PizzaMappingProtocols {
  return {
    createPizzaProps,
    createPizzasProps,
    pizza,
    pizzas
  }
}
