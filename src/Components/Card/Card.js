import React from 'react';
import './Card.css'
import img from '../../books/image 19.png'

const Card = () => {
    return (
        <div className="col-md-4 g-4">
            <div className="card card-custom">
            <img src={img} className="card-img-top img-fluid" alt=""/>
            <div className="card-body">
                <h5 className="card-title">Javascript everywhere</h5>
                <p className="card-text">Adam. De Stock</p>
                <div className="d-flex justify-content-between">
                <h2>$234</h2>
                <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;