import React, { createRef } from 'react';

class UncontrolledLogin extends React.Component {

    _formRef = createRef()

    state = {
        username: '',
        password: '',
        remember: false,
    }

    handleFormSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })

    }

    handleInputChange = () => {
        const username = this._formRef.current.elements.username.value
        const password = this._formRef.current.elements.password.value


        this.setState({
            remember: !username & !password
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}
                    ref={this._formRef}>
                    <input
                        name='username'
                        onChange={this.handleInputChange}
                    />
                    <input
                        type='password'
                        name='password'
                        onChange={this.handleInputChange}
                    />
                    <input
                        type='checkbox'
                        name='remember'
                        onChange={this.handleInputChange}
                    />

                    <button
                        type='submit'
                        disabled={this.state.remember} >
                        Login
                    </button>
                    <button
                        type='reset'>
                        Reset
                    </button>
                </form>
            </div>
        )
    }
}


export default UncontrolledLogin
