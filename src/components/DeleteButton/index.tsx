import Button from '../Button'
import { Delete as DeleteIcon } from '../Icons'

export default function DeleteButton({ click }: { click: () => void }) {
  return (
    <Button classNames="shadow-none py-2 px-2" click={click}>
      <DeleteIcon />
    </Button>
  )
}
