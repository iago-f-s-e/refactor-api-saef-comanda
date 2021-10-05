import { ProductMappingProtocols } from '../contracts'
import { budgetProduct } from './budgetProduct'
import { budgetProducts } from './budgetProducts'
import { product } from './product'
import { products } from './products'

export function productMapping (): ProductMappingProtocols {
  return {
    budgetProduct,
    budgetProducts,
    product,
    products
  }
}
