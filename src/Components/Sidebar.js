import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { authentication } from "./../firebase";
import {
  faArrowRightFromBracket,
  faFileLines,
  faHouse,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar({ setUser }) {
  const signout = async () => {
    await authentication.signOut().then(() => {
      setUser(null);
    });
  };
  return (
    <div className=" h-screen overflow-hidden hidden md:inline-block md:w-32">
      <div className="flex flex-col justify-center h-full text-right pr-5 space-y-6 border-r border-gray-100 fixed">
        <Link to="/">
          <FontAwesomeIcon
            icon={faHouse}
            className="w-5 h-5 text-gray-300 hover:text-black"
          />
        </Link>
        <Link to="/write">
          <FontAwesomeIcon
            icon={faPencil}
            className="w-5 h-5 text-gray-300 hover:text-black"
          />
        </Link>
        <Link to="/">
          <FontAwesomeIcon
            icon={faFileLines}
            className="w-5 h-5 text-gray-300 hover:text-black"
          />
        </Link>

        <div>
          <button onClick={signout}>
            <FontAwesomeIcon
              icon={faArrowRightFromBracket}
              className="w-5 h-5 text-gray-300 hover:text-black"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
