import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0)
  return (
    // <div>
    //     <h1>count: {count}</h1>
    //     <button onClick={() => setCount(count + 1)}>Increment</button>  
    //     <button onClick={() => setCount(count - 1)}>Decrement</button>  
    //     <button onClick={() => setCount(0)}>Reset</button>
    // </div>
      <div>
        <h1>count: {count}</h1>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>  
        <button onClick={() => setCount(prevCount => prevCount - 1)}>Increment</button>  
        <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default Counter