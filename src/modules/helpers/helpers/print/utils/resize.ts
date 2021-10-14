
export function resize (type: 'CODE' | 'NAME', payload: number | string, limitName = 38): string {
  if (type === 'CODE') return resizeCode(payload as number, 6)

  return resizeName(payload as string, limitName)
}

function resizeCode (code: number, limit: number): string {
  return fillWithBlankSpace(code.toString(), limit)
}

function resizeName (name: string, limit: number): string {
  if (name.length >= limit) return `${name.slice(0, limit - 3)}...`

  return fillWithBlankSpace(name, limit)
}

function fillWithBlankSpace (payload: string, size: number): string {
  while (payload.length < size) {
    payload += ' '
  }

  return payload
}
