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
        return <h1>Count: {this.state.count}</h1>
    }
}