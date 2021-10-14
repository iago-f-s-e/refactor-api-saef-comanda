import { BudgetProduct } from '@domain/entities'
import { getIsPizza } from '@src/modules/domain/utils'
import { PizzasAndProducts } from '../contracts'

export function separatePizzas (budgetProducts: BudgetProduct[]): PizzasAndProducts {
  const pizzas: BudgetProduct[] = []
  const products: BudgetProduct[] = []

  for (const budgetProduct of budgetProducts) {
    const isPizza = getIsPizza(budgetProduct.product.name, budgetProduct.product.composition)

    if (isPizza) {
      pizzas.push(budgetProduct)
      continue
    }

    products.push(budgetProduct)
  }

  return { pizzas, products }
}
