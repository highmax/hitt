import { Pause as PauseIcon, Start as StartIcon } from 'components/Icons'
import Button from '../Button'

type StartButtonProps = {
  running: boolean
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
}

export default function StartButton({
  running = false,
  setRunning
}: StartButtonProps) {
  const startCountDown = () => {
    setRunning(!running)
  }

  return (
    <Button
      classNames={`w-32 justify-evenly ${
        running && 'text-white bg-indigo-600 hover:bg-indigo-700'
      }`}
      click={startCountDown}
    >
      {running && <PauseIcon />}
      {!running && <StartIcon />}
      {running ? 'Pause' : 'Start'}
    </Button>
  )
}
