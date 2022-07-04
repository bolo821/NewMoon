import React from 'react';
import './index.scss';
import { useNavigate } from 'react-router-dom';
import Header from 'layout/header';
import Button from 'components/share/Button';
import SeeNftCard from 'components/home/SeeNftCard';
import AccountCard from 'components/home/AccountCard';
import SortBySelect from 'components/home/SortBySelect';
import NFTCard from 'components/home/NFTCard';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>  
            <Header />
            <div className='home-page-rt'>
                <div className='top-section'>
                    <div className='card-rt'>
                        <h1>
                            Buy, sell, and showcase NFTs
                        </h1>
                        <p>from leading Elrond creators and brands</p>
                        <p>Trade NFTs, Get Rewards</p>
                        <p>NewMoon is the community-owned marketplace with rewards for participanting</p>
                        <p>Explore the market to get started.</p>
                        <div className='action'>
                            <Button color='primary' onClick={() => navigate('/creator')}>
                                Become a creator
                            </Button>
                            <Button color='dark' onClick={() => navigate('/nft')}>
                                Explore NFTs
                            </Button>
                        </div>
                    </div>
                    <div className='flow'>
                        <p>
                            NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON NEWMOON 
                        </p>
                    </div>
                </div>
                <div className='container-rt'>
                    <div className='hot'>
                        <h2>🔥 HOT right now</h2>
                        <div className='row'>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <SeeNftCard />
                            </div>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <SeeNftCard />
                            </div>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <SeeNftCard />
                            </div>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <SeeNftCard />
                            </div>
                        </div>
                    </div>
                    <div className='top-account'>
                        <h2>Top Accounts</h2>
                        <div className="row">
                            <div className="col-20-rt col-xl-4 col-md-6 col-12">
                                <AccountCard name='Beskar DAO' />
                            </div>
                            <div className="col-20-rt col-xl-4 col-md-6 col-12">
                                <AccountCard name='Beskar DAO' />
                            </div>
                            <div className="col-20-rt col-xl-4 col-md-6 col-12">
                                <AccountCard name='Beskar DAO' />
                            </div>
                            <div className="col-20-rt col-xl-4 col-md-6 col-12">
                                <AccountCard name='Beskar DAO' />
                            </div>
                            <div className="col-20-rt col-xl-4 col-md-6 col-12">
                                <AccountCard name='Beskar DAO' />
                            </div>
                        </div>
                    </div>
                    <div className='explore'>
                        <div className='head'>
                            <h2>Explore</h2>
                            <div className='sort-by'>
                                <span>Sort by:</span>
                                <SortBySelect />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <NFTCard />
                            </div>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <NFTCard />
                            </div>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <NFTCard />
                            </div>
                            <div className='col-xxl-3 col-xl-4 col-md-6 col-12'>
                                <NFTCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
