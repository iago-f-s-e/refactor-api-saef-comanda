import { Instances } from '@src/types/instances'
import { UpdateKitchenPizzaProps, PrintFollowUpProps, PrintKitchenPizzaProps, PrintPizzaKitchen } from '../contracts'

export async function updateKitchenPizzas (
  { pizzas, budget }: UpdateKitchenPizzaProps,
  instances: Instances
): Promise<PrintPizzaKitchen> {
  const pizzasWithFollowUps: PrintKitchenPizzaProps[] = []

  for (const pizza of pizzas) {
    console.log('🚀 ~ file: updateKitchenPizzas.ts ~ line 11 ~ pizza', pizza)

    const pizzaEntity = await instances.product.find().byProductCode(pizza.codigo)

    const followUps: PrintFollowUpProps[] = pizza.acompanhamentos.map(followUps => ({
      name: followUps.nome,
      quantity: followUps.fatias
    }))

    const pizzaWithFollowUps: PrintKitchenPizzaProps = {
      code: pizzaEntity.productCode,
      followUps,
      name: pizzaEntity.name,
      quantity: 1,
      observation: pizza.observacao || ''
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
