import { Table } from '@domain/entities'
import { MappedTable } from '@domain/controllers'

export function table ({ tableCode, inUse, description, budgets }: Table): MappedTable {
  return {
    numero: tableCode,
    status: !inUse ? 'Livre' : 'Ocupada',
    descrição: description,
    orcamentos: budgets
  }
}