import { ProductHandlers } from '@domain/infra'
import { FindProduct } from '.'
import { ProductServicesProtocols } from '../contracts'

export class ProductServices implements ProductServicesProtocols {
  constructor (private readonly productHandlers: ProductHandlers) {}

  public find (): FindProduct {
    return new FindProduct(this.productHandlers)
  }
}
