import React from 'react';
import './index.scss';

const Select = props => {
    const { label, options, onChange } = props;

    return (
        <div className="input-container-rt">
            <label>{label}</label>
            <div className="input-border">
                <select onChange={onChange}>
                    { options.map((ele, index) => (
                        <option key={index} value={ele.value}>{ele.text}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

export default Select;