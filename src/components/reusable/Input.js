import React, { useState } from 'react'

const Input = () => {
    const [text, setText] = useState('')
    return (
        <div className= "form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
            <h5>{text}</h5>
        </div>
    )
}

export default Input
