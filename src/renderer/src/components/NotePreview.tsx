import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import { ComponentProps } from 'react'
import { FaFileAlt } from 'react-icons/fa'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'orange']

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'flex items-stretch p-4 rounded-lg transition-all duration-200',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-1/6">
        <FaFileAlt className="w-6 h-6 text-cyan-500" />
      </div>
      <div className="flex flex-col justify-start pl-4 w-5/6">
        <h3 className="mb-2 text-lg font-semibold truncate">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
        <p className="mt-2 text-sm text-gray-700">{content}</p>
      </div>
    </div>
  )
}
