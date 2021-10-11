import { PizzaFollowUpHandlers } from '@domain/infra'
import { PizzaFollowUpServicesProtocols } from '../contracts'
import { CreatePizzaFollowUp } from '.'

export class PizzaFollowUpServices implements PizzaFollowUpServicesProtocols {
  constructor (private readonly pizzaFollowUpHandlers: PizzaFollowUpHandlers) {}

  public create (): CreatePizzaFollowUp {
    return new CreatePizzaFollowUp(this.pizzaFollowUpHandlers)
  }
}
