import { RequestToUpdateOrder } from '@domain/controllers'

export interface RequestToUpdatePrint extends Pick<RequestToUpdateOrder, 'produtos' | 'pizzas'> {
  codigo: number
  mesa: number
  comanda: string
}
