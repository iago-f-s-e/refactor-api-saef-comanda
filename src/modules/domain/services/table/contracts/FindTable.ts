import { Table } from '@domain/entities'

export interface FindTableProtocols {
  execute: () => Promise<Table[]>
}
