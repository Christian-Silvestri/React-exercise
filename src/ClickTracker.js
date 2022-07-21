import React from 'react';

class ClickTracker extends React.Component {
    state = {
        name: '',
    }

    handleClickTracker = (event) => {
        this.setState(() => {
            return {
                name: event.target.innerText,
            }
        })
    }

    render() {
        return (
            <div>
                <button name='button-1' onClick={this.handleClickTracker}>Button 1</button>
                <button name='button-2' onClick={this.handleClickTracker}>Button 2</button>
                <button name='button-3' onClick={this.handleClickTracker}>Button 3</button>
                <h1>Button clicked: {this.state.name}</h1>
            </div>
        )
    }
}

export default ClickTracker
