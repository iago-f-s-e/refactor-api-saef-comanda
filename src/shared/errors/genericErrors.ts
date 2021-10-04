export interface Errors {
  code: number
  message: string
}

export function genericErrors (message: string): Errors {
  if (
    message === 'Number with invalid format' ||
    message === 'Missing required values' ||
    message === 'Value too long' ||
    message === 'Invalid data' ||
    message === 'Invalid query'
  ) return { code: 400, message }

  return { code: 500, message }
}
