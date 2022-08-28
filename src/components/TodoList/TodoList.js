import React from "react"
import './TodoList.css'
import TodoItem from "./TodoItem"

export default function Header({ todos }) {
    return (
        <div className="todo-list">
            { todos.map(todo => {
                return (
                    <TodoItem {...todo} />
                )
            }) }
        </div>
    )
}
