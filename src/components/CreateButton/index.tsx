import { New as NewIcon } from 'components/Icons'
import Button from '../Button'

export default function CreateButton({ click }: { click: () => void }) {
  const onClickCreate = () => {
    click()
  }

  return (
    <Button
      classNames="w-44 justify-evenly"
      click={onClickCreate}
      title="Create counter"
    >
      <NewIcon />
      New counter
    </Button>
  )
}
