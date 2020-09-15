import React from "react";

const Header = () => {
  return (
    <div
      style={{ height: "10vh" }}
      className="flex justify-between items-center bg-indigo-800 text-white"
    >
      <a
        className="ml-4 hover:text-black"
        style={{ fontSize: "1.5em" }}
        href="#"
      >
        Snippet
      </a>

      <ul className="mr-4 flex align-center">
        <li className="m-auto inline p-4 hover:text-black">
          <a href="">Tech</a>
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          <a href="">Culture</a>
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          {" "}
          <a href="">Sports</a>{" "}
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          <a href="">Politics & Society</a>{" "}
        </li>
        <li className="m-auto inline p-4 hover:text-black">
          <a
            href="#"
            class="bg-indigo-500 hover:bg-indigo-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Library
          </a>
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
