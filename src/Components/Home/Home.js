import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SearchSection from '../SearchSection/SearchSection';

const Home = () => {
    const [books,setBooks] = useState([]);
    // console.log(books);
    useEffect(()=>{
        fetch('http://localhost:3002/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
    return (
        <div>
            <SearchSection />
            <div className="container">
                <div className="row ">
                    {
                        books.length ===0
                         && <div class="d-flex justify-content-center">
                         <div class="spinner-border text-info" role="status">
                           <span class="visually-hidden">Loading...</span>
                         </div>
                       </div>
                    }
                    {
                        books.map(book => <Card book={book} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;