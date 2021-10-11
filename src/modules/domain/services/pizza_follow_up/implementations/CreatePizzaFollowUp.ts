import { PizzaFollowUpHandlers } from '@domain/infra'
import { PizzaFollowUp } from '@domain/entities'
import { CreatePizzaFollowUpProtocols } from '../contracts'
import { InsertResult } from 'typeorm'

export class CreatePizzaFollowUp implements CreatePizzaFollowUpProtocols {
  constructor (private readonly pizzaFollowUpHandlers: PizzaFollowUpHandlers) {}

  public async save (pizzaFollowUps: PizzaFollowUp[]): Promise<InsertResult> {
    return this.pizzaFollowUpHandlers.queryBuilder.insert().values(pizzaFollowUps).execute()
  }

  public async execute (pizzaFollowUps: PizzaFollowUp[][]): Promise<InsertResult[]> {
    const insertions = pizzaFollowUps.map(pizzaFollowUp => this.save(pizzaFollowUp))

    return Promise.all(insertions)
  }
}
