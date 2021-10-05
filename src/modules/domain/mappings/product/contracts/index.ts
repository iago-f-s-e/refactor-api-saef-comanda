import { BudgetProduct, Product } from '@domain/entities'
import { MappedBudgetProduct, MappedProduct } from '@src/modules/domain/controllers'

export interface ProductMappingProtocols {
  budgetProduct: (entity: BudgetProduct) => MappedBudgetProduct
  budgetProducts: (entities: BudgetProduct[]) => MappedBudgetProduct[]
  product: (entity: Product) => MappedProduct
  products: (entities: Product[]) => MappedProduct[]
}
