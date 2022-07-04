import React from 'react';
import MoonIcon from 'components/icons/MoonIcon';
import SunIcon from 'components/icons/SunIcon';
import MobileMoonIcon from 'components/icons/MobileMoonIcon';
import MobileSunIcon from 'components/icons/MobileSunIcon';

const ThemeSelect = props => {
    const { day, mobile } = props;

    if (!day) {
        if (mobile) {
            return <MobileSunIcon />
        }
        return <SunIcon />
    } else {
        if (mobile) {
            return <MobileMoonIcon />
        }
        return <MoonIcon />
    }
}

export default ThemeSelect;