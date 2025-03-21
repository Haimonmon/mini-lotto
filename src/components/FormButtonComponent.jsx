import React from 'react';

const FormButton = (props) => {
    return <div className={props.className}>
        <button type={props.type}>Let's Go</button>
    </div>
}

export default FormButton