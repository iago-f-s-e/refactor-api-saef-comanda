import { PizzaFlavorProps } from '@domain/services'
import { MappedPizzaFlavors } from '@domain/controllers'

export function flavor (entity: PizzaFlavorProps): MappedPizzaFlavors {
  return {
    code: entity.productCode,
    name: entity.productName,
    image: getImage(entity.image),
    valuePerSlice: getValuePerSlice(entity.value, entity.slices)
  }
}

function getValuePerSlice (value: number, slices: number): number {
  return value / slices
}

function getImage (image: string | undefined): string {
  const defaultImage = 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image'

  if (!image) return defaultImage

  return image
}
