type ButtonProps = {
  click?: () => void
  children: React.ReactComponentElement<any, any>
  classNames?: string
}

export default function Button({ click, children, classNames }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center py-3 px-5 mr-3 text-base font-medium text-indigo-600 bg-white hover:bg-indigo-50 rounded-md border border-transparent shadow ${classNames}`}
      onClick={click}
    >
      {children}
    </button>
  )
}
