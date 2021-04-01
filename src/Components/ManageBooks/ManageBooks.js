import React, { useEffect, useState } from "react";
import ManageBookList from "../ManageBookList/ManageBookList";

const ManageBooks = () => {
    const [books,setBooks] = useState([]);
    // console.log(books);
    useEffect(()=>{
        fetch('https://radiant-badlands-32060.herokuapp.com/books')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[])
  return (
    <div>
        <h2 className="text-center">Manage Books</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Book Name</th>
            <th scope="col">Author Name</th>
            <th scope="col">Price</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {
            books.map(book => <ManageBookList book={book} />)
        }
      </table>
    </div>
  );
};

export default ManageBooks;
