import PriceIcon from "components/icons/PriceIcon";
import React from "react";
import './index.scss';

const CreatorCard = props => {
    return (
        <div className="creator-card-rt">
            <div className="image"></div>
            <p>Gnogen</p>
            <div className="price-rank">
                <div className="price">
                    <PriceIcon />
                    <span>18.69</span>
                </div>
                <div className="rank">
                    <span>Rank 13, 784</span>
                </div>
            </div>
        </div>
    )
}

export default CreatorCard;