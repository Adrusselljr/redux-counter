import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, selectCount } from './counterSlice'
import '../../App.css'

export function Counter() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState(0)

    return (
        <div className='App'>

            <button onClick={ () => dispatch(increment()) }>+</button>
            <span>{count}</span>
            <button onClick={ () => dispatch(decrement()) }>-</button><br/><br/>

            <input onChange={ e => setIncrementAmount(e.target.value) } value={ incrementAmount } type="number" />
            <button onClick={ () => dispatch(incrementByAmount(Number(incrementAmount))) }>Add Amount</button>
            
        </div>
    )
}