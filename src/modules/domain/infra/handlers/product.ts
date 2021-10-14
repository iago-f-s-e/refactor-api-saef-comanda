import { TypeormHandles } from '@src/infra'
import { Product } from '@domain/entities'

export interface ProductHandlers extends TypeormHandles<Product> {}
