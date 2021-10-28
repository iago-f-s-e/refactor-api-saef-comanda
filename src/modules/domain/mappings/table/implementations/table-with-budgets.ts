import { Budget, Table } from '@domain/entities'
import { MappedOrder, MappedTable } from '@domain/controllers'
import { budgetMapping } from '@domain/mappings'

export function tableWithBudget ({ tableCode, inUse, description, budgets }: Table): MappedTable {
  return {
    numero: tableCode,
    status: getStatus(inUse),
    descrição: description,
    comandas: getBudgets(budgets)
  }
}

function getStatus (inUse: boolean): 'Livre' | 'Ocupada' {
  if (inUse) return 'Ocupada'

  return 'Livre'
}

function getBudgets (entities: Budget[]): MappedOrder[] | undefined {
  return entities?.length ? budgetMapping().budgets(entities) : undefined
}
