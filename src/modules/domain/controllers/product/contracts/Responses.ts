export interface MappedProduct {
  id: number
  nome: string
  preço: number
  unidade: string
  estoque: number
  produtoProprio: boolean
  pizza: boolean
  imagem: string
}

export interface MappedBudgetProduct extends Omit<MappedProduct, 'imagem'> {
  ordinal: number
  valor: number,
  quantidade: number
}
