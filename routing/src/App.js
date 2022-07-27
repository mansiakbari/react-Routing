import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Notfound from "./Notfound";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h2>React Route </h2>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/home">Home</Link>
        <br />
        <Link to="/dashboard">Dashboard</Link>
        <br />
      </div>
      <Routes>
        <Route exact path="/login" element={<Login />} />

        <Route exact path="/home" element={<Home />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route path="" element={<Notfound />} />
      </Routes>
    </Router>
  );
}
export default App;
