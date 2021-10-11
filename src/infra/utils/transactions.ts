export interface Transactions {
  start: () => Promise<void>
  commit: () => Promise<void>
  rollback: () => Promise<void>
}
