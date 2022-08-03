import { useCallback, useState } from 'react'

function UseCounter() {
	const [counter, setCounter] = useState(0)

	const increment = useCallback(function handleCounterIncrement() {
		setCounter((c) => c + 1)
	}, [])

	const decrement = useCallback(function handleCounterDecrement() {
		setCounter((c) => c - 1)
	}, [])

	const reset = useCallback(function handleCounterReset() {
		setCounter(0)
	}, [])

	return {
		counter: counter,
		onIncrement: increment,
		onDecrement: decrement,
		onReset: reset,
	}
}

export default UseCounter


