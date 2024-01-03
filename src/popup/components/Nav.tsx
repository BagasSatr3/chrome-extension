import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="shadow-md nav-types rounded">
      <div className="flex p-2">
        <Link to={"/"}>Home</Link>
        <p className="grow text-center">This is Navbar</p>
        <Link to={"/addItem"}>
          <p className="text-2xl">+</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
