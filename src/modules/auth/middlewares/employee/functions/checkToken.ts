import { secret } from '@src/modules/auth/constants'
import jwt from 'jsonwebtoken'

export function checkToken (token: string | string[] | undefined): void {
  if (!token || typeof token !== 'string' || !token.trim()) throw new Error('Invalid token')

  jwt.verify(token, secret)
}
