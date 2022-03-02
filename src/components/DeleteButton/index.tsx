import Button from '../Button'
import { Delete as DeleteIcon } from '../Icons'

export default function DeleteButton() {
  return (
    <Button classNames="shadow-none py-2 px-2">
      <DeleteIcon />
    </Button>
  )
}
