import { PizzaFollowUp } from '@src/modules/domain/entities'
import { PizzaFollowUpsProps } from '../contracts'
import { followUp as mapFollowUp } from './followUp'

export function followUps ({ followUps, pizza, productIndex }: PizzaFollowUpsProps): PizzaFollowUp[] {
  return followUps.map(followUp => mapFollowUp({ followUp, pizza, productIndex }))
}
