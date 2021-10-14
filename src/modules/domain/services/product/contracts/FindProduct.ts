import { Product } from '@domain/entities'

export interface FindProductProtocols {
  byProductCode: (productCode: number) => Promise<Product>
}
