import React from 'react';
import './index.scss';

const Button = (props: any) => {
    const { children, color, onClick, className, id } = props;

    return (
        <button id={id} className={`button-rt ${className ? className : ''} ${color}`} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;