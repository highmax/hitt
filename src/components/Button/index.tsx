type ButtonProps = {
  click?: () => void
  children: React.ReactNode
  classNames?: string
  title?: string
}

export default function Button({
  click,
  children,
  classNames,
  title = 'button'
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center py-3 px-5 mr-3 text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50 rounded-md border border-transparent shadow ${classNames}`}
      onClick={click}
      title={title}
    >
      {children}
    </button>
  )
}
