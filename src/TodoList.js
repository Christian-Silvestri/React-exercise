import React from 'react';



class TodoList extends React.Component {

    state = {
        todos: [],
    }

    handleAddTodos = (event) => {

        event.preventDefault()

        const todo = event.target.elements.todo.value

        this.setState((state) => {
            return {
                todos: [...state.todos, todo],
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

                </form>
                <ul>
                    {this.state.todos.map((todo, index) =>
                        <li key={index}>
                            {todo}
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default TodoList