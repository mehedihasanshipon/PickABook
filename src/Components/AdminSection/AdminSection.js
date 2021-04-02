import React, { useState } from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import AddBooks from "../AddBooks/AddBooks";
import ManageBooks from "../ManageBooks/ManageBooks";
import "./AdminSection.css";
import plusIcon from "../../icons/plus 1.png";
import manageIcon from "../../icons/grid 1.png";

const AdminSection = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className="">
      <div className="row">
        <div className="col-md-2  g-0">
          <div className="left pt-5">
            <Link to={`${url}/addEvent`} className="menu my-2">
              {" "}
              <img className="adminIcon" src={plusIcon} alt="" /> Add books
            </Link>
            <Link to={`${url}/manageBooks`} className="menu">
              {" "}
              <img className="adminIcon" src={manageIcon} alt="" /> Manage books
            </Link>
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
