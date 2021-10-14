import { Budget } from '@domain/entities'
import { PrintBarProductProps, PrintBar } from '../contracts'

export function bar (budget: Budget): PrintBar {
  const products: PrintBarProductProps[] = budget.products
    .filter(({ product }) => product.printer === 'B')
    .map(({ product, quantity, observation }) => ({
      code: product.productCode,
      name: product.name,
      quantity,
      observation: observation || ''
    }))

  return {
    budgetCode: budget.budgetCode.toString(),
    orderCode: budget.order.orderIdentifier,
    tableCode: budget.tableCode,
    products,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  }
}
