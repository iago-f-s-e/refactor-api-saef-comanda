import { CreatePizzaFollowUp, FindPizzaFollowUp } from '../implementations'

export interface PizzaFollowUpServicesProtocols {
  create: () => CreatePizzaFollowUp
  find: () => FindPizzaFollowUp
}
