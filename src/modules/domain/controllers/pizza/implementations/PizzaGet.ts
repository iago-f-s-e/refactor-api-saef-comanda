import { Controller, Get } from '@overnightjs/core'
import { pizzaMapping, pizzaFlavorsMapping } from '@domain/mappings'
import { Request, Response } from 'express'
import { PizzaGetProtocols } from '../contracts'

@Controller('')
export class PizzaGet implements PizzaGetProtocols {
  @Get('flavors')
  // @Middleware(authEmployee)
  public async requestToListFlavors (request: Request, response: Response): Promise<Response> {
    const { instances } = request
    const { sizeCode: pizzaCode } = request.query

    const flavors = pizzaFlavorsMapping()
      .flavors(await instances.pizzaFlavors.find().byPizzaCode(parseInt(pizzaCode as string)))

    return response.status(200).json({ results: flavors })
  }

  @Get('')
  public async requestToList (request: Request, response: Response): Promise<Response> {
    const { instances } = request

    const pizzas = pizzaMapping().pizzas(await instances.pizza.find().execute())

    return response.status(200).json({ results: pizzas })
  }
}
