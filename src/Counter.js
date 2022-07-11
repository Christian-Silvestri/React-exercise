import React from "react";


export class Counter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0,
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + (this.props.incrementValue ?? 1),
                }
            })
        }, this.props.interval ?? 1000)
    }

    render() {
        return <CounterDisplay count={this.state.count} />
    }
}

export class CounterDisplay extends React.Component {
    render() {
        return <h1>Count: {this.props.count}</h1>
    }
}