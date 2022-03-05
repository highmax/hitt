import { Reset as ResetIcon } from 'components/Icons'
import Button from '../Button'

type resetButtonProps = {
  resetCountDown: () => void
}

export default function ResetButton({ resetCountDown }: resetButtonProps) {
  const onReset = () => {
    resetCountDown()
  }
  return (
    <Button click={onReset} classNames="w-32 justify-evenly">
      <ResetIcon />
      Reset
    </Button>
  )
}
