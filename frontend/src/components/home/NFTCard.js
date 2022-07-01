import React from 'react';
import './index.scss';
import PriceIcon from 'components/icons/PriceIcon';
import Button from 'components/share/Button';

const NFTCard = props => {
    return (
        <div className="nft-card-rt">
            <div className="owner">
                <div className="avatar"></div>
                <div className="name">
                    <span>owned by</span>
                    <span>BlazzordNFT</span>
                </div>
            </div>
            <div className="image"></div>
            <div className="nft-id">
                <span>AWM-764aa0</span>
                <span>1 of 1</span>
            </div>
            <div className="nft-name">
                <span>The Road</span>
            </div>
            <div className="action">
                <span className="price">
                    0.35{' '}
                    <PriceIcon />
                </span>
                <span className="price-usd">
                    ($81.22)
                </span>
                <Button color="primary" onClick={() => {}}>
                    Buy
                </Button>
            </div>
        </div>
    )
}

export default NFTCard;