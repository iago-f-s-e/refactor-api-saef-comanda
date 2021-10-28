import { OrderProps, PrintOrder, PrintProductProps } from '../contracts'
import { getTableProps } from '../utils'

export function order ({ budget, orderProgress }: OrderProps): PrintOrder {
  const products: PrintProductProps[] = []

  for (const budgetProduct of budget.products) {
    const { product, quantity, price, observation } = budgetProduct

    const printProduct: PrintProductProps = {
      code: product.productCode,
      name: product.name,
      quantity,
      unitValue: price.toFixed(2),
      value: (price * quantity).toFixed(2),
      observation: observation || ''
    }

    products.push(printProduct)
  }

  return {
    budgetCode: budget.budgetCode.toString(),
    orderCode: budget.order ? budget.order.orderIdentifier : undefined,
    products,
    table: getTableProps(orderProgress.orderDate, budget.tableCode),
    value: budget.value
  }
}
