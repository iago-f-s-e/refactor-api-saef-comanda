import jwt from 'jsonwebtoken'
import { Employee } from '@auth/entities'
import { MappedEmployeeWithToken } from '@auth/controllers'
import { employee } from './employee'
import { PayloadToken } from '../contracts/PayloadToken'
import { secret } from '@src/modules/auth/constants'

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

  return jwt.sign(payload, secret, {
    expiresIn: 36000000
  })
}
