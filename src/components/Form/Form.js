import React, { useState } from "react"
import './Form.css'

export default function Form({ callback }) {

    const [feild, setFeild] = useState('Test')

    return (
        <div className="form">
            <input 
                type={"text"} 
                id="feild" 
                value={feild} 
                onChange={(e) => setFeild(e.target.value)} 
                onKeyDown={e => {
                    if (e.nativeEvent.key === "Enter") {
                        if (feild) {
                            callback(feild)
                            setFeild('')
                        }
                    }
                }} 
            />

            <input 
                type={"button"} 
                id="btn" 
                value={"+"} 
                onClick={() => {
                    if (feild) {
                        callback(feild)
                        setFeild('')
                    }
                }}
            />
        </div>
    )
}


