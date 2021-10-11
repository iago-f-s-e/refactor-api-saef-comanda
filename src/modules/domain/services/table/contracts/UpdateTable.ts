import { UpdateResult } from 'typeorm'

export interface UpdateTableProtocols {
  occupy: (tableCode: number) => Promise<UpdateResult>
}
