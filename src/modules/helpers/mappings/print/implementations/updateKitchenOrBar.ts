import { Instances } from '@src/types/instances'
import { UpdateKitchenOrBarProps, PrintKitchenProductProps, PrintBarProductProps, PrintProductKitchen, PrintBar } from '../contracts'

export async function updateKitchenOrBar (
  { products, budget }: UpdateKitchenOrBarProps,
  instances: Instances
): Promise<{kitchen: PrintProductKitchen, bar: PrintBar}> {
  const printProductsKitchen: PrintKitchenProductProps[] = []
  const printProductsBar: PrintBarProductProps[] = []

  const props = {
    budgetCode: budget.budgetCode.toString(),
    orderCode: budget.order ? budget.order.orderIdentifier : undefined,
    tableCode: budget.tableCode,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  }

  for (const product of products) {
    const productEntity = await instances.product.find().byProductCode(product.id)

    const printProps = {
      code: productEntity.productCode,
      name: productEntity.name,
      observation: product.observacao || '',
      quantity: product.quantidade
    }

    if (productEntity.printer === 'C') {
      const printProductKitchen: PrintKitchenProductProps = { ...printProps }

      printProductsKitchen.push(printProductKitchen)

      continue
    }

    const printProductBar: PrintBarProductProps = { ...printProps }

    printProductsBar.push(printProductBar)
  }

  return { bar: { ...props, products: printProductsBar }, kitchen: { ...props, products: printProductsKitchen } }
}
