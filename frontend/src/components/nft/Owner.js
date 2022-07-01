import React from 'react';
import './index.scss';
import BadgeIcon from 'components/icons/BadgeIcon';

const Owner = props => {
    const { role, name } = props;

    return (
        <div className="nft-owner-info-rt">
            <p>{role}</p>
            <div>
                <div className="avatar"></div>
                <div className="name">{name}</div>
                <div className="badge">
                    <span><BadgeIcon /></span>
                </div>
            </div>
        </div>
    )
}

export default Owner;