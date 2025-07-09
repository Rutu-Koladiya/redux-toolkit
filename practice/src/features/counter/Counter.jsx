import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementAsync, incrementByAmount, incrementIfOdd } from './counterSlice'
import { useState } from 'react'

function Counter() {
    const [incrementAmount, setIncrementAmount] = useState('2')
    const incrementValue = Number(incrementAmount) || 0

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.value)
    const status = useSelector((state) => state.counter.status)

    return (
        <>
            <div>
                <h1>{count}</h1>
                <p>Status: {status}</p>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button onClick={() => dispatch(incrementByAmount(incrementValue))}>increment by amount</button>
                <button onClick={() => dispatch(incrementAsync(incrementValue))}>Increment Async</button>
                <button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Increment If Odd</button>
            </div>
        </>
    )
}

export default Counter
