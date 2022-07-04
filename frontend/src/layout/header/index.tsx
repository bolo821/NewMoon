import React, { useState, useContext } from 'react';
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
import { ThemeContext } from 'layout';

const Header = () => {
    const navigate = useNavigate();
    const loc = useLocation();
    const { theme, setTheme } = useContext(ThemeContext);
    const [ searchKey, setSearchKey ] = useState('');
    const [ showModal, setShowModal ] = useState(false);

    const handleMenuToggle = () => {
        if (loc.pathname === '/menu') {
            navigate(-1);
        } else {
            navigate('/menu');
        }
    }

    const changeTheme = () => {
        if (theme === 'dark') setTheme('light');
        else setTheme('dark');
    }

    return (
        <>
            <div className='header-rt'>
                <div className='container-rt'>
                    <div className='left'>
                        <div className='nft'>
                            <span onClick={() => navigate('/home')}>NewMoon | NFT</span>
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
                            <li><Link to="/profile">Rewards</Link></li>
                        </ul>
                        <div className="flag">
                            <Language />
                        </div>
                        <div className="theme-select" onClick={changeTheme}>
                            <ThemeSelect day={theme === 'light'} />
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
                        <span onClick={() => navigate('/home')}>NewMoon | NFT</span>
                    </div>
                    <div className='right'>
                        <div className="menu">
                            <MobileBn onClick={changeTheme}>
                                <ThemeSelect day={theme === 'light'} mobile />
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