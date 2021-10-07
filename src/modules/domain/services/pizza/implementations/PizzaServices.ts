import { PizzaServicesProtocols } from '../contracts'
import { PizzaHandlers } from '@domain/infra'
import { FindPizza } from '.'

export class PizzaServices implements PizzaServicesProtocols {
  constructor (private readonly pizzaHandles: PizzaHandlers) {}

  public find (): FindPizza {
    return new FindPizza(this.pizzaHandles)
  }
}
