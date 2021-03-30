import React from 'react';
import './SearchSection.css'

const SearchSection = () => {
    return (
        <div className="d-flex justify-content-center align-items-center search">
            <div className="search-container">
                <input type="text" placeholder="Search..." />
                <button className="searchBtn">Search</button>
            </div>
        </div>
    );
};

export default SearchSection;