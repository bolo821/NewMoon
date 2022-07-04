import React from 'react';
import './index.scss';
import PriceIcon from 'components/icons/PriceIcon';
import Button from 'components/share/Button';

const ItemCard = props => {
    const { type, image } = props;

    return (
        <div className="item-card-rt blue-shadow">
            <div className="image">
                <img src={image} alt="Img" />
            </div>
            <div className="item">
                <div className="item-id">
                    <span>MANDOBEEZ-223236</span>
                    <span>495 of 495</span>
                </div>
                <div className="item-name">
                    <span>Whistling Birds</span>
                </div>
                <div className="item-price">
                    <h5>
                        0.35{' '}
                        <PriceIcon />
                    </h5>
                    <h6>
                        ($81.22)
                    </h6>
                    { type === 'sale' ?
                        <Button color="danger" onClick={() => {}}>
                            Remove
                        </Button> :
                        <Button color="theme-primary" onClick={() => {}}>
                            Sell
                        </Button>
                    }
                </div>
            </div>
        </div>
    )
}

export default ItemCard;