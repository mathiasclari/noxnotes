import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

const dateFormattor = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'short',
  timeStyle: 'short',
  timeZone: 'Europe/Ljubljana'
})

export const formatDateFromMs = (ms: number) => dateFormattor.format(ms)

export const cn = (...args: ClassValue[]) => {
  return twMerge(clsx(...args))
}
