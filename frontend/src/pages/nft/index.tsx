import React, { useState } from 'react';
import './index.scss';
import Header from 'layout/header';
import Button from 'components/share/Button';
import Owner from 'components/nft/Owner';
import Table from 'components/share/Table';
import PriceIcon from 'components/icons/PriceIcon';
import BadgeIcon from 'components/icons/BadgeIcon';

const transactionColData = [
    { key: 'price', value: 'Price' },
    { key: 'seller', value: 'Seller' },
    { key: 'buyer', value: 'Buyer' },
    { key: 'date', value: 'Date' },
];

const transactionRowData = [
    { 
        price: <><span className="icon"><PriceIcon /></span><span>{0.01}</span></>,
        seller: <>Profile1<span className="icon-badge"><BadgeIcon /></span></>,
        buyer: <>Profile2<span className="icon-badge"><BadgeIcon /></span></>,
        date: '30 Oct 21 - 5:43 pm'
    },
    { 
        price: <><span className="icon"><PriceIcon /></span><span>{0.01}</span></>,
        seller: <>Profile1<span className="icon-badge"><BadgeIcon /></span></>,
        buyer: <>Profile2<span className="icon-badge"><BadgeIcon /></span></>,
        date: '30 Oct 21 - 5:43 pm'
    },
    { 
        price: <><span className="icon"><PriceIcon /></span><span>{0.01}</span></>,
        seller: <>Profile1<span className="icon-badge"><BadgeIcon /></span></>,
        buyer: <>Profile2<span className="icon-badge"><BadgeIcon /></span></>,
        date: '30 Oct 21 - 5:43 pm'
    },
    { 
        price: <><span className="icon"><PriceIcon /></span><span>{0.01}</span></>,
        seller: <>Profile1<span className="icon-badge"><BadgeIcon /></span></>,
        buyer: <>Profile2<span className="icon-badge"><BadgeIcon /></span></>,
        date: '30 Oct 21 - 5:43 pm'
    },
    { 
        price: <><span className="icon"><PriceIcon /></span><span>{0.01}</span></>,
        seller: <>Profile1<span className="icon-badge"><BadgeIcon /></span></>,
        buyer: <>Profile2<span className="icon-badge"><BadgeIcon /></span></>,
        date: '30 Oct 21 - 5:43 pm'
    },
];

const Nft = () => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ rowsPerPage ] = useState(10);

    return (
        <>
            <Header />
            <div className="nft-page-rt">
                <div className="container-rt">
                    <div className="nft-info">
                        <div className="image"></div>
                        <div className="info">
                            <h1 className="name">Mando Jetpack</h1>
                            <p className="description">MandoBeez can use it for prolonged travel and not just for short brusts of elevation.</p>
                            <h2 className="price">
                                0.3 EGLD {' '}
                                <span>($81.22)</span>
                            </h2>
                            <p className="amount">1 of 1 Available</p>
                            <h3>Collection</h3>
                            <p className="collection">MANDOBEEZ-f81a87</p>
                            <h3>Properties</h3>
                            <Button color="theme-primary" onClick={() => {}}>Buy now</Button>
                            <p className="loyalty">Creator royalties: 30%</p>
                        </div>
                    </div>
                    <div className="owner-info">
                        <h2>
                            Information
                        </h2>
                        <div className="owner">
                            <Owner role="Owner" name="Beskar DAO" />
                        </div>
                        <div>
                            <Owner role="Creator" name="Beskar DAO" />
                        </div>
                    </div>
                    <div className="history">
                        <h2>History</h2>
                        <Table
                            rows={transactionRowData.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage)}
                            cols={transactionColData}
                            currentPageNum={currentPage}
                            setCurrentPageNum={setCurrentPage}
                            totalRowNum={transactionRowData.length}
                            rowsPerPage={rowsPerPage}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nft;