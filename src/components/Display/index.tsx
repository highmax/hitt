export default function Display({
  time = 0,
  label = 'label',
  almostFinish = false
}) {
  return (
    <div className="flex flex-col items-center">
      <span
        className={`flex justify-center items-center w-24 h-24 text-5xl bg-white rounded-md border border-slate-200 border-solid ${
          almostFinish ? 'text-indigo-400' : 'text-slate-400'
        }`}
      >
        {time > 9 ? time : `0:${time}`}
      </span>
      <span className="text-sm text-slate-400">{label}</span>
    </div>
  )
}
