import React,{useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const [factor, setFactor] = useState(1);
    function incrementcount(){
        setCount(count+factor)
    }
    function decrementcount(){
        setCount(count-factor)
    }
    function incrementFactor(){
        setFactor(factor+1)
    }
    function decrementFactor(){
        setFactor(factor-1)
    }

    


  return (
    <div>
        <h1>This is my Counter: {count}</h1>
        <button onClick ={incrementcount}>Increment</button>
        <button onClick ={decrementcount}>Decrement</button>

        <h1>set my factor : {factor}</h1>
        <button onClick={incrementFactor} >increment</button>
        <button onClick ={decrementFactor}>Decrement</button>

    </div>
  )
}

export default Counter