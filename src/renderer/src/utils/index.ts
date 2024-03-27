import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormattor = new Intl.DateTimeFormat(
  window.context.locale,
  { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Ljubljana' }
)

export const formatDateFromMS = (ms: number) => dateFormattor.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
