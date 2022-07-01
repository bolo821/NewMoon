import React from "react";
import './index.scss';
import { Modal } from 'react-bootstrap';
import CloseIcon from "components/icons/CloseIcon";
import MaiarDefiIcon from "components/icons/MaiarDefiIcon";
import RightArrowIcon from "components/icons/RightArrowIcon";
import MaiarAppIcon from "components/icons/MaiarAppIcon";
import LedgerIcon from "components/icons/LedgerIcon";
import WebWalletIcon from "components/icons/WebWalletIcon";

const ConnectWalletModal = props => {
    const { showModal, setShowModal } = props;

    return (
        <Modal
            show={showModal}
            onHide={() => {setShowModal(false)}}
            keyboard={false}
            className='connect-wallet-modal-rt'
            centered
        >
            <div className="header">
                <h3>Connect Wallet</h3>
                <span onClick={() => setShowModal(false)}><CloseIcon /></span>
            </div>
            <ul>
                <li>
                    <div>
                        <MaiarDefiIcon />
                        Maiar DeFi Wallet
                    </div>
                    <RightArrowIcon />
                </li>
                <li>
                    <div>
                        <MaiarAppIcon />
                        Maiar App
                    </div>
                    <RightArrowIcon />
                </li>
                <li>
                    <div>
                        <LedgerIcon />
                        Ledger
                    </div>
                    <RightArrowIcon />
                </li>
                <li>
                    <div>
                        <WebWalletIcon />
                        Elrond Web Wallet
                    </div>
                    <RightArrowIcon />
                </li>
            </ul>
            <div className="footer">
                <p>If you’re on desktop, try Maiar DeFi Wallet</p>
                <p>If you’re on mobile, try Maiar App</p>
                <p>New to Elrond?</p>
                <p>Learn How to setup a wallet</p>
            </div>
        </Modal>
    )
}

export default ConnectWalletModal;