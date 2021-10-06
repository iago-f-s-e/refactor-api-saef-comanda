import { Group } from '@domain/entities'

export interface FindGroupProtocols {
  execute: () => Promise<Group[]>
}
