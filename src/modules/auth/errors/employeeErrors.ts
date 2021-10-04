import { Errors, genericErrors } from '@src/shared'

export function employeeErrors (message: string): Errors {
  if (
    message === 'Invalid code' ||
    message === 'Incorrect password'
  ) return { code: 401, message: 'Invalid data' }

  return genericErrors(message)
}
