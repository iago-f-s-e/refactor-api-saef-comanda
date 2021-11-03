import { BudgetProduct } from '@domain/entities'
import { Controller, Middleware, Put } from '@overnightjs/core'
import { beginTransaction } from '@src/middlewares'
import { budgerProductMapping, pizzaMapping } from '@src/modules/domain/mappings'
import { Request, Response } from 'express'
import { OrderPutProtocols, RequestToUpdateOrder } from '../contracts'

@Controller('produtos')
export class OrderPut implements OrderPutProtocols {
  private getProductIndex (products: BudgetProduct[]): number {
    const lastProductIndex = products
      .sort((prev, next) => next.budgetProductCode - prev.budgetProductCode)[0]
      .budgetProductCode

    return lastProductIndex + 1
  }

  @Put('adicionar')
  @Middleware(beginTransaction)
  public async requestToUpdate (request: Request, response: Response): Promise<Response> {
    const { instances, transactions } = request
    const props: RequestToUpdateOrder = request.body

    try {
      const budget = await instances.budget.find().byCode(props.comanda.codigo)
      let budgetValue = 0

      let productIndex = this.getProductIndex(budget.products)

      if (props.pizzas) {
        const { productIndex: index, pizzas, pizzaFollowUps, value: pizzasValue } = pizzaMapping()
          .createPizzasProps({ props: props.pizzas, budget, index: productIndex })

        budgetValue += pizzasValue

        await instances.budgetProducts.create().execute(pizzas)
        await instances.pizzaFollowUp.create().execute(pizzaFollowUps)

        productIndex = index
      }

      if (props.produtos) {
        const { budgetProducts, value: productsValue } = budgerProductMapping().createBudgetProductsProps({
          budget,
          index: productIndex,
          props: props.produtos
        })

        budgetValue += productsValue

        await instances.budgetProducts.create().execute(budgetProducts)
      }

      budget.products.forEach(product => {
        budgetValue += product.quantity * product.value
      })

      await instances.budget.update().value({ budgetCode: budget.budgetCode, value: budgetValue })
      await instances.orderProgress.update().lastChange(budget.budgetCode)
      await transactions.commit()

      return response.status(200).json()
    } catch (error: any) {
      await transactions.rollback()

      return response.status(400).json()
    }
  }
}
