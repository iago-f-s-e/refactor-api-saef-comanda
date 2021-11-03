import { Budget } from '@domain/entities'
import { MappedOrder } from '@domain/controllers'
import { productMapping } from '@domain/mappings'

export function budget (entity: Budget): MappedOrder {
  const products = productMapping().budgetProducts(entity.products)
  let value = 0

  products.forEach(product => {
    value += product.valor
  })

  return {
    codigo: entity.budgetCode,
    numero: entity.budgetCode,
    emissão: getEmission(entity.emission),
    status: getStatus(entity),
    valor: value,
    desconto: entity.discount,
    cliente: getClient(entity.client),
    garçom: getEmployee(entity.employeeCode),
    produtos: products
  }
}

function getStatus (entity: Budget): 'Aberta' | 'Em andamento' {
  const isOnGoing = entity.printed === 'N'

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
