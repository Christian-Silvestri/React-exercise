import React, { useState } from 'react';

/* class Login extends React.Component {
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
                    onClick={this.OnLogin}
                    style= {{backgroundColor: this.state.password.length <= 8 ? 'red' : 'green'}}>
                    Login
                </button>

                <button
                    onClick={this.handleResetButton}>
                    Reset
                </button>
            </div>
        )
    }
} */

function Login() {

    const [data, setData] = useState({
        username: '',
        password: '',
        remember: false,
    })

    function handleInputChange(event) {
        const {name, type, value, checked} = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === 'checkbox' ? checked : value,
            }
        })

        console.log(data)
    }

    return (
        <form>
            <input name= 'username' value= {data.username} onChange= {handleInputChange} />
            <input name= 'password' value= {data.password} onChange= {handleInputChange} type= 'password' />
            <input name= 'remember' checked= {data.remember} onChange= {handleInputChange} type= 'checkbox' /> 
        </form>
    )
}
export default Login