import React, { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useRef } from 'react'
import { flushSync } from 'react-dom'



const Counter = () => {
    const [number, setNumber] = useState(1)
    let num = useRef(0)
    function handleClick(e){
      e.stopPropagation()
      flushSync(()=>{
        setNumber(number => number+1 )
        setNumber(number => number+1 )
      })

        num.current++
        console.log(number)
        window.print()
    }

    const fibFx = useCallback(function fib(n){
        if(n === 1 || n === 2){
          return 1
        }
        return fib(n - 1) + fib(n - 2)
      },[])


    const fibMemoized = useMemo(()=> fibFx(number), [number, fibFx])
  return (
    <div>
        <h1 style={{color:'white'}}>{number} | {fibMemoized}</h1>
        <button onClick={handleClick}> Add</button>
    </div>
  )
}

export default Counter