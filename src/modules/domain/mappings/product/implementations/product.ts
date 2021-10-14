import { Product } from '@domain/entities'
import { MappedProduct } from '@domain/controllers'
import { getIsPizza } from '@src/modules/domain/utils'

export function product (entity: Product): MappedProduct {
  return {
    id: entity.productCode,
    nome: entity.name,
    preço: entity.price,
    unidade: entity.unity,
    estoque: entity.stock,
    produtoProprio: getIsOwnProduct(entity.ownProduct),
    pizza: getIsPizza(entity.name, entity.composition),
    imagem: getImage(entity.image)
  }
}

function getIsOwnProduct (ownProduct: 'T' | 'P'): boolean {
  if (ownProduct === 'P') return true

  return false
}

function getImage (image: string | undefined): string {
  const defaultImage = 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image'

  if (!image) return defaultImage

  return image
}
