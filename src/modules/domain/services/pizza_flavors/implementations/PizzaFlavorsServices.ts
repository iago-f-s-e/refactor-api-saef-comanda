import { PizzaFlavorsServicesProtocols } from '../contracts'
import { PizzaFlavorsHandlers } from '@domain/infra'
import { FindPizzaFlavors } from '.'

export class PizzaFlavorsServices implements PizzaFlavorsServicesProtocols {
  constructor (private readonly pizzaFlavorsHandles: PizzaFlavorsHandlers) {}

  public find ():FindPizzaFlavors {
    return new FindPizzaFlavors(this.pizzaFlavorsHandles)
  }
}
