import React from 'react';
import { useHistory } from 'react-router';
import './Card.css'
// import img from '../../books/image 19.png'

const Card = (props) => {
    console.log(props.book);
    const {name,price,author,bookImage,_id} = props.book;
    const history =  useHistory();
    const handleClick = (id)=>{
        history.push(`/checkout/${id}`)
    }

    return (
        <div className="col-md-4 g-4">
            <div className="card card-custom">
            <img src={bookImage} className="card-img-top img-fluid" alt=""/>
            <div className="card-body">
                <h5 className="card-title"> {name} </h5>
                <p className="card-text"> {author} </p>
                <div className="d-flex justify-content-between">
                <h2>$ {price} </h2>
                <button onClick={()=>handleClick(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Card;