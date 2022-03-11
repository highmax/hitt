import { useCallback, useEffect, useState } from 'react'
import useInterval from '../../hooks/useInterval'

import Display from '../Display'
import Card from '../Card'
import StartButton from '../StartButton'
import ResetButton from '../ResetButton'

type TimerProps = {
  currentCounter: {
    title: string
    hours: number
    minutes: number
    seconds: number
  }
  running: boolean
  setRunning: React.Dispatch<React.SetStateAction<boolean>>
  resetCount: () => void
}

export default function Timer({
  currentCounter = { title: '', hours: 0, minutes: 0, seconds: 0 },
  running = false,
  setRunning,
  resetCount
}: TimerProps) {
  const { seconds, minutes, hours, title } = currentCounter
  const [titulo, setTitle] = useState<string>(title)
  const [horas, setHoras] = useState<number>(hours)
  const [minutos, setMinutos] = useState<number>(minutes)
  const [segundos, setSegundos] = useState<number>(seconds)

  useEffect(() => {
    setTitle(title)
    setHoras(hours)
    setMinutos(minutes)
    setSegundos(seconds)
  }, [title, hours, minutes, seconds])

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

  const remmainingTime = horas * 3600 + minutos * 60 + segundos
  const almostFinishing = remmainingTime < 10 && running

  return (
    <Card classNames="w-4/5" label={titulo}>
      <div className="flex justify-between mb-4">
        <Display label="Hours" time={horas} almostFinish={almostFinishing} />
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
