import { TypeormHandles } from '@src/infra'
import { Budget } from '@domain/entities'

export interface BudgetHandlers extends TypeormHandles<Budget> {}
