import React from 'react';

const MobileBn = props => {
    const { children, onClick } = props;

    return (
        <div className="mobile-header-bn-rt" onClick={onClick}>
            {children}
        </div>
    )
}

export default MobileBn;