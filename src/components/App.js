import React, { useState } from "react"

import './App.css'

import Form from './Form/Form'
import Header from './Header/Header'
import TodoList from './TodoList/TodoList'

export default function App(props) {

    const [todos, setTodos] = useState([
        {
            key: 0,
            title: "Test 1",
            done: false
        },
        {
            key: 1,
            title: "Test 2",
            done: false
        },
        {
            key: 2,
            title: "Test 3",
            done: false
        },
        {
            key: 3,
            title: "Test 4",
            done: false
        },
    ])

    const deleteTodo = key => {
        console.log(key)
        setTodos([...todos].filter(todo => todo.key !== key))
    }

    return (
        <div className="main">
            <Header />
            <TodoList todos={todos} deleteTodo={deleteTodo}/>
            <Form callback={(value) => setTodos([...todos, {
                key: Date.now(),
                title: value,
                done: false
            }])} />

            <div style={{height: 50}} />
        </div>
    )
}