import React from 'react';

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        remember: false,
    }

    handleInputChange = (event) => {

        const value = event.target.value
        const name = event.target.name
        const checked = event.target.checked
        const type = event.target.type

        this.setState({
            [name]: type === 'checkbox' ? checked : value
        })
    }

    OnLogin = () => {

        console.log(this.state)
    }

    handleResetButton = () => {
        
        this.setState({
            username: '',
            password: '',
            remember: false,
        })
    }

    render() {
        return (
            <div>

                <input
                    name='username'
                    value={this.state.username}
                    placeholder='username'
                    onChange={this.handleInputChange}
                />

                <input
                    name='password'
                    type='password'
                    value={this.state.password}
                    placeholder='password'
                    onChange={this.handleInputChange}
                />

                <input
                    name='remember'
                    type='checkbox'
                    checked={this.state.remember}
                    onChange={this.handleInputChange}
                />

                <button
                    type='submit'
                    disabled={!this.state.username || !this.state.password}
                    onClick={this.OnLogin}>
                    Login
                </button>

                <button
                    onClick={this.handleResetButton}>
                    Reset
                </button>
            </div>
        )
    }
}

export default Login