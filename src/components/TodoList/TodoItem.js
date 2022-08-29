
import React, { useState } from "react"
import "./TodoList.css"

export default function TodoItem ({title, done, id, deleteTodo}) {

    const [isDone, setIsDone] = useState(done)

    return (
        <div className="todo-item">
            <input className="check" type="checkbox" onClick={ () => {
                    setIsDone(!isDone)
                }
            }/>
            <div style={{width: "85%"}}>
                <p className={isDone ? "done" : ""}>{title}</p>
            </div>

            <input className="del" type="button" value="×" onClick={() => deleteTodo(id)}/>
        </div>
    )
}