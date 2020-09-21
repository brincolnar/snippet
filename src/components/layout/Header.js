import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      style={{ height: "10vh" }}
      className="flex justify-between items-center bg-indigo-800 text-white"
    >
      <Link
        className="ml-4 hover:text-black"
        style={{ fontSize: "1.5em" }}
        to="/"
      >
        Snippet
      </Link>

      <ul className="mr-4 flex align-center">
        <li className="m-auto inline p-4 hover:text-black">
          <Link to="/category/tech">Tech</Link>
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          <Link to="/category/culture">Culture</Link>
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          <Link to="/category/sports">Sports</Link>
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          <Link to="/category/society">Politics & Society</Link>
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          <Link
            to="/library"
            className="bg-indigo-500 hover:bg-indigo-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Library
          </Link>
        </li>
        <li className="inline p-4 hover:text-black">
          <div
            style={{ height: "40px", width: "40px" }}
            className="bg-black rounded-full "
          ></div>
        </li>
      </ul>
    </div>
  );
};

export default Header;
