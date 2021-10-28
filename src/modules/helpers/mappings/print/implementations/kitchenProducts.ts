import { KitchenProductProps, PrintKitchenProductProps, PrintProductKitchen } from '../contracts'

export function kitchenProducts ({ budget, products: budgetProducts }: KitchenProductProps): PrintProductKitchen {
  const products: PrintKitchenProductProps[] = budgetProducts
    .filter(({ product }) => product.printer === 'C')
    .map(({ product, observation, quantity }) => ({
      code: product.productCode,
      name: product.name,
      observation: observation || '',
      quantity
    }))

  return {
    budgetCode: budget.budgetCode.toString(),
    orderCode: budget.order ? budget.order.orderIdentifier : undefined,
    tableCode: budget.tableCode,
    products,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  }
}
