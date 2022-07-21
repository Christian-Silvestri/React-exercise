import React from 'react';

class ClickCounter extends React.Component {
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
}

export default ClickCounter