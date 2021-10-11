import { RequestToCreatePizzaOrder, RequestToCreateProductOrder } from '@domain/controllers'

export interface RequestToCreateOrder {
  mesa: number
  garçom: number
  numero: number
  valor: number
  usaComanda: boolean
  produtos?: RequestToCreateProductOrder[]
  pizzas?: RequestToCreatePizzaOrder[]
}

export interface RequestToUpdateOrder extends Pick<RequestToCreateOrder, 'produtos' | 'pizzas' | 'valor'> {
  comanda: {
    codigo: number
  }
}
