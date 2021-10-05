import { Budget } from '@domain/entities'
import { MappedOrder } from '@domain/controllers'
import { productMapping } from '@domain/mappings'

export function order (entity: Budget): MappedOrder {
  return {
    codigo: entity.budgetCode,
    numero: getIdentifier(entity.order.orderIdentifier),
    emissão: getEmission(entity.emission),
    status: getStatus(entity),
    valor: entity.value,
    desconto: entity.discount,
    cliente: getClient(entity.client),
    garçom: getEmployee(entity.employeeCode),
    produtos: productMapping().budgetProducts(entity.products)
  }
}

function getIdentifier (orderIdentifier: string): number | string {
  const isNumber = !Number.isNaN(Number(orderIdentifier))

  if (isNumber) return Number(orderIdentifier)

  return orderIdentifier
}

function getStatus (entity: Budget): 'Aberta' | 'Em andamento' {
  const isOnGoing = entity.printed === 'N' && !entity.order.finished

  if (isOnGoing) return 'Em andamento'

  return 'Aberta'
}

function getClient (clientCode: number): 'Default' | 'Loja' {
  const isDefaultClient = clientCode === 1

  if (isDefaultClient) return 'Default'

  return 'Loja'
}

function getEmployee (employeeCode: number): 'Default' | 'Loja' {
  const isDefaultClient = employeeCode === 1

  if (isDefaultClient) return 'Default'

  return 'Loja'
}

function getEmission (emission: Date): string {
  const [date] = emission.toISOString().split('T')

  return date.split('-').reverse().join('/')
}
