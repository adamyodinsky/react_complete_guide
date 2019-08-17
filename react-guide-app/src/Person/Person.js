import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}> i'm {props.name} and i'm {props.age} years old</p>
            {/* <p>{props.children}</p> */}
            Name: <input type="text" onChange={props.nameChanged}></input>
            Age: <input type="text" onChange={props.ageChanged}></input>
        </div>
    );
}

export default person;