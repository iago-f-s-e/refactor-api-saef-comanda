import { Controller, Get } from '@overnightjs/core'
import { tableMapping } from '@src/modules/domain/mappings'
import { Request, Response } from 'express'
import { TableGetProtocols } from '../contracts'

@Controller('')
export class TableGet implements TableGetProtocols {
  @Get('')
  public async requestToList (request: Request, response: Response): Promise<Response> {
    const { instances } = request

    const { closedTables, openedTables } = await instances.table.find().execute()

    const { useOrder } = await instances.config.find().execute()

    for (const tableIndex in closedTables) {
      const { tableCode } = closedTables[tableIndex]
      const budgets = await instances.budget.find().byTable(tableCode)

      Object.assign(closedTables[tableIndex], { budgets })
    }

    const tables = useOrder
      ? tableMapping().tables([...closedTables, ...openedTables])
      : tableMapping().tablesWithBudgets([...closedTables, ...openedTables])

    return response.status(200).json({ results: tables })
  }
}
