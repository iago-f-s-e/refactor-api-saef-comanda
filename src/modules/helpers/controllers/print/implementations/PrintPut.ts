import { Controller, Put } from '@overnightjs/core'
import { Product } from '@domain/entities'
import { Request, Response } from 'express'
import { PrintPutProtocols, RequestToUpdatePrint } from '../contracts'
import { printMapping } from '@src/modules/helpers/mappings'
import { printAtTheBar, printAtTheKitchen } from '@src/modules/helpers/helpers'

@Controller('')
export class PrintPut implements PrintPutProtocols {
  @Put('')
  public async requestToUpdatePrint (request: Request, response: Response): Promise<Response> {
    const { codigo: budgetCode, pizzas, produtos }: RequestToUpdatePrint = request.body
    const { instances } = request

    try {
      const budget = await instances.budget.find().byCode(budgetCode)

      if (pizzas) {
        const pizzasEntity: Product[] = []
        for (const pizza of pizzas) {
          const pizzaEntity = await instances.product.find().byProductCode(pizza.codigo)

          pizzasEntity.push(pizzaEntity)
        }

        const printProps = await printMapping().updateKitchenPizzas({ budget, pizzas }, instances)

        printAtTheKitchen('PIZZAS', printProps)
      }

      if (produtos) {
        const { bar, kitchen } = await printMapping().updateKitchenOrBar({ budget, products: produtos }, instances)

        if (bar.products.length) printAtTheBar(bar)

        if (kitchen.products.length) printAtTheKitchen('PRODUCTS', kitchen)
      }

      return response.status(200).json()
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }
}
