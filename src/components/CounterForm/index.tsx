import React, { useCallback, useEffect, useRef, useState } from 'react'

import { Counter } from 'models/counter'
import SaveButton from '../SaveButton'

type CounterFormProps = {
  editMode: boolean
  details?: Counter
  saveCounter: (c: Counter) => void
}

// TODO: Recibir ID del Counter recien editado
// Generara ID cuando un nuevo counter es creado

export default function CounterForm({
  editMode = false,
  details = {
    id: '',
    title: '',
    hours: 0,
    minutes: 0,
    seconds: 0
  },
  saveCounter
}: CounterFormProps) {
  const { id, title, hours, minutes, seconds } = details
  const [counterTitle, setCounterTitle] = useState<string>('')
  const [counterHours, setCounterHours] = useState<number>(0)
  const [counterMinutes, setCounterMinutes] = useState<number>(0)
  const [counterSeconds, setCounterSeconds] = useState<number>(0)
  const [validForm, setValidForm] = useState<boolean>(false)

  const titleRef = useRef<HTMLInputElement>(null)
  const hoursRef = useRef<HTMLInputElement>(null)
  const minutesRef = useRef<HTMLInputElement>(null)
  const secondsRef = useRef<HTMLInputElement>(null)

  const validateForm = useCallback(() => {
    setValidForm(
      counterTitle.length > 0 &&
        (counterHours > 0 || counterMinutes > 0 || counterSeconds > 0)
    )
  }, [counterTitle.length, counterHours, counterMinutes, counterSeconds])

  useEffect(() => {
    if (titleRef.current) titleRef.current.focus()
  }, [])

  useEffect(() => {
    if (editMode) {
      setCounterTitle(title)
      setCounterHours(hours)
      setCounterMinutes(minutes)
      setCounterSeconds(seconds)
    }
  }, [])

  useEffect(() => {
    validateForm()
  }, [editMode, hours, minutes, seconds, title, validateForm])

  //TODO: Create controlled components to re-use inputs
  //TODO: Limit seconds and min to 60

  const onChangeTitle = (e: React.FormEvent<HTMLInputElement>): void => {
    setCounterTitle(e.currentTarget.value)
  }

  const onChangeHours = (e: React.FormEvent<HTMLInputElement>): void => {
    setCounterHours(Number(e.currentTarget.value))
  }

  const onChangeMinutes = (e: React.FormEvent<HTMLInputElement>): void => {
    setCounterMinutes(Number(e.currentTarget.value))
  }

  const onChangeSeconds = (e: React.FormEvent<HTMLInputElement>): void => {
    setCounterSeconds(Number(e.currentTarget.value))
  }

  const onSave = (e: React.SyntheticEvent) => {
    e.preventDefault()
    saveCounter({
      id,
      title: counterTitle,
      hours: counterHours,
      minutes: counterMinutes,
      seconds: counterSeconds
    })
  }

  return (
    <form className="mt-4" action="">
      <label className="text-sm text-slate-400" htmlFor="counter-title">
        Title
        <input
          className="p-4 w-full text-black rounded-md border"
          type="text"
          name="title"
          id="counter-title"
          placeholder="Please write a tittle for your counter"
          ref={titleRef}
          value={counterTitle}
          onChange={onChangeTitle}
        />
      </label>
      <div className="flex justify-between mt-4">
        <label className="mr-4 text-sm text-slate-400" htmlFor="counter-hours">
          Hours
          <input
            className="p-4 w-full text-black rounded-md border"
            type="number"
            name="hours"
            id="counter-hours"
            ref={hoursRef}
            value={counterHours}
            onChange={onChangeHours}
          />
        </label>
        <label
          className="mr-4 text-sm text-slate-400"
          htmlFor="counter-minutes"
        >
          Minutes
          <input
            className="p-4 w-full text-black rounded-md border"
            type="number"
            name="minutes"
            id="counter-minutes"
            ref={minutesRef}
            value={counterMinutes}
            onChange={onChangeMinutes}
          />
        </label>
        <label
          className="mr-4 last:mr-0 text-sm text-slate-400"
          htmlFor="counter-seconds"
        >
          Seconds
          <input
            className="p-4 w-full text-black rounded-md border"
            type="number"
            name="seconds"
            id="counter-seconds"
            ref={secondsRef}
            value={counterSeconds}
            onChange={onChangeSeconds}
          />
        </label>
      </div>
      <div className="mt-4">
        <SaveButton click={onSave} disabled={!validForm} />
      </div>
    </form>
  )
}
