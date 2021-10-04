import { Controller, Get } from '@overnightjs/core'
import { employeeErrors } from '@src/modules/auth/errors'
import { employeeMapping } from '@src/modules/auth/mapping/employee/implementations'
import { comparePassword } from '@src/modules/auth/utils'
import { Request, Response } from 'express'
import { EmployeeGetProtocols } from '../contracts'

@Controller('')
export class EmployeeGet implements EmployeeGetProtocols {
  @Get('login')
  public async requestToLogin (request: Request, response: Response): Promise<Response> {
    const { codigo: employeeCode, senha: employeePassword } = request.query
    const { instances } = request

    try {
      if (
        !employeeCode ||
        !employeePassword ||
        typeof employeeCode !== 'string' ||
        typeof employeePassword !== 'string'
      ) throw new Error('Invalid query')

      if (
        Number.isNaN(Number(employeeCode)) ||
        !Number.isInteger(Number(employeeCode))
      ) throw new Error('Invalid code')

      const employee = await instances.employee.find().byCode(parseInt(employeeCode))

      comparePassword(employeePassword, employee.passwords[0].password)

      const { funcionario, token } = employeeMapping().employeeWithToken(employee)

      return response.status(200).json({ results: { funcionario, token } })
    } catch (error: any) {
      const { code, message } = employeeErrors(error.message)

      return response.status(code).json({ error: message })
    }
  }
}
