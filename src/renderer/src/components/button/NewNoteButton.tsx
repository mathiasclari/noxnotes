import { ActionButton, ActionButtonProps } from '@/components'
import { FaFileCirclePlus } from 'react-icons/fa6'
import { useSetAtom } from 'jotai'
import { createEmptyNoteAtom } from '../../store'

export const NewNoteButton = ({ ...props }: ActionButtonProps) => {
  const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  const handleCreation = () => {
    createEmptyNote()
  }
  return (
    <ActionButton onClick={handleCreation} {...props}>
      <FaFileCirclePlus className="w-5 h-5 text-zinc-300" />
    </ActionButton>
  )
}
