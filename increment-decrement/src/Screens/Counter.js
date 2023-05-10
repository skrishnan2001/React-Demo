import React, {useState} from 'react'

const Counter = ({start}) => {
const[count, setCount] = useState(start);

const increment = () => {
    setCount(count + 1);
}

const decrement = () => {
    setCount(count - 1);
}

  return (
    <>
        <div>Counter</div>
        <p>{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </>
  )
}

export default Counter