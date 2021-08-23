import React from 'react'
import TodoItem from './TodoItem'
import "./TodoList.css"

function TodoList({todos, onCheckToggle}) {  // todos is an array
    return (
        <div className="TodoList">
            {todos.map(todo => 
                (<TodoItem todo={todo} key={todo.id} onCheckToggle={onCheckToggle}/>)
            )}
        </div>
    )
}

export default TodoList
