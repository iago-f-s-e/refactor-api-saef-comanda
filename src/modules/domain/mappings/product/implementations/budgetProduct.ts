import { BudgetProduct } from '@domain/entities'
import { MappedBudgetProduct } from '@domain/controllers'
import { product as mapProduct } from './product'

export function budgetProduct ({ budgetProductCode, product, price, quantity }: BudgetProduct): MappedBudgetProduct {
  const { imagem, ...mappedProduct } = mapProduct(product)

  const value = price * quantity

  return {
    ...mappedProduct,
    ordinal: budgetProductCode,
    valor: value,
    quantidade: quantity
  }
}
