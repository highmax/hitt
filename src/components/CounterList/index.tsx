import CreateButton from '../CreateButton'
import Card from '../Card'
import Counter from '../Counter'
import Modal from '../Modal'
import CounterForm from 'components/CounterForm'

import { useState } from 'react'

export default function CounterList() {
  const [isOpen, setIsOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)
  const [counterDetails, setCouterDetails] = useState({})

  const createCounter = () => {
    setIsOpen(true)
    setEditMode(false)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  const onEditCounter = ({
    title,
    hours,
    minutes,
    seconds
  }: {
    title: string
    hours: number
    minutes: number
    seconds: number
  }) => {
    setIsOpen(true)
    setEditMode(true)

    setCouterDetails({ title, hours, minutes, seconds })
  }

  return (
    <>
      <Card classNames="col-span-2 w-full" label="Counter's list">
        <div className="mt-2">
          <CreateButton click={createCounter} />
          <div className="p-4 mt-5 w-full h-auto bg-white rounded-md border border-slate-200">
            <Counter
              title="Push up"
              minutes={1}
              seconds={3}
              onEdit={onEditCounter}
            />
          </div>
        </div>
      </Card>
      <Modal
        isOpen={isOpen}
        handleClose={closeModal}
        title={editMode ? 'Edit counter' : 'Create new counter'}
      >
        <CounterForm editMode={editMode} details={counterDetails} />
      </Modal>
    </>
  )
}
