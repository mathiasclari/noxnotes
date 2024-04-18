import { ActionButton } from '@/components'
import { ActionButtonProps } from './ActionButton'
import { FaFileCircleMinus } from 'react-icons/fa6'
import { useSetAtom } from 'jotai'
import { deleteNoteAtom } from '@/store'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  const deleteNote = useSetAtom(deleteNoteAtom)

  const handleDeletion = () => {
    deleteNote()
  }
  return (
    <ActionButton className="bg-red-500/25 hover:bg-red-700/25" onClick={handleDeletion} {...props}>
      <FaFileCircleMinus className="w-5 h-5 text-zinc-300" />
    </ActionButton>
  )
}
