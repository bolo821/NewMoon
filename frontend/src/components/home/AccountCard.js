import React from 'react';
import BadgeIcon from 'components/icons/BadgeIcon';

const AccountCard = props => {
    const { name } = props;

    return (
        <div className="account-card-rt">
            <div className="avatar"></div>
            <div className="name">
                <span>{name}</span>
            </div>
            <div className="badge">
                <span>
                    <BadgeIcon />
                </span>
            </div>
        </div>    
    )
}

export default AccountCard;