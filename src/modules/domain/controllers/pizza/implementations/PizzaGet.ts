import { Controller, Get } from '@overnightjs/core'
import { pizzaMapping } from '@src/modules/domain/mappings'
import { Request, Response } from 'express'
import { PizzaGetProtocols } from '../contracts'

@Controller('')
export class PizzaGet implements PizzaGetProtocols {
  @Get('')
  public async requestToList (request: Request, response: Response): Promise<Response> {
    const { instances } = request

    const pizzas = pizzaMapping().pizzas(await instances.pizza.find().execute())

    return response.status(200).json(pizzas)
  }
}
