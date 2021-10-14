import { Instances } from '@src/types/instances'
import { KitchenPizzaProps, PrintFollowUpProps, PrintKitchenPizzaProps, PrintPizzaKitchen } from '../contracts'

export async function kitchenPizzas (
  { budget, pizzas }: KitchenPizzaProps,
  instances: Instances
): Promise<PrintPizzaKitchen> {
  const pizzasWithFollowUps: PrintKitchenPizzaProps[] = []

  for (const pizza of pizzas) {
    const pizzaFollowUp = await instances.pizzaFollowUp
      .find()
      .byBudgetAndProductIndex({
        budgetCode: budget.budgetCode,
        productIndex: pizza.budgetProductCode
      })

    const followUps: PrintFollowUpProps[] = pizzaFollowUp.map(followUps => ({
      name: followUps.product.name,
      quantity: followUps.slices
    }))

    const pizzaWithFollowUps: PrintKitchenPizzaProps = {
      code: pizza.product.productCode,
      name: pizza.product.name,
      quantity: pizza.quantity,
      observation: pizza.observation || '',
      followUps
    }

    pizzasWithFollowUps.push(pizzaWithFollowUps)
  }

  return {
    budgetCode: budget.budgetCode.toString(),
    orderCode: budget.order.orderIdentifier,
    tableCode: budget.tableCode,
    pizzas: pizzasWithFollowUps,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  }
}
