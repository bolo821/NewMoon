import React from 'react';
import SettingIcon from 'components/icons/SettingIcon';
import DownArrow from 'components/icons/DownArrow';

const SortBySelect = props => {
    return (
        <div className="sort-by-select-rt">
            <span className="setting-icon">
                <SettingIcon />
            </span>
            <span className="text">New</span>
            <span className="separater"></span>
            <span className="arrow">
                <DownArrow />
            </span>
        </div>
    )
}

export default SortBySelect;