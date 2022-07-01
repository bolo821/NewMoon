import React, { useState } from 'react';
import './index.scss';
import Header from 'layout/header';
import BadgeIcon from 'components/icons/BadgeIcon';
import ItemCard from 'components/profile/ItemCard';
import ItemImg from 'assets/img/item.png';
import UpArrowIcon from 'components/icons/UpArrowIcon';
import Button from 'components/share/Button';
import UploadCollectionModal from 'components/profile/UploadCollectionModal';

const UserProfile = () => {
    const [ showUploadModal, setShowUploadModal ] = useState(false);

    return (
        <>
            <Header />
            <div className="user-profile-page">
                <div className="container-rt">
                    <div className="row">
                        <div className="col-lg-4 col-md-12">
                            <div className="user-card">
                                <div className="avatar-name">
                                    <div className="avatar"></div>
                                    <div className="name">
                                        <span>Beskar DAO</span>
                                        <span><BadgeIcon /></span>
                                    </div>
                                </div>
                                <div className="wallet">
                                    <span>
                                        ewnflwewlkggweewfe ... 2nx20x20nxkjad
                                    </span>
                                </div>
                                <Button color="theme-primary" onClick={() => setShowUploadModal(true)}>
                                    Create +
                                </Button>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12">
                            <div className="on-sale">
                                <div className='header'>
                                    <h2>Items on Sale</h2>
                                    <span><UpArrowIcon /></span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="sale" image={ItemImg} />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="sale" image={ItemImg} />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="sale" image={ItemImg} />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="sale" image={ItemImg} />
                                    </div>
                                </div>
                            </div>
                            <div className="on-sale">
                                <div className='header'>
                                    <h2>Owned NFTs</h2>
                                    <span><UpArrowIcon /></span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="owned" image={ItemImg} />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="owned" image={ItemImg} />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="owned" image={ItemImg} />
                                    </div>
                                    <div className="col-md-6 col-sm-12">
                                        <ItemCard type="owned" image={ItemImg} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <UploadCollectionModal showModal={showUploadModal} setShowModal={setShowUploadModal} />
        </>
    )
}

export default UserProfile;