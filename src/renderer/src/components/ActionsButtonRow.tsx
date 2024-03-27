import { DeleteNoteButton, NewNoteButton } from './button'
import { ComponentProps } from 'react'

export const ActionsButtonRow = ({...props}:ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <NewNoteButton />
      <DeleteNoteButton />
    </div>
  )
}
