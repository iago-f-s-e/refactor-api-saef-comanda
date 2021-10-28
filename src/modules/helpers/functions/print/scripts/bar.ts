import { PrintBar } from '@helpers/mappings'
import { Paths } from '../contracts'
import { resize } from '../utils'
const command = require('node-cmd')

export function bar (
  { tableCode, orderCode, budgetCode, date, time, products }: PrintBar,
  { apiFolder, fileName }: Paths
): void {
  command.runSync(`if not exist ${apiFolder} mkdir ${apiFolder}`)
  command.runSync(`if exist ${fileName} del ${fileName} /q`)

  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo                       B A R                     >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   MESA:    ${tableCode} >> ${fileName}`)
  command.runSync(`echo   COMANDA: ${orderCode || ''} >> ${fileName}`)
  command.runSync(`echo   DATA:    ${date} ${time} >> ${fileName}`)
  command.runSync(`echo   PEDIDO:  ${budgetCode} >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   COD    DESCRICAO                              >> ${fileName}`)
  command.runSync(`echo                                            QTD  >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  products.forEach(product => {
    const { code, name, quantity } = product

    const residedCode = resize('CODE', code)
    const residedName = resize('NAME', name, 39)

    command.runSync(`echo   ${residedCode} ${residedName} >> ${fileName}`)
    command.runSync(`echo                                            ${quantity} >> ${fileName}`)
  })
  command.runSync(`echo   ============================================= >> ${fileName}`)
  products.forEach(product => {
    const { observation, name } = product
    if (!observation) return

    command.runSync(`echo   OBS: ${name}: >> ${fileName}`)

    for (let i = 0; i <= observation.length; i += 34) {
      command.runSync(`echo             ${observation.slice(i, i + 34)} >> ${fileName}`)
    }
  })
  command.runSync(`echo.                                               >> ${fileName}`)
  command.runSync(`echo.                                               >> ${fileName}`)
  command.runSync(`echo.                                               >> ${fileName}`)
  command.runSync(`echo.                                               >> ${fileName}`)
  command.runSync(`echo m                                             >> ${fileName}`)
}
