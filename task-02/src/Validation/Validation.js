import React from 'react'

const Validation = (props) => {
    let len = props.str.length;
    let msg;
    if (props.str.length < 5) {
        msg = "To Short!"
    } else if (props.str.length > 15) {
        msg = "To Long!"
    } else {
        msg = "That's good"
    }
    
    return (
    <div>
        <p>Length: {len} </p>
        <p>Validation: {msg} </p>
    </div>
    )
}

export default Validation;