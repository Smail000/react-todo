import React from "react"
import './TodoList.css'
import TodoItem from "./TodoItem"

export default function TodoList({ todos, deleteTodo }) {

    if (!todos.length) {
        return (
            <h1>No todos</h1>
        )
    }

    return (
        <div className="todo-list">
            { todos.map(todo => {
                return (
                    <TodoItem {...todo} deleteTodo={deleteTodo} id={todo.key}/>
                )
            }) }
        </div>
    )
}
