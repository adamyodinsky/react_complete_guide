import React from 'react'
import './userOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p> User Name: {props.UserName}</p>
        </div>
    );
}

export default userOutput;