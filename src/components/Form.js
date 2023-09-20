import React, { useContext } from 'react'
import TodoContext from './context/TodoContext'

function Form() {

    const {addTodo,} = useContext(TodoContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = e.target.todo_name.value
        addTodo(todo);
        e.target.todo_name.value = "";

        

    }

  return (
    <header className="header">
		<h1>todos</h1>
		<form onSubmit={handleSubmit}>
			<input className="new-todo" placeholder="What needs to be done?" autoFocus name='todo_name'/>
		</form>
	</header>
  )
}

export default Form