export function formatMinutes (minutes: string): string {
  return `${minutes} ${parseInt(minutes) > 1 ? 'Minutos' : 'Minuto'}`
}
