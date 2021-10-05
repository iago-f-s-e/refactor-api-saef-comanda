import { MappedBudgetProduct } from '@domain/controllers'

export interface MappedOrder {
  codigo: number
  numero: number | string
  status: 'Aberta' | 'Em andamento'
  cliente: 'Default' | 'Loja'
  garçom: 'Default' | 'Loja'
  valor: number
  desconto: number
  emissão: string
  produtos: MappedBudgetProduct[]
}
