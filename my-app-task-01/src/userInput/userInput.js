import React from 'react'
import './userInput.css'

const userInput = (props) => {

    return (
        <div className="UserInput">
            <input type="text" onClick={props.click} />
        </div>
    );
}

export default userInput;