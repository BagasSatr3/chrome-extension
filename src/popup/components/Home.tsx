import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

function Home() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Nav />
      <div className="m-2 gap-3 flex-grow">
        <p className="text-sm m-1">TYPES</p>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-200 mb-2">
          <div className="p-2 flex items-center gap-5">
            <p className="text-sm">Card</p>
            <p className="grow text-right text-sm">0</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
        <div className="shadow-xl types rounded cursor-pointer hover:bg-gray-200 mb-2">
          <div className="p-2 flex items-center gap-5">
            <p className="text-sm">Notes</p>
            <p className="grow text-right text-sm">0</p>
            <p className="text-right text-sm">{">"}</p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
