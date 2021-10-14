import { FindProduct } from '../implementations'

export interface ProductServicesProtocols {
  find: () => FindProduct
}
