import React from "react";
import { Link, Outlet } from "react-router-dom";

const Courses = () => {
  return (
    <div>
      <h1>You are in the Courses page!</h1>
      <div>
        <Link to="/courses/search">Search</Link>
        <br></br>
        <Link to="/courses/list">List</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Courses;
