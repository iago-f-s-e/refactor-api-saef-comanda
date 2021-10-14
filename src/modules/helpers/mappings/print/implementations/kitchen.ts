import { Budget } from '@src/modules/domain/entities'
import { budgerProductMapping } from '@src/modules/domain/mappings'
import { Instances } from '@src/types/instances'
import { PrintFollowUpProps, PrintKitchenPizzaProps, PrintKitchenProductProps, PrintPizzaKitchen, PrintProductKitchen } from '..'

export async function kitchen (budget: Budget, instances: Instances) {
  const { pizzas, products } = budgerProductMapping().separatePizzas(budget.products)

  const time = new Date().toLocaleTimeString()
  const date = new Date().toLocaleDateString()

  const printProductKitchen: PrintProductKitchen = {
    budgetCode: budget.budgetCode.toString(),
    tableCode: budget.tableCode,
    orderCode: budget.order.orderIdentifier,
    date,
    time,
    products: []
  }

  const printPizzaKitchen: PrintPizzaKitchen = {
    budgetCode: budget.budgetCode.toString(),
    tableCode: budget.tableCode,
    orderCode: budget.order.orderIdentifier,
    date,
    time,
    pizzas: []
  }

  if (products.length) {
    const printProducts: PrintKitchenProductProps[] = products.map(budgetProduct => ({
      code: budgetProduct.product.productCode,
      name: budgetProduct.product.name,
      quantity: budgetProduct.quantity,
      observation: budgetProduct.observation || ''
    }))

    Object.assign(printProductKitchen, {
      products: printProducts
    })
  }

  if (pizzas.length) {
    const printPizzas: PrintKitchenPizzaProps[] = []

    for (const pizza of pizzas) {
      const followUpEntity = await instances.pizzaFollowUp.find().byBudgetAndProductIndex({
        budgetCode: budget.budgetCode,
        productIndex: pizza.budgetProductCode
      })

      const followUps: PrintFollowUpProps[] = followUpEntity.map(followUp => ({
        name: followUp.product.name,
        quantity: followUp.slices
      }))

      const printPizza: PrintKitchenPizzaProps = {
        code: pizza.product.productCode,
        name: pizza.product.name,
        quantity: pizza.quantity,
        observation: pizza.observation || '',
        followUps
      }

      printPizzas.push(printPizza)
    }
    Object.assign(printPizzaKitchen, {
      pizzas: printPizzas
    })
  }

  return { printProductKitchen, printPizzaKitchen }
}
