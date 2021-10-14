import { Budget } from '@domain/entities'
import { Controller, Middleware, Post } from '@overnightjs/core'
import { beginTransaction } from '@src/middlewares'
import { budgerProductMapping } from '@src/modules/domain/mappings'
import { printAtTheBar, printAtTheKitchen, printOrder, printOrdersByTable } from '@src/modules/helpers/helpers'
import { printMapping } from '@src/modules/helpers/mappings'
import { Request, Response } from 'express'
import { PrintPostProtocols } from '../contracts'

@Controller('')
export class PrintPost implements PrintPostProtocols {
  private getFirstBudgetCode (budgets: Budget[]): number {
    return budgets
      .sort((prev, next) => prev.budgetCode - next.budgetCode)[0]
      .budgetCode
  }

  private getCode (query: any): number {
    if (Number.isNaN(Number(query)) || !Number.isInteger(Number(query))) throw new Error('Invalid query')

    return parseInt(query)
  }

  @Post('orders_by_table')
  public async requestToPrintOrdersByTable (request: Request, response: Response): Promise<Response> {
    const { table } = request.query
    const { instances } = request

    try {
      const tableCode = this.getCode(table)

      const budgets = await instances.budget.find().byTable(tableCode)

      const firstBudgetCode = this.getFirstBudgetCode(budgets)

      const orderProgress = await instances.orderProgress.find().byBudgetCode(firstBudgetCode)

      const printProps = printMapping().ordersByTable({ budgets, orderProgress, tableCode })

      printOrdersByTable(printProps)

      return response.status(200).json()
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }

  @Post('order')
  public async requestToPrintOrder (request: Request, response: Response): Promise<Response> {
    const { budget: queryBudget } = request.query
    const { instances } = request

    try {
      const budgetCode = this.getCode(queryBudget)

      const budget = await instances.budget.find().byCode(budgetCode)

      const orderProgress = await instances.orderProgress.find().byBudgetCode(budgetCode)

      const printProps = printMapping().order({ budget, orderProgress })

      printOrder(printProps)

      return response.status(200).json()
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }

  @Post('bar')
  public async requestToPrintAtTheBar (request: Request, response: Response): Promise<Response> {
    const { budget: queryBudget } = request.query
    const { instances } = request

    try {
      const budgetCode = this.getCode(queryBudget)

      const budget = await instances.budget.find().byCode(budgetCode)

      const printProps = printMapping().bar(budget)

      if (printProps.products.length) {
        printAtTheBar(printProps)
      }

      return response.status(200).json()
    } catch (error: any) {
      return response.status(400).json({ error: error.message })
    }
  }

  @Post('kitchen')
  @Middleware(beginTransaction)
  public async requestToPrintAtTheKitchen (request: Request, response: Response): Promise<Response> {
    const { budget: queryBudget } = request.query
    const { instances, transactions } = request

    try {
      const budgetCode = this.getCode(queryBudget)

      const budget = await instances.budget.find().byCode(budgetCode)

      const { pizzas, products } = budgerProductMapping().separatePizzas(budget.products)

      if (products.length) {
        const printProps = printMapping().kitchenProducts({ budget, products })

        printAtTheKitchen('PRODUCTS', printProps)
      }

      if (pizzas.length) {
        const printProps = await printMapping().kitchenPizzas({ budget, pizzas }, instances)

        printAtTheKitchen('PIZZAS', printProps)
      }

      await transactions.commit()

      return response.status(200).json()
    } catch (error: any) {
      await transactions.rollback()
      return response.status(400).json({ error: error.message })
    }
  }
}
