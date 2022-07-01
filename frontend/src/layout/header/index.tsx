import React, { useState } from 'react';
import './index.scss';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import SearchBox from 'components/header/SearchBox';
import Button from 'components/share/Button';
import Language from 'components/header/Language';
import ThemeSelect from 'components/header/ThemeSelect';
import MobileBn from 'components/header/MobileBn';
import MobileSearchIcon from 'components/icons/MobileSearchIcon';
import MobileMenuIcon from 'components/icons/MobileMenuIcon';
import ConnectWalletModal from 'components/header/ConnectWalletModal';

const Header = () => {
    const navigate = useNavigate();
    const loc = useLocation();
    const [ searchKey, setSearchKey ] = useState('');
    const [ showModal, setShowModal ] = useState(false);

    const handleMenuToggle = () => {
        if (loc.pathname === '/menu') {
            navigate(-1);
        } else {
            navigate('/menu');
        }
    }

    return (
        <>
            <div className='header-rt'>
                <div className='container-rt'>
                    <div className='left'>
                        <div className='nft'>
                            <span>NewMoon | NFT</span>
                        </div>
                        <div className="search">
                            <SearchBox keyword={searchKey} setKeyword={setSearchKey} />
                        </div>
                        <Button color="primary" onClick={() => {}}>
                            Manage / Sell
                        </Button>
                    </div>
                    <div className='right'>
                        <ul>
                            <li><Link to="/collections">Collections</Link></li>
                            <li><Link to="/rewards">Rewards</Link></li>
                        </ul>
                        <div className="flag">
                            <Language />
                        </div>
                        <div className="theme-select">
                            <ThemeSelect day />
                        </div>
                        <Button id="id-connect-wallet-btn" color="primary" onClick={() => setShowModal(true)}>
                            Connect
                        </Button>
                    </div>
                </div>
            </div>
            <div className='header-mobile-rt'>
                <div className='container-rt'>
                    <div className='left'>
                        <span>NewMoon | NFT</span>
                    </div>
                    <div className='right'>
                        <div className="menu">
                            <MobileBn onClick={() => {}}>
                                <ThemeSelect day mobile />
                            </MobileBn>
                        </div>
                        <div className="menu">
                            <MobileBn onClick={() => {}}>
                                <MobileSearchIcon />
                            </MobileBn>
                        </div>
                        <div>
                            <MobileBn onClick={handleMenuToggle}>
                                <MobileMenuIcon open={loc.pathname === '/menu' ? false : true} />
                            </MobileBn>
                        </div>
                    </div>
                </div>
            </div>
            <ConnectWalletModal showModal={showModal} setShowModal={setShowModal} />
        </>
    )
}

export default Header;