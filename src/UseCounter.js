import { useState } from 'react'

function UseCounter() {
	const [counter, setCounter] = useState(0)

	function handleCounterIncrement() {
		setCounter((c) => c + 1)
	}

	function handleCounterDecrement() {
		setCounter((c) => c - 1)
	}

	function handleCounterReset() {
		setCounter(0)
	}

	return {
		counter: counter,
		onIncrement: handleCounterIncrement,
		onDecrement: handleCounterDecrement,
		onReset: handleCounterReset,
	}
}

export default UseCounter