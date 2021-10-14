import { PrintProductProps, PrintKitchenOrBar } from '.'

export interface PrintBarProductProps extends Omit<PrintProductProps, 'unitValue' | 'value'> {
  observation: string
}

export interface PrintBar extends PrintKitchenOrBar {
  products: PrintBarProductProps[]
}
