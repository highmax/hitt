import { useState } from 'react'
import Timer from './Timer'
import CounterList from './CounterList'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const resetCount = console.log('reset counters')
  const [currentCounter, setCurrentCounter] = useState({
    title: '',
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  return (
    <div className="bg-white">
      <div className="container grid grid-cols-3 mx-auto">
        <Timer
          currentCounter={currentCounter}
          running={isRunning}
          setRunning={setIsRunning}
          resetCount={resetCount}
        />
        <CounterList onChange={setCurrentCounter} />
      </div>
    </div>
  )
}

export default App
