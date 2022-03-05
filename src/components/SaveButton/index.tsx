import { Save as SaveIcon } from 'components/Icons'
import Button from '../Button'

export default function SaveButton({ click }: { click: () => void }) {
  return (
    <Button classNames="w-32 justify-evenly" click={click}>
      <SaveIcon />
      Save
    </Button>
  )
}
