import { TypeormHandles } from '@src/infra'
import { Table } from '@domain/entities'

export interface TableHandlers extends TypeormHandles<Table> {}
