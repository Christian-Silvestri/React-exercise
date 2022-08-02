import React, { useState, useEffect } from 'react';

function ClickCounter({handleCounterChange}) {
    
    const [count, setCount] = useState(0)

    useEffect(() => {
		handleCounterChange(count)
	}, [count, handleCounterChange])

    function incrementCounter() {
        setCount((c) => c + 1)
    }

    return (
        <div>
            <button onClick= {incrementCounter}>Press Button</button>
            <p>Count: {count}</p>
        </div>
    )
}

export default ClickCounter