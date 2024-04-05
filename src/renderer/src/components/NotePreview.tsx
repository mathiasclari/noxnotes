import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'
import { cn, formatDateFromMS } from '@renderer/utils'
import { FaNoteSticky } from 'react-icons/fa6'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMS(lastEditTime)
  return (
    <div
      className={cn(
        'cursor-pointer px-1.5 py-2 rounded-md transition-colors duration-75',
        { 'bg-blue-300/55': isActive, 'hover:bg-zinc-500/55': !isActive },
        className
      )}
      {...props}
    >
      <div className="justify-center">
        <div className="p-3.5 flex float-left">
          <FaNoteSticky className="w-6 h-6 text-blue-300" />
        </div>
        <div className="flex flex-col">
          <h3 className="mb-1 font-bold truncate">{title}</h3>
          <span className="inline-block w-full mb-2 text-xs font-light text-left">{date}</span>
        </div>
      </div>
    </div>
  )
}
