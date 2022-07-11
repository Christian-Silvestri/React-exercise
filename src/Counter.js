import React from "react";


export class Counter extends React.Component {
    state = {
        count: this.props.initialValue ?? 0,
    }

   componentDidMount() {
    setInterval(() => {
        this.setState((state) => {
            return {
                count: state.count + 1,
            }
        })
    }, 1000)
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