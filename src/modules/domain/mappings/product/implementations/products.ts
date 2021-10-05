import { Product } from '@domain/entities'
import { MappedProduct } from '@domain/controllers'
import { product } from './product'

export function products (entities: Product[]): MappedProduct[] {
  return entities.length
    ? entities
      .filter(entity => entity.active !== 'N')
      .map(entity => product(entity))
      .sort((prev, next) => prev.nome.localeCompare(next.nome))
    : []
}
