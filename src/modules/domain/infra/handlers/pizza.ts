import { TypeormHandles } from '@src/infra'
import { Pizza } from '@domain/entities'

export interface PizzaHandlers extends TypeormHandles<Pizza> {}
