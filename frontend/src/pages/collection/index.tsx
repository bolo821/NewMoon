import React from 'react';
import './index.scss';
import Header from 'layout/header';
import CollectionList from 'components/collection/CollectionList';

const data = [
    { collection: 'Terraforms', floor: 0.38, floor_change: 2.70, day_vol: '2,058.28', day_vol_change: '44.24', total_vol: '4,067,390', owners: '2,170', items: '9,899' },
    { collection: 'Terraforms', floor: 0.38, floor_change: 2.70, day_vol: '2,058.28', day_vol_change: '44.24', total_vol: '4,067,390', owners: '2,170', items: '9,899' },
    { collection: 'Terraforms', floor: 0.38, floor_change: 2.70, day_vol: '2,058.28', day_vol_change: '44.24', total_vol: '4,067,390', owners: '2,170', items: '9,899' },
    { collection: 'Terraforms', floor: 0.38, floor_change: 2.70, day_vol: '2,058.28', day_vol_change: '44.24', total_vol: '4,067,390', owners: '2,170', items: '9,899' },
    { collection: 'Terraforms', floor: 0.38, floor_change: 2.70, day_vol: '2,058.28', day_vol_change: '44.24', total_vol: '4,067,390', owners: '2,170', items: '9,899' },
]

const Collection = () => {
    return (
        <>
            <Header />
            <div className="collection-page-rt">
                <div className="container-rt">
                    <h1>Collections</h1>
                    <p className="description">The top NFT collections on, ranked by floor price, volume and other statistics.</p>
                </div>
                <hr />
                <div className="container-rt">
                    <div className="controller">
                        <div className="filter">
                            <ul>
                                <li>All</li>
                                <li className='active'>Verified</li>
                            </ul>
                        </div>
                        <div className="sort">
                            <select>
                                <option value="Highest 24h Vol">Highest 24h Vol</option>
                                <option value="Highest 24h Vol">Highest Total Vol</option>
                                <option value="Highest 24h Vol">Highest Floor</option>
                            </select>
                        </div>
                    </div>
                    <div className="list">
                        <CollectionList data={data} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection;