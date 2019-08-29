import React from 'react';
import './StringComponent.css'

const StringComponent = (props) => {
    return (
        <div className="StringComponent">
            {props.str}
        </div>
    )
}

export default StringComponent;