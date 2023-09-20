import { useContext } from "react"
import TodoContext from "./context/TodoContext"

function ListElement({todo}) {

  const {deleteTodo,toggleTodo} = useContext(TodoContext)

  return (
    <li className={`${todo.completed ? "completed" : "" }`}>
        <div className="view">
            <input className="toggle" checked={todo.completed} type="checkbox" onChange={() => toggleTodo(todo)}/>
            <label>{todo["todoText"]}</label>
            <button className="destroy" onClick={() => {deleteTodo(todo)}}></button>
        </div>
	</li>
  )
}

export default ListElement