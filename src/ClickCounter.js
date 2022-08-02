import React, { useState } from 'react';

/* class ClickCounter extends React.Component {
    state = {
        count: 0,
    }

    incrementCounter = () => {
        this.setState ({
            count: this.state.count + 1,
        })
    }

    render() {
        return (
            <div>
                <button onClick = {this.incrementCounter}>Press Button</button>
                <p>Count: {this.state.count}</p>
            </div>
        )
    }
} */

function ClickCounter() {
    
    const [count, setCount] = useState(0)

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