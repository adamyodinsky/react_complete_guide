import React from 'react'
import './userInput.css'

const userInput = (props) => {
    
    return (
        <div className="UserInput">
            <input type="text" onChange={props.change} />
        </div>
    );
}

export default userInput;