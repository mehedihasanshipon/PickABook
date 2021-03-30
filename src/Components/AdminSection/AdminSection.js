import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddBooks from "../AddBooks/AddBooks";
import ManageBooks from "../ManageBooks/ManageBooks";
import './AdminSection.css'

const AdminSection = () => {
  const [section, setSection] = useState(true);
  return (
    <div className="">
      <div className="row">
        <div className ="col-md-3 g-0">
            <div className="left">
                <h2>Book Shops</h2>
                <Link className="menu my-3" onClick={() => setSection(!section)}>Add books</Link>
                <Link className="menu" onClick={() => setSection(!section)}>Manage books</Link>
            </div>
        </div>
        <div className="col-md-9">
            {section ? <AddBooks /> : <ManageBooks />}
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
