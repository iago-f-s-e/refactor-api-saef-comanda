import { Group } from '@domain/entities'
import { MappedGroup } from '@domain/controllers'
import { productMapping } from '@domain/mappings'

export function group ({ groupCode, name, products }: Group): MappedGroup {
  return {
    id: groupCode,
    nome: name.toUpperCase(),
    imagem: getDefaultImage(),
    produtos: productMapping().products(products)
  }
}

function getDefaultImage (): string {
  return 'https://www2.camara.leg.br/atividade-legislativa/comissoes/comissoes-permanentes/cindra/imagens/sem.jpg.gif/image'
}
