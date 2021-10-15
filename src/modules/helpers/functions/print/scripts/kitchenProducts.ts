import { PrintProductKitchen } from '@helpers/mappings'
import { Paths } from '../contracts'
import { resize } from '../utils'
const command = require('node-cmd')

export function kitchenProducts (
  { budgetCode, date, orderCode, products, tableCode, time }: PrintProductKitchen,
  { apiFolder, fileName }: Paths
): void {
  command.runSync(`if exist ${fileName} del ${fileName} /q`)

  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo                    C O Z I N H A                >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   MESA:    ${tableCode} >> ${fileName}`)
  command.runSync(`echo   COMANDA: ${orderCode} >> ${fileName}`)
  command.runSync(`echo   DATA:    ${date} ${time} >> ${fileName}`)
  command.runSync(`echo   PEDIDO:  ${budgetCode} >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   COD    DESCRICAO                              >> ${fileName}`)
  command.runSync(`echo                                            QTD  >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  products.forEach(({ code, name, quantity }) => {
    const resizedCode = resize('CODE', code)
    const resizedName = resize('NAME', name, 38)

    command.runSync(`echo   ${resizedCode} ${resizedName} >> ${fileName}`)
    command.runSync(`echo                                            ${quantity} >> ${fileName}`)
  })
  command.runSync(`echo   ============================================= >> ${fileName}`)
  products.forEach(({ observation, name }) => {
    if (!observation) return

    command.runSync(`echo   OBS: ${name}: >> ${fileName}`)

    for (let i = 0; i <= observation.length; i += 34) {
      command.runSync(`echo             ${observation.slice(i, i + 34)} >> ${fileName}`)
    }
  })

  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo m                                      >> ${fileName}`)
}
