import React from 'react';
import './index.scss';
import Button from 'components/share/Button';

const SeeNftCard = props => {
    return (
        <div className='see-nft-card-rt'>
            <div className='image'></div>
            <div className='see'>
                <Button color='theme-primary' onClick={() => {}}>
                    See NFT
                </Button>
            </div>
        </div>
    )
}

export default SeeNftCard;