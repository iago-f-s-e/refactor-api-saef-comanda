import { Budget } from '@src/modules/domain/entities'

export interface MappedTable {
  numero: number
  status: string
  descrição?: string
  orcamentos?: Budget[]
}
