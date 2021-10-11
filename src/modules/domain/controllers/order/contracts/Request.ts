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
