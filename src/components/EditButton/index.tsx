import Button from '../Button'
import { Edit as EditIcon } from '../Icons'

export default function EditButton({ click }: { click: () => void }) {
  const onClick = () => {
    click()
  }

  return (
    <Button click={onClick} classNames="shadow-none py-2 px-2">
      <EditIcon />
    </Button>
  )
}
