import { TableMappingProtocols } from '../contracts'
import { table } from './table'
import { tables } from './tables'

export function tableMapping (): TableMappingProtocols {
  return {
    table,
    tables
  }
}
