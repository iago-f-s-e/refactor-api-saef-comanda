import { TypeormHandles } from '@src/infra'
import { PizzaFlavors } from '@domain/entities'

export interface PizzaFlavorsHandlers extends TypeormHandles<PizzaFlavors> {}
