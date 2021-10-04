import { getRepository, ObjectType, Repository, SelectQueryBuilder } from 'typeorm'

export interface TypeormHandles<T> {
  queryBuilder: SelectQueryBuilder<T>,
  repository: Repository<T>
}

export function typeormHandlers<T> (entity: ObjectType<T>): TypeormHandles<T> {
  const repository = getRepository<T>(entity)

  return {
    queryBuilder: repository.createQueryBuilder(),
    repository
  }
}
