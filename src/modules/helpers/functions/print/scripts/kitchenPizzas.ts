import { PrintPizzaKitchen } from '@helpers/mappings'
import { Paths } from '../contracts'
import { resize } from '../utils'
const command = require('node-cmd')

export function kitchenPizzas (
  { budgetCode, date, orderCode, pizzas, tableCode, time }: PrintPizzaKitchen,
  { apiFolder, fileName }: Paths
): void {
  command.runSync(`if not exist ${apiFolder} mkdir ${apiFolder}`)
  command.runSync(`if exist ${fileName} del ${fileName} /q`)

  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo                    C O Z I N H A                >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   MESA:    ${tableCode} >> ${fileName}`)
  command.runSync(`echo   COMANDA: ${orderCode || ''} >> ${fileName}`)
  command.runSync(`echo   DATA:    ${date} ${time} >> ${fileName}`)
  command.runSync(`echo   PEDIDO:  ${budgetCode} >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)
  command.runSync(`echo   COD    DESCRICAO                 FATIAS TOTAL >> ${fileName}`)
  command.runSync(`echo          SABORES                   FATIAS SABOR >> ${fileName}`)
  command.runSync(`echo   ============================================= >> ${fileName}`)

  pizzas.forEach(pizza => {
    const { code, name, followUps } = pizza

    const slices = followUps
      .map(followUp => followUp.quantity)
      .reduce((prev, current) => prev + current)

    const residedCode = resize('CODE', code)
    const residedName = resize('NAME', name, 30)

    command.runSync(`echo   ${residedCode} ${residedName}    ${slices} >> ${fileName}`)
    command.runSync(`echo. >> ${fileName}`)

    followUps.forEach(({ name: nameFollowUp, quantity: quantityFollowUp }) => {
      const residedFollowUpName = resize('NAME', nameFollowUp, 24)

      command.runSync(`echo          ${residedFollowUpName}   FATIAS ${quantityFollowUp} >> ${fileName}`)
    })

    command.runSync(`echo.                              >> ${fileName}`)
    command.runSync(`echo.                              >> ${fileName}`)
  })

  command.runSync(`echo   ============================================= >> ${fileName}`)

  pizzas.forEach(({ name, observation }) => {
    if (!observation.length) return

    command.runSync(`echo   OBS: ${name}: >> ${fileName}`)

    for (let i = 0; i <= observation.length; i += 34) {
      command.runSync(`echo            ${observation.slice(i, i + 34)} >> ${fileName}`)
    }
  })

  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo.                                        >> ${fileName}`)
  command.runSync(`echo m                                      >> ${fileName}`)
}
