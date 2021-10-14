import { UpdateKitchenPizzaProps, PrintFollowUpProps, PrintKitchenPizzaProps, PrintPizzaKitchen } from '../contracts'

export function updateKitchenPizzas ({ pizzas, budget }: UpdateKitchenPizzaProps): PrintPizzaKitchen {
  const pizzasWithFollowUps: PrintKitchenPizzaProps[] = []

  for (const pizza of pizzas) {
    const followUps: PrintFollowUpProps[] = pizza.acompanhamentos.map(followUps => ({
      name: followUps.nome,
      quantity: followUps.fatias
    }))

    const pizzaWithFollowUps: PrintKitchenPizzaProps = {
      code: pizza.codigo,
      followUps,
      name: pizza.nome,
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
