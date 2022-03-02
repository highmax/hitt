import CloseButton from '../CloseButton'
import ReactDOM from 'react-dom'

export default function Modal({ children, isOpen, handleClose, title }) {
  if (!isOpen) return null

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black/50">
      <div className="absolute top-1/4 right-1/2 p-4 w-1/3 bg-white rounded-md translate-x-2/4">
        <div className="flex justify-between">
          {title && (
            <h2 className="text-base font-bold text-slate-400">{title}</h2>
          )}
          <CloseButton handleClose={handleClose} />
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}
