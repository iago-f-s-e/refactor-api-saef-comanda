import { FindSequential, UpdateSequential } from '../implementations'

export interface SequentialServicesProtocols {
  find: () => FindSequential
  update: () => UpdateSequential
}
