import React from "react";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const amount = useSelector((state) => state.amount);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Bank
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <button>Your Balance : {amount}</button>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
