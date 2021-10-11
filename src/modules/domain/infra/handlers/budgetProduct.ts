import { TypeormHandles } from '@src/infra'
import { BudgetProduct } from '@domain/entities'

export interface BudgetProductHandlers extends TypeormHandles<BudgetProduct> {}
