import { PizzaFollowUpMappingProtocols } from '../contracts'
import { followUp } from './followUp'
import { followUps } from './followUps'

export function pizzaFollowUpMapping (): PizzaFollowUpMappingProtocols {
  return {
    followUp,
    followUps
  }
}
