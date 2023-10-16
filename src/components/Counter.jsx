import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)
    const [amount, setAmount] = useState()
    const handleIncrement = () => {
        if (amount === "") {
            alert("Enter a value")
        } else {
            dispatch(incrementByAmount(Number(amount)))
        }
    }
    return (
        <>
            <div className='container border rounded-0 d-flex flex-column align-items-center justify-content-center'>
                <h1 style={{fontSize: '5rem'}}>{count}</h1>
                <div className='button'>
                <button className='btn btn-warning m-2' onClick={() => dispatch(decrement())}>Decrement</button>
                <button className='btn btn-danger m-2' onClick={() => dispatch(reset())}>Reset</button>
                <button className='btn btn-success m-2' onClick={() => dispatch(increment())}>Increment</button>
                </div>
                <div className='d-flex justify-content-between'>
                    <input type='text' className='form-control m-3' onChange={(e) => setAmount(e.target.value)}>
                    </input>
                    <button className='btn btn-primary m-3' onClick={handleIncrement}>Add</button>
                </div>
                
            </div>
        </>
    )
}

export default Counter