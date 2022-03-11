import { useEffect, useState } from 'react'

import CreateButton from '../CreateButton'
import CounterForm from 'components/CounterForm'
import Card from '../Card'
import Counter from '../Counter'
import Modal from '../Modal'

import { Counter as CounterModel } from 'models/counter'

export default function CounterList({
  onChange
}: {
  onChange: (counter: CounterModel) => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [counter, setCounter] = useState<CounterModel>()
  const [counterList, setCounterList] = useState<CounterModel[]>([])

  useEffect(() => {
    if (counterList.length > 0) {
      onChange(counterList[0])
    }
  }, [counterList, onChange])

  //TODO: Disable button when timer is running, so you can't create counter when timer is running
  const createCounter = () => {
    setIsOpen(true)
    setEditMode(false)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onEditCounter = ({
    id,
    title,
    hours,
    minutes,
    seconds
  }: CounterModel) => {
    setIsOpen(true)
    setEditMode(true)

    setCounter({ id, title, hours, minutes, seconds })
  }

  const onSaveCounter = ({
    id,
    title,
    hours,
    minutes,
    seconds
  }: CounterModel) => {
    if (!editMode) {
      const id = `${Date.now()}-${Math.floor(Math.random() * 100)}`
      setCounterList([{ id, title, hours, minutes, seconds }, ...counterList])
    } else {
      setCounterList(
        counterList.map((counter) => {
          return counter.id === id
            ? { id, title, hours, minutes, seconds }
            : counter
        })
      )
    }
    setIsOpen(false)
  }

  const onDeleteCounter = (id: string) => {
    setCounterList(counterList.filter((counter) => counter.id !== id))
  }

  return (
    <>
      <Card classNames="col-span-2 w-full" label="Counter's list">
        <div className="mt-2">
          <CreateButton click={createCounter} />
          <div className="p-4 mt-5 w-full h-auto bg-white rounded-md border border-slate-200">
            {counterList.map(({ id, title, hours, minutes, seconds }) => (
              <Counter
                key={`key-${id}`}
                id={id}
                title={title}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                onEdit={onEditCounter}
                onDelete={onDeleteCounter}
              />
            ))}
            {counterList.length <= 0 && (
              <p className="text-sm text-center text-slate-400">
                Counters will appear here once you create a new one
              </p>
            )}
          </div>
        </div>
      </Card>
      <Modal
        isOpen={isOpen}
        handleClose={closeModal}
        title={editMode ? 'Edit counter' : 'Create new counter'}
      >
        <CounterForm
          editMode={editMode}
          details={counter}
          saveCounter={onSaveCounter}
        />
      </Modal>
    </>
  )
}
