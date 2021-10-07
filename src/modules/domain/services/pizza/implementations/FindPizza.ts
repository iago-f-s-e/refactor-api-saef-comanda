import { Pizza } from '@domain/entities'
import { PizzaHandlers } from '@src/modules/domain/infra'
import { FindPizzaProtocols } from '../contracts'

export class FindPizza implements FindPizzaProtocols {
  constructor (private readonly pizzaHandles: PizzaHandlers) {}

  public async execute (): Promise<Pizza[]> {
    return this.pizzaHandles.queryBuilder.getMany()
  }
}
