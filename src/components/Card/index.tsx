type CardProps = {
  label: string
  children: React.ReactNode
  classNames?: string
}

export default function Card({
  children,
  label = 'Title',
  classNames
}: CardProps) {
  return (
    <div
      className={`box-content p-4 h-fit bg-slate-50 rounded-md border-b-4 shadow-md ${classNames}`}
    >
      <span className="block p-1 mb-2 text-base font-bold text-slate-400">
        {label}
      </span>
      {children}
    </div>
  )
}
