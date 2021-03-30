import React from 'react';
import Card from '../Card/Card';
import SearchSection from '../SearchSection/SearchSection';

const Home = () => {
    return (
        <div>
            <SearchSection />
            <div className="container">
                <div className="row ">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
};

export default Home;