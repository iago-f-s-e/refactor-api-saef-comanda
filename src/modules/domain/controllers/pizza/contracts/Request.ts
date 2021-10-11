interface Size {
  codigo: number
  descricao: string
  fatias: number
}

export interface FollowUp {
  codigo: number
  nome: string
  preço: number
  fatias: number
}

export interface RequestToCreatePizzaOrder {
  codigo: number
  preço: number
  observacao: string
  tamanho: Size
  acompanhamentos: FollowUp[]
}
