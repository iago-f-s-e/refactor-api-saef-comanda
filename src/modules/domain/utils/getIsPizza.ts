export function getIsPizza (name: string, composition: number): boolean {
  const nameIncludesPizza = name.toUpperCase().includes('PIZZA')
  const compositionIsTypeTwo = composition === 2

  if (nameIncludesPizza && compositionIsTypeTwo) return true

  return false
}
