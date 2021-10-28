import { Budget, Table } from '@domain/entities'
import { MappedOrder, MappedTable } from '@domain/controllers'
import { orderMapping } from '@domain/mappings'

export function table ({ tableCode, inUse, description, budgets }: Table): MappedTable {
  return {
    numero: tableCode,
    status: getStatus(inUse),
    descrição: description,
    comandas: getOrders(budgets)
  }
}

export function getStatus (inUse: boolean): 'Livre' | 'Ocupada' {
  if (inUse) return 'Ocupada'

  return 'Livre'
}

export function getOrders (entities: Budget[]): MappedOrder[] | undefined {
  return entities?.length ? orderMapping().orders(entities) : undefined
}
