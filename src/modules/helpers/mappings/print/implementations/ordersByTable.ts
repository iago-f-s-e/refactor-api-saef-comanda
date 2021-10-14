import { OrdersByTableProps, PrintOrderByTable, PrintProductProps } from '../contracts'
import { getTableProps } from '../utils'

export function ordersByTable (props: OrdersByTableProps): PrintOrderByTable {
  const budgetCodes: string[] = []
  const orderCodes: string[] = []
  const products: PrintProductProps[] = []
  let value: number = 0

  for (const budget of props.budgets) {
    const { budgetCode, order, value: budgetValue } = budget

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

    budgetCodes.push(budgetCode.toString())
    orderCodes.push(order.orderIdentifier)

    value += budgetValue
  }

  return {
    budgetCodes,
    orderCodes,
    products,
    table: getTableProps(props.orderProgress.orderDate, props.tableCode),
    value
  }
}
