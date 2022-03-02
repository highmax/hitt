import Button from '../Button'

export default function CreateButton({ click }) {
  const onClickCreate = () => {
    click()
  }
  return (
    <Button classNames="w-32 justify-evenly" click={onClickCreate}>
      {/* TODO: Buscar como eliminar este fragment */}
      <>
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
            d="M12 4v16m8-8H4"
          />
        </svg>
        Create
      </>
    </Button>
  )
}
