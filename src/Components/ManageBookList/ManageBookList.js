import React from "react";
import editIcon from '../../icons/edit 1.png';
import deleteIcon from '../../icons/delete.png'

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
        <td> {name} </td>
        <td>{author}</td>
        <td>${price}</td>
        <td><button className="btn"><img src="https://img.icons8.com/bubbles/50/000000/edit.png" alt=""/></button> 
        <button onClick={()=>handleDeleteClick(_id)} className="btn "><img src="https://img.icons8.com/cute-clipart/40/000000/delete-forever.png" alt=""/></button></td>
      </tr>
    </tbody>
  );
};

export default ManageBookList;
