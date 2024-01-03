import React from "react";
import "./popup.css";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import AddItem from "./components/AddItem";

const Popup = () => {
  return (
    <div>
      {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/addItem" element={<AddItem />} />
      </Routes>
    </div>
  );
};

export default Popup;
