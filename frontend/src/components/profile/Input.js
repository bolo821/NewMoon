import React from "react";
import './index.scss';

const Input = props => {
    const { label, value, onChange, placeholder, type } = props;

    return (
        <div className="input-container-rt">
            <label>{label}</label>
            <div className="input-border">
                <input type={type ? type : 'text'} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
            </div>
        </div>
    )
}

export default Input;