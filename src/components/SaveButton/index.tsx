import { Save as SaveIcon } from 'components/Icons'
import Button from '../Button'

export default function SaveButton({
  click,
  disabled
}: {
  click: () => void
  disabled: boolean
}) {
  return (
    <Button
      classNames={`w-32 justify-evenly ${
        disabled ? 'opacity-25 cursor-not-allowed' : ''
      }`}
      click={click}
    >
      <SaveIcon />
      Save
    </Button>
  )
}
