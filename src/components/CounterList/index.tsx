import { useState } from 'react'

import CreateButton from '../CreateButton'
import CounterForm from 'components/CounterForm'
import Card from '../Card'
import Counter from '../Counter'
import Modal from '../Modal'

import { Counter as CounterModel } from 'models/counter'

export default function CounterList() {
  const [isOpen, setIsOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [counter, setCouter] = useState<CounterModel>()
  const [counterList, setCounterList] = useState<CounterModel[]>([])

  const createCounter = () => {
    setIsOpen(true)
    setEditMode(false)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onEditCounter = ({ title, hours, minutes, seconds }: CounterModel) => {
    setIsOpen(true)
    setEditMode(true)

    setCouter({ title, hours, minutes, seconds })
  }

  const onSaveCounter = ({ title, hours, minutes, seconds }: CounterModel) => {
    setCounterList([{ title, hours, minutes, seconds }, ...counterList])
    setIsOpen(false)
  }

  return (
    <>
      <Card classNames="col-span-2 w-full" label="Counter's list">
        <div className="mt-2">
          <CreateButton click={createCounter} />
          <div className="p-4 mt-5 w-full h-auto bg-white rounded-md border border-slate-200">
            {counterList.map(({ title, hours, minutes, seconds }) => (
              <Counter
                key={`key-${title}`}
                title={title}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                onEdit={onEditCounter}
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
