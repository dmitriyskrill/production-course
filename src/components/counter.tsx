import { useState } from 'react'
import './counter.scss'

const Counter = () => {

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((currentCount) => currentCount + 1)
  }

  const decrement = () => {
    setCount((currentCount) => currentCount - 1)
  }

  return (
    <div>
      {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

export default Counter