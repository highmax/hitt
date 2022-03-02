import EditButton from '../EditButton'
import DeleteButton from '../DeleteButton'
import DragButton from '../DragButton'

type CounterProps = {
  title: string
  hours?: number
  minutes?: number
  seconds?: number
  onEdit: (d: object) => void
}

export default function Counter({
  onEdit,
  title,
  hours = 0,
  minutes = 0,
  seconds = 0
}: CounterProps) {
  const onClickEditButton = () => {
    onEdit({ title, hours, minutes, seconds })
  }

  return (
    <div className="inline-flex items-center py-3 px-5 mb-3 w-full text-base font-medium text-indigo-600 bg-white rounded-md border border-transparent shadow">
      <div className="mr-4 text-slate-300 cursor-grab">
        <DragButton />
      </div>
      <div className="flex flex-col">
        <span className="text-slate-400">{title}</span>
        <span className="text-xs text-slate-400">
          Estimated time:{' '}
          <strong>
            {hours} hrs : {minutes} min : {seconds} seg
          </strong>
        </span>
      </div>
      <div className="ml-auto">
        <EditButton click={onClickEditButton} />
        <DeleteButton />
      </div>
    </div>
  )
}
