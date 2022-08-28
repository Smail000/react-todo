import React, { useState } from "react"
import './Form.css'

export default function Form(props) {

    const [todo, setTodo] = useState('')

    return (
        <div className="form">
            <input type={"text"} id="feild"/>
            <input type={"button"} id="btn" />
        </div>
    )
}


