export function formatCodes (type: 'BUDGET_CODES' | 'ORDER_CODES', payload: string[]): string {
  if (type === 'BUDGET_CODES') return format('PEDIDO', payload)

  return format('COMANDA', payload)
}

function format (identifier: string, codes: string[]): string {
  return `${codes.length > 1
    ? `${identifier}S: ${codes.join(', ')}`
    : `${identifier}: ${codes.join('')}`}`
}
