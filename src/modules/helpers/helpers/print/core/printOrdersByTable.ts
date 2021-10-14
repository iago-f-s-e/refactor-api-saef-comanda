import { PrintOrderByTable } from '@helpers/mappings'
import { createScript } from '../scripts'
import { paths, print } from '../utils'

export function printOrdersByTable (props: PrintOrderByTable): void {
  const path = paths('ORDER')

  createScript().ordersByTable(props, path)
  print(path)
}
