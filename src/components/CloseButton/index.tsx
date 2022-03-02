import Button from '../Button'

export default function CloseButton({ handleClose }) {
  return (
    <Button
      classNames="shadow-none py-2 px-2 text-slate-400 mr-0"
      click={handleClose}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </Button>
  )
}
