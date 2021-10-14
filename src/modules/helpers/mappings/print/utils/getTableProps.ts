import { TableProps } from '../contracts'

export function getTableProps (orderDate: Date, tableCode: number): TableProps {
  return {
    ...getDateProps(orderDate),
    number: tableCode
  }
}

function getDateProps (orderDate: Date) {
  const currentTime = new Date().getTime()
  const initialTime = orderDate.getTime()

  const date = getDate(orderDate)
  const hour = getHours(orderDate)
  const minutes = getMinutes(currentTime, initialTime)

  return { date, hour, minutes }
}

function getDate (date:Date): string {
  return date.toLocaleDateString()
}

function getHours (date: Date): string {
  return date.toLocaleTimeString()
}

function getMinutes (currentTime: number, initialTime: number): string {
  return ((currentTime - initialTime) / 1000 / 60).toFixed(0)
}
