import { Group } from '@domain/entities'
import { GroupHandlers } from '@domain/infra'
import { FindGroupProtocols } from '../contracts'

export class FindGroup implements FindGroupProtocols {
  constructor (private readonly groupManagers: GroupHandlers) {}

  public async execute (): Promise<Group[]> {
    return this.groupManagers.queryBuilder
      .innerJoinAndSelect('Group.products', 'products')
      .where('Group.name <> :name', { name: 'ACOMPANHAMENTO' })
      .andWhere('Group.isActive = :isActive', { isActive: true })
      .andWhere('products.active = :active', { active: 'S' })
      .getMany()
  }
}
