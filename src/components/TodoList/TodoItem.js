
import React, { useState } from "react"
import "./TodoList.css"

export default function TodoItem ({title, done}) {

    const [isDone, setIsDone] = useState(done)

    return (
        <div className="todo-item">
            <input type={"checkbox"} onClick={ () => {
                    setIsDone(!isDone)
                }
            }/>
            <p className={isDone ? "done" : ""}>{title}</p>
        </div>
    )
}