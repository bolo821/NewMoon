import React from 'react';
import SearchIcon from 'components/icons/SearchIcon';
import './index.scss';

const SearchBox = props => {
    const { keyword, setKeyword } = props;

    return (
        <div className="search-box-rt">
            <input
                type="text"
                placeholder='Search collectibles and collections'
                value={keyword}
                onChange={e => setKeyword(e.target.value)}
            />
            <span>
                <SearchIcon pid={new Date().getTime()} />
            </span>
        </div>
    )
}

export default SearchBox;