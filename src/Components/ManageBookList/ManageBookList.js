import React from "react";

const ManageBookList = (props) => {
    // console.log(props.book);
    const {author,name,price,_id} = props.book;
    const handleDeleteClick= (id)=>{
        // console.log(id);
        fetch(`http://localhost:3002/deleteBook/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(result=>{
            if(result){
                console.log("Deleted");
            }
        })
    }
  return (
    <tbody>
      <tr>
        <th scope="row"> {name} </th>
        <td>{author}</td>
        <td>{price}</td>
        <td><button className="btn btn-primary">Edit</button> <button onClick={()=>handleDeleteClick(_id)} className="btn btn-danger">Delete</button></td>
      </tr>
    </tbody>
  );
};

export default ManageBookList;
