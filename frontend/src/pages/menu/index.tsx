import React, { useState } from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import Header from 'layout/header';
import SearchBox from 'components/header/SearchBox';
import Button from 'components/share/Button';

const Menu = () => {
    const [ searchKey, setSearchKey ] = useState('');

    const openWalletModal = () => {
        document.getElementById('id-connect-wallet-btn')?.click();
    }

    return (
        <>
            <Header />
            <div className="menu-page-rt">
                <div className="container-rt">
                    <div className="search">
                        <SearchBox keyword={searchKey} setKeyword={setSearchKey} />
                    </div>
                    <div className="manage">
                        <Button color="primary" onClick={() => {}}>
                            Manage / Sell
                        </Button>
                    </div>
                    <ul>
                        <Link to="/collections">
                            <li>Collections</li>
                        </Link>
                        <Link to="/rewards">
                            <li>Rewards</li>
                        </Link>
                    </ul>
                    <div className="connect">
                        <Button color="primary" onClick={openWalletModal}>
                            Connect
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Menu;