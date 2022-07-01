import React from 'react';
import './index.scss';
import Header from 'layout/header';
import BadgeIcon from 'components/icons/BadgeIcon';
import EyeIcon from 'components/icons/EyeIcon';
import CopyIcon from 'components/icons/CopyIcon';
import EarthIcon from 'components/icons/EarthIcon';
import DiscordIcon from 'components/icons/DiscordIcon';
import TwitterIcon from 'components/icons/TwitterIcon';
import ShareIcon from 'components/icons/ShareIcon';
import PriceIcon from 'components/icons/PriceIcon';
import HelpIcon from 'components/icons/HelpIcon';
import SearchGrayIcon from 'components/icons/SearchGrayIcon';
import CreatorCard from 'components/creator/CreatorCard';

const Creator = () => {
    return (
        <>
            <Header />
            <div className="creator-page-rt">
                <div className="top-section">
                    <div className="container-rt">
                        <div className="profile">
                            <div className="user">
                                <div className="avatar"></div>
                                <div className="other">
                                    <p className="name">
                                        <span>Gnogen</span>
                                        <BadgeIcon />
                                        <EyeIcon />
                                    </p>
                                    <p className="wallet">
                                        <div>
                                            <span>0x60E4...a7c6</span>
                                            <CopyIcon />
                                        </div>
                                        <div>
                                            <span>The GNOGEN is a collection of up...</span>
                                            <span>More</span>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            <div className="share">
                                <EarthIcon />
                                <DiscordIcon />
                                <TwitterIcon />
                                <div className="share-bn">
                                    <ShareIcon />
                                    <span>Share</span>
                                </div>
                            </div>
                            <div className="trade-earn">
                                <div className="inner">
                                    Trade to Earn Rewards
                                </div>
                            </div>
                        </div>
                        <div className="nft-info">
                            <div className="floor">
                                <span>Floor:</span>
                                <PriceIcon />
                                <span className="amount">18.69</span>
                                <span className='change'>-2.66%</span>
                                <HelpIcon />
                            </div>
                            <div className="total-vol">
                                <span>Total Vol:</span>
                                <PriceIcon />
                                <span className="amount">18.69</span>
                            </div>
                            <div className="items">
                                <span>Items:</span>
                                <span className="amount">19,412</span>
                            </div>
                            <div className="items">
                                <span>items:</span>
                                <span className="amount">12,626</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab">
                    <div className="container-rt">
                        <ul>
                            <li className="active">Items</li>
                            <li>Activity</li>
                        </ul>
                    </div>
                </div>
                <div className="body">
                    <div className="container-rt">
                        <div className="filter">
                            <div className="sort">
                                <select>
                                    <option value="Highese 24h Vol">Highese 24h Vol</option>
                                    <option value="Highese 24h Vol">Highese 24h Vol</option>
                                    <option value="Highese 24h Vol">Highese 24h Vol</option>
                                </select>
                            </div>
                            <div className="search">
                                <span><SearchGrayIcon /></span>
                                <input type="text" placeholder='Name, Token ID...' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <CreatorCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Creator;