import jwt from 'jsonwebtoken'
import { Employee } from '@auth/entities'
import { MappedEmployeeWithToken } from '@auth/controllers'
import { employee } from './employee'
import { PayloadToken } from '../contracts/PayloadToken'

export function employeeWithToken (entity: Employee): MappedEmployeeWithToken {
  const funcionario = employee(entity)

  return {
    funcionario,
    token: generateToken({
      employeeCode: funcionario.codigo,
      employeeName: funcionario.nome
    })
  }
}

function generateToken (payloadToken: PayloadToken): string {
  const payload = JSON.parse(JSON.stringify(payloadToken))

  return jwt.sign(payload, process.env.AUTH_KEY_SECURITY as string, {
    expiresIn: process.env.AUTH_KEY_TOKEN_EXPIRES || 36000000
  })
}
