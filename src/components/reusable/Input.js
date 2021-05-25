import React, { useState } from 'react'

const Input = ({ label, dataKey, getData, icon}) => {
    const [text, setText] = useState('')

    const inputContainer ={
        position: 'relative',
        marginBottom: '10px'
    }

    const inputIcon ={
        position: 'absolute',
        right: '15px',
        top: '40px',
        color: 'gray',
        fontsize: '20px'
    }

    const updateText = (value) => {
        if (dataKey) getData(dataKey.toLowerCase(), value)
        setText(value)
    }

    return (
        <div style= {inputContainer}>
            <label htmlFor="text">{label}</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
            <i className= "material-icons" style= {inputIcon}>{icon}</i>
        </div>
    )
}

export default Input
