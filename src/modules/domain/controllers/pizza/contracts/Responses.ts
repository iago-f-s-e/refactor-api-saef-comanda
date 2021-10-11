export interface MappedPizza {
  code: number
  name: string
  slices: number
}

export interface MappedPizzaFlavors extends Omit<MappedPizza, 'slices'> {
  valuePerSlice: number
  image: string
}
