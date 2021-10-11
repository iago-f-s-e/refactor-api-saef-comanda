import { Controller, Middleware, Post } from '@overnightjs/core'
import { beginTransaction } from '@src/middlewares'
import { budgerProductMapping, pizzaMapping } from '@src/modules/domain/mappings'
import { Request, Response } from 'express'
import { OrderPostProtocols, RequestToCreateOrder } from '../contracts'

@Controller('')
export class OrderPost implements OrderPostProtocols {
  @Post('')
  @Middleware(beginTransaction)
  public async requestToCreate (request: Request, response: Response): Promise<Response> {
    const { instances, transactions } = request
    const props: RequestToCreateOrder = request.body

    try {
      const useOrder = props.usaComanda

      if (useOrder) {
        const orderExists = await instances.order.find().inUse(props.numero.toString())

        if (orderExists) throw new Error('Order in use')
      }

      const table = await instances.table.find().byTableCode(props.mesa)

      const sequential = await instances.sequential.find().execute()

      const budgetCode = sequential.budgetCode + 1

      await instances.sequential.update().budgetCode(budgetCode)

      const budget = await instances.budget.create().execute({
        budgetCode,
        employeeCode: props.garçom,
        value: props.valor,
        tableCode: table.tableCode,
        order: {
          orderIdentifier: props.numero.toString()
        }
      })

      let productIndex = 1

      if (props.pizzas) {
        const { productIndex: index, pizzas, pizzaFollowUps } = pizzaMapping()
          .createPizzasProps({ props: props.pizzas, budget, index: productIndex })

        await instances.budgetProducts.create().execute(pizzas)
        await instances.pizzaFollowUp.create().execute(pizzaFollowUps)

        productIndex = index
      }

      if (props.produtos) {
        const budgetProducts = budgerProductMapping().createBudgetProductsProps({
          budget,
          index: productIndex,
          props: props.produtos
        })

        await instances.budgetProducts.create().execute(budgetProducts)
      }

      await instances.orderProgress.create().execute({ budgetCode })
      await instances.table.update().occupy(table.tableCode)

      await transactions.commit()

      return response.status(200).json()
    } catch (error: any) {
      await transactions.rollback()

      return response.status(400).json({ error: error.message })
    }
  }
}
