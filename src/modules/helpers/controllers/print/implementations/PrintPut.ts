import { Controller, Put } from '@overnightjs/core'
import { Request, Response } from 'express'
import { PrintPutProtocols, RequestToUpdatePrint } from '../contracts'
import { printMapping } from '@helpers/mappings'
import { printAtTheBar, printAtTheKitchen } from '@helpers/functions'

@Controller('')
export class PrintPut implements PrintPutProtocols {
  @Put('')
  public async requestToUpdatePrint (request: Request, response: Response): Promise<Response> {
    const { codigo: budgetCode, pizzas, produtos }: RequestToUpdatePrint = request.body
    const { instances } = request

    try {
      const budget = await instances.budget.find().byCode(budgetCode)

      if (pizzas && pizzas.length) {
        const printProps = printMapping().updateKitchenPizzas({ budget, pizzas })

        printAtTheKitchen('PIZZAS', printProps)
      }

      if (produtos && produtos.length) {
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
