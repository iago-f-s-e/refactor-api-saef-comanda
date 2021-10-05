export interface MappedProduct {
  id: number
  nome: string
  preço: number
  unidade: string
  estoque: number
  produtoProprio: boolean
  pizza: boolean
  image: string
}

export interface MappedBudgetProduct extends Omit<MappedProduct, 'image'> {
  ordinal: number
  valor: number,
  quantidade: number
}
