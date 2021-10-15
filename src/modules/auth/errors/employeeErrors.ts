import { Errors, genericErrors } from '@src/shared'

export function employeeErrors (message: string): Errors {
  if (
    message === 'Invalid code' ||
    message === 'Incorrect password' ||
    message === 'Invalid token' ||
    message === 'jwt malformed' ||
    message === 'jwt expired' ||
    message === 'invalid signature'
  ) return { code: 401, message: 'Invalid data' }

  return genericErrors(message)
}
