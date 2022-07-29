import React from 'react';



class TodoList extends React.Component {

    state = {
        todos: [],
    }

    handleAddTodos = (event) => {

        event.preventDefault()

        const todo = event.target.elements.todo.value
        event.target.elements.todo.value = ''

        this.setState((state) => {
            return {
                todos: [...state.todos, todo],
            }
        })
    }

    handleResetButton = () => {
        this.setState({
            todos: [],
        })
    }

    handleRemoveItem = (element) => {
        this.setState((state) => {
            return {
                todos: state.todos.filter((todo, index) => index !== element),
            }
        })
    }


    render() {

        return (

            <div>
                <form
                    onSubmit={this.handleAddTodos}>

                    <input
                        name='todo'
                    />

                    <button
                        type='submit'>
                        SUBMIT
                    </button>

                    <button
                        onClick={this.handleResetButton}>
                        RESET
                    </button>

                </form>
                {this.props.render(this.state.todos, this.handleRemoveItem)}
            </div>
        )
    }
}

class Container extends React.Component {
    render() {
        return (
            <TodoList
                render={(todos, handleRemoveItem) => {
                    return (
                        <ul>
                            {todos.map((todo, index) => (
                                <li key={index}>
                                    {todo}
                                    <button
                                        onClick={() => handleRemoveItem(index)}>
                                        REMOVE
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )
                }}
            />
        )
    }
}


export default Container
