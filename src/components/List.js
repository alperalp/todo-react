import React, { useContext } from 'react'
import ListElement from './ListElement'
import TodoContext from './context/TodoContext'

function List() {

	const {todos, filter} = useContext(TodoContext)

	const renderList = (filter) => {
		switch (filter) {
			case "all":
				return (todos.map((item, index) => {
					return(<ListElement todo={item} key={index}/>);
				}))
			case "active":
				return (todos.filter((item) => {
					return item.completed === false;
				})
				.map((item, index) => {
					return (<ListElement todo={item} key={index}/>);
				})
				)
			case "completed":
				return (todos.filter((item) => {
					return item.completed === true;
				})
				.map((item, index) => {
					return (<ListElement todo={item} key={index}/>);
				})
				)
		
			default:
				return(
				todos.map((item, index) => {
					return(<ListElement todo={item} key={index}/>);
				}))
		}
	}

  return (
    <section className="main">

		<ul className="todo-list">
			{
				renderList(filter)
			}
			
			
		</ul>
	</section>
  )
}

export default List