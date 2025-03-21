import React from 'react';

import "../styles/auth.css";

const Input = (props) => {
    return <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange} required/>
}

export default Input;