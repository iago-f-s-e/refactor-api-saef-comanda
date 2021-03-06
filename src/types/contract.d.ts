/* eslint-disable */
import { Transactions } from '@src/infra';
import * as http from 'http'
import { Instances } from './instances'

declare module 'express-serve-static-core' {
  export interface Request extends http.IncomingMessage, Express.Request {
    instances: Instances
    transactions: Transactions
  }
}
