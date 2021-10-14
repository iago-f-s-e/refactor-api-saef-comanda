import { ProductHandlers } from '@domain/infra'
import { Product } from '@domain/entities'
import { FindProductProtocols } from '../contracts'

export class FindProduct implements FindProductProtocols {
  constructor (private readonly productHandlers: ProductHandlers) {}

  public async byProductCode (productCode: number): Promise<Product> {
    const product = await this.productHandlers.queryBuilder
      .where('Product.productCode = :productCode', { productCode })
      .getOne()

    if (!product) throw new Error('Product not found')

    return product
  }
}
