import React from 'react';

const ShowPassword = (props) => {
    return <div className={props.className}>
        <img
            src={props.src} 
                alt=""
            onClick={props.onClick}
        />
        <span>{props.showpass} Password</span>
    </div>
}

export default ShowPassword