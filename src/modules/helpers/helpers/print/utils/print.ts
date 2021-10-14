import { Paths } from '../contracts'
import fs from 'fs'
const command = require('node-cmd')

export function print ({ fileBat }: Paths): void {
  const isFile = fs.statSync(fileBat).isFile()

  if (isFile) command.runSync(`start ${fileBat}`)
}
