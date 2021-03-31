import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AddBooks from "../AddBooks/AddBooks";
import ManageBooks from "../ManageBooks/ManageBooks";
import './AdminSection.css'

const AdminSection = () => {
  const [section, setSection] = useState(true);
  let { path, url } = useRouteMatch();
  return (
    <div className="">
      <div className="row">
        <div className ="col-md-3 g-0">
            <div className="left">
                <Link to={`${url}/addEvent`} className="menu my-2" >Add books</Link>
                <Link to={`${url}/manageBooks`} className="menu">Manage books</Link>
            </div>
        </div>
        <div className="col-md-9">
            <Switch>
            <Route exact path={path}>
              <AddBooks />
            </Route>
              <Route exact path={`${path}/addEvent`}>
                <AddBooks />
              </Route>
              <Route path={`${path}/:topicId`}>
                <ManageBooks />
              </Route>
            </Switch>
        </div>
      </div>
    </div>
  );
};

export default AdminSection;
