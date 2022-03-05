import { useCallback, useState } from 'react'
import useInterval from '../../hooks/useInterval'

import Display from '../Display'
import Card from '../Card'
import StartButton from '../StartButton'
import ResetButton from '../ResetButton'

type TimerProps = {
  seg?: number
  min?: number
  hours?: number
  label: string
  running: boolean
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  resetCount: () => void
}

export default function Timer({
  seg = 0,
  min = 0,
  hours = 0,
  running = false,
  setRunning,
  resetCount,
  label
}: TimerProps) {
  const [segundos, setSegundos] = useState(seg)
  const [minutos, setMinutos] = useState(min)

  const DELAY = 1000

  //TODO: Mirar si setRunning se puede llamar como callback de una funcion local :/

  const countDown = useCallback(() => {
    if (minutos === 0 && segundos === 1) {
      setRunning(false)
    }

    if (segundos === 0 && minutos > 0) {
      setMinutos(minutos - 1)
      setSegundos(59)
    } else {
      setSegundos(segundos - 1)
    }
  }, [minutos, segundos, setRunning])

  useInterval(
    () => {
      countDown()
    },
    running ? DELAY : null
  )

  const remmainingTime = hours * 3600 + minutos * 60 + segundos
  const almostFinishing = remmainingTime < 10 && running

  return (
    <Card classNames="w-4/5" label={label}>
      <div className="flex justify-between mb-4">
        <Display label="Hours" time={hours} almostFinish={almostFinishing} />
        <Display
          label="Minutes"
          time={minutos}
          almostFinish={almostFinishing}
        />
        <Display
          label="Seconds"
          time={segundos}
          almostFinish={almostFinishing}
        />
      </div>
      <StartButton running={running} setRunning={setRunning} />
      <ResetButton resetCountDown={resetCount} />
    </Card>
  )
}
