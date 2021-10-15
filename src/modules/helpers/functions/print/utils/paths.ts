import { apiFolder, FileType } from '../constants'
import { Paths } from '../contracts'

export function paths (fileType: 'ORDER' | 'KITCHEN' | 'BAR'): Paths {
  const fileName = `${apiFolder}\\${FileType[fileType].file}`
  const fileBat = `${apiFolder}\\${FileType[fileType].bat}`

  return { apiFolder, fileName, fileBat }
}
