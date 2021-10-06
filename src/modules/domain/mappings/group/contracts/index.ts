import { Group } from '@domain/entities'
import { MappedGroup } from '@domain/controllers'

export interface GroupMappingProtocols {
  group: (entity: Group) => MappedGroup
  groups: (entity: Group[]) => MappedGroup[]
}
