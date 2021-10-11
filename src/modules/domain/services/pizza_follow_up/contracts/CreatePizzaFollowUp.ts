
import { PizzaFollowUp } from '@domain/entities'
import { InsertResult } from 'typeorm'

export interface CreatePizzaFollowUpProtocols {
  execute: (pizzaFollowUps: PizzaFollowUp[][]) => Promise<InsertResult[]>
}
