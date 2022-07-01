import React from 'react';

const MobileMenuIcon =  props => {
    const { open } = props;

    if (open) {
        return (
            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="16" height="2" rx="1" fill="url(#paint0_linear_28_4216)"/>
                <rect y="5" width="16" height="2" rx="1" fill="url(#paint1_linear_28_4216)"/>
                <rect y="10" width="16" height="2" rx="1" fill="url(#paint2_linear_28_4216)"/>
                <defs>
                    <linearGradient id="paint0_linear_28_4216" x1="0" y1="2" x2="16" y2="2" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4697F3"/>
                        <stop offset="1" stopColor="#60CCF5"/>
                    </linearGradient>
                    <linearGradient id="paint1_linear_28_4216" x1="0" y1="7" x2="16" y2="7" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4697F3"/>
                        <stop offset="1" stopColor="#60CCF5"/>
                    </linearGradient>
                    <linearGradient id="paint2_linear_28_4216" x1="0" y1="12" x2="16" y2="12" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4697F3"/>
                        <stop offset="1" stopColor="#60CCF5"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    } else {
        return (
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L6.25 6.25M11.5 11.5L6.25 6.25M6.25 6.25L1 11.5L11.5 1" stroke="url(#paint0_linear_32_2707)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                    <linearGradient id="paint0_linear_32_2707" x1="1" y1="11.5" x2="11.5" y2="11.5" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4697F3"/>
                        <stop offset="1" stopColor="#60CCF5"/>
                    </linearGradient>
                </defs>
            </svg>
        )
    }
}

export default MobileMenuIcon;