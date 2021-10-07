export interface PizzaFlavorProps {
  productCode: number
  productName: string
  value: number
  slices: number
  image?: string
}

export interface FindPizzaFlavorsProtocols {
  byPizzaCode: (pizzaCode: number) => Promise<PizzaFlavorProps[]>
}
