import { Transactions } from '@src/infra'
import { getConnection } from 'typeorm'

export function initializeTransactions (): Transactions {
  const queryRunner = getConnection().createQueryRunner()

  return {
    start: () => queryRunner.startTransaction(),
    commit: () => queryRunner.commitTransaction(),
    rollback: () => queryRunner.rollbackTransaction()
  }
}
