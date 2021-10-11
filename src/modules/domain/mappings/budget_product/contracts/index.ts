import { RequestToCreateProductOrder } from '@domain/controllers'
import { Budget, BudgetProduct } from '@src/modules/domain/entities'

export interface BudgetProductMappingProps extends RequestToCreateProductOrder {
  budget: Budget
  productIndex: number
}

export interface BudgetProductsMappingProps {
  props: RequestToCreateProductOrder[],
  budget: Budget,
  index: number
}

export interface BudgetProductMappingProtocols {
  createBudgetProductProps: (props: BudgetProductMappingProps) => BudgetProduct
  createBudgetProductsProps:(props: BudgetProductsMappingProps) => BudgetProduct[]
}
