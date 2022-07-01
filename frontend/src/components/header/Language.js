import React from 'react';
import './index.scss';
import FlagIcon from 'components/icons/FlagIcon';
import DownArrow from 'components/icons/DownArrow';

const Language = props => {
    return (
        <div className="language-select-rt">
            <span>
                <FlagIcon />
            </span>
            <span>
                <DownArrow />
            </span>
        </div>
    )
}

export default Language;