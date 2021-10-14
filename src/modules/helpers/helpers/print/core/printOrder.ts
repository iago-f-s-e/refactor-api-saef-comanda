import { PrintOrder } from '@helpers/mappings'
import { createScript } from '../scripts'
import { paths, print } from '../utils'

export function printOrder (props: PrintOrder): void {
  const path = paths('ORDER')

  createScript().order(props, path)
  print(path)
}
