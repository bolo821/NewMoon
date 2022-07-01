import React, { useState, useEffect } from 'react';
import './index.scss';
import Table from '../share/Table';
import BadgeIcon from 'components/icons/BadgeIcon';
import PriceIcon from 'components/icons/PriceIcon';
import DropArrow from 'components/icons/DownArrow';

const Col0 = num => {
    return (
        <div>
            <span className="no">{num}</span>
            <span className="image"></span>
            <span className="collection">Terraforms</span>
            <span><BadgeIcon /></span>
        </div>
    )
}

const Col1 = props => {
    const { price, change } = props;

    return (
        <div>
            <p>
                <PriceIcon />
                <span className="price">{price}</span>
            </p>
            <span className="change">+{change}%</span>
        </div>
    )
}

const Col3 = () => {
    return (
        <div>
            <PriceIcon />
            <span>4,067,390</span>
        </div>
    )
}

const cols = [
    { key: 'collection', value: 'Collection' },
    { key: 'floor', value: 'Floor' },
    { key: 'day_vol', value: '24h Vol' },
    { key: 'total_vol', value: 'Total Vol' },
    { key: 'owners', value: 'Owners' },
    { key: 'items', value: 'Items' },
];

const CollectionList = props => {
    const { data } = props;
    const [ rows, setRows ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ rowsPerPage ] = useState(10);

    useEffect(() => {
        setRows(data.map((ele, index) => (
            {
                collection: Col0(index),
                floor: <Col1 price={ele.floor} change={ele.floor_change} />,
                day_vol: <Col1 price={ele.day_vol} change={ele.day_vol_change} />,
                total_vol: <Col3 />,
                owners: ele.owners,
                items: ele.items,
            }
        )));
    }, [ data ]);

    return (
        <>
            <div className="collection-table-rt">
                <Table
                    rows={rows.slice((currentPage-1)*rowsPerPage, currentPage*rowsPerPage)}
                    cols={cols}
                    currentPageNum={currentPage}
                    setCurrentPageNum={setCurrentPage}
                    totalRowNum={rows.length}
                    rowsPerPage={rowsPerPage}
                />
            </div>
            <div className="collection-list-rt">
                <ul>
                    { data.map((ele, index) => (
                        <li key={index}>
                            <div className="main-info">
                                <div className="left">
                                    <span className="no">{index+1}</span>
                                    <span className="image"></span>
                                    <span className="collection">Terraforms</span>
                                    <BadgeIcon />
                                </div>
                                <div className="right">
                                    <DropArrow />
                                </div>
                            </div>
                            <div className="other-info">
                                <div className="row">
                                    <div className="col-3">Floor</div>
                                    <div className="col-5">
                                        <PriceIcon />
                                        <span>{ele.floor}</span>
                                    </div>
                                    <div className="col-4">
                                        +{ele.floor_change}%
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">24h Vol</div>
                                    <div className="col-5">
                                        <PriceIcon />
                                        <span>{ele.day_vol}</span>
                                    </div>
                                    <div className="col-4">
                                        +{ele.day_vol_change}%
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CollectionList;