import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="nav-types shadow-xl rounded fixed-bottom">
      <ul className="flex flex-row text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-2 p-2">
        <li className="">
          <a
            href="#"
            className="inline-block px-3 py-2 text-white bg-blue-600 rounded-lg active"
            aria-current="page"
          >
            Tab 1
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Tab 2
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Tab 3
          </a>
        </li>
        <li className="">
          <a
            href="#"
            className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
          >
            Tab 4
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
