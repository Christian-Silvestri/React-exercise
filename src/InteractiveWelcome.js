import React from 'react';
import { Welcome } from './Welcome';

class InteractiveWelcome extends React.Component {
    state = {
        name: '',
    }

    handleInteractiveWelcome = (event) => {
        const value = event.target.value

        this.setState(() => {
            return {
                name: value,
            }
        })
    }

    render() {
        return (
            <div>
                <input
                    name={'name'}
                    value={this.state.name}
                    onChange={this.handleInteractiveWelcome} />

                <Welcome name={this.state.name} />
            </div>
        )
    }
}

export default InteractiveWelcome