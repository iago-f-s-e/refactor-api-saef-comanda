import { PrintBar } from '@helpers/mappings'
import { createScript } from '../scripts'
import { paths, print } from '../utils'

export function printAtTheBar (props: PrintBar): void {
  const path = paths('BAR')

  createScript().bar(props, path)
  print(path)
}
