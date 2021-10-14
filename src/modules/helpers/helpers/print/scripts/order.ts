import { PrintOrder } from '@helpers/mappings'
import { Paths } from '../contracts'
import { formatMinutes, formatValue, resize } from '../utils'
const command = require('node-cmd')

export function order (
  { table, orderCode, budgetCode, products, value: orderValue }: PrintOrder,
  { apiFolder, fileName }: Paths
): void {
  command.runSync(`if not exist ${apiFolder} mkdir ${apiFolder}`)
  command.runSync(`if exist ${fileName} del ${fileName} /q`)

  const minutes = formatMinutes(table.minutes)
  const value = formatValue(orderValue)

  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo                    P E D I D O                  >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   MESA: ${table.number}                         >> ${fileName}`)
  command.runSync(`echo   PEDIDO: ${budgetCode}                   >> ${fileName}`)
  command.runSync(`echo   COMANDA: ${orderCode}                   >> ${fileName}`)
  command.runSync(`echo   PERMANENCIA: ${minutes}                       >> ${fileName}`)
  command.runSync(`echo   DATA: ${table.date}  HORA: ${table.hour}      >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   COD    DESCRICAO                              >> ${fileName}`)
  command.runSync(`echo                            QTD    UNIT    TOTAL >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  products.forEach(product => {
    const { code, name, quantity, unitValue, value } = product

    const residedCode = resize('CODE', code)
    const residedName = resize('NAME', name)

    command.runSync(`echo   ${residedCode} ${residedName.toUpperCase()} >> ${fileName}`)
    command.runSync(`echo                            ${quantity}    ${unitValue}   ${value} >> ${fileName}`)
  })
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   VALOR ITENS -------------------  R$ ${value}  >> ${fileName}`)
  command.runSync(`echo   DESCONTO    -------------------  R$ 0,00      >> ${fileName}`)
  command.runSync(`echo   TOTAL GERAL -------------------  R$ ${value}  >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo.                                                >> ${fileName}`)
  command.runSync(`echo.                                                >> ${fileName}`)
  command.runSync(`echo.                                                >> ${fileName}`)
  command.runSync(`echo.                                                >> ${fileName}`)
  command.runSync(`echo.                                                >> ${fileName}`)
  command.runSync(`echo.                                                >> ${fileName}`)
  command.runSync(`echo m                                              >> ${fileName}`)
}
