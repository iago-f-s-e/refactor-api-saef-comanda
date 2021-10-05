import { MappedOrder } from '@domain/controllers'

export interface MappedTable {
  numero: number
  status: string
  descrição?: string
  comandas?: MappedOrder[]
}
