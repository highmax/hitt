import { useState } from 'react'
import Timer from './Timer'
import CounterList from './CounterList'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const resetCount = console.log('reset counters')
  return (
    <div className="bg-white">
      <div className="container grid grid-cols-3 mx-auto">
        <Timer
          label="Push up"
          seg={13}
          min={0}
          running={isRunning}
          setRunning={setIsRunning}
          resetCount={resetCount}
        />
        <CounterList />
      </div>
    </div>
  )
}

export default App
