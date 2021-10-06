import { GroupMappingProtocols } from '../contracts'
import { group } from './group'
import { groups } from './groups'

export function groupMapping (): GroupMappingProtocols {
  return {
    group,
    groups
  }
}
