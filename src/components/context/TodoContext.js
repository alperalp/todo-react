import { createContext, useState } from "react";
const TodoContext = createContext();

export const TodoProvider = ({children}) =>{
    const [todos, setTodos] = useState([{
        todoText: "Learn React",
        completed : false,
        },
    ]);
    const [filter, setFilter] = useState("all");


    const clearCompleted = () => {
        setTodos(todos.filter((todo) => {
            return todo.completed === false;
        }))
    }

    const addTodo = (text) => {
        setTodos((oldTodos => [...oldTodos, {
            todoText: text,
            completed : false,
        }]))
        
    }
    const toggleTodo = (todo) => {
        setTodos(todos.map((item) => {
            if (item.todoText === todo.todoText) {
                item.completed = !item.completed
                return (item);
            }
            else{
                return item;
            }
        }))
    }
    const deleteTodo = (todo) => {
        setTodos(todos.filter((item) => item.todoText !== todo.todoText));
    }
    const value = {
        todos,
        setTodos,
        addTodo,
        toggleTodo,
        deleteTodo,
        filter,
        setFilter,
        clearCompleted
    }

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}
export default TodoContext