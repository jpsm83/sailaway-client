import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./navbar.css";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import Calendar from "../calendar/Calendar";

export default function Navbar() {
  //    variableName  changesToUpdate    defaulValue
  const [searchInput, setSearchInput] = useState("");

  const resetInput = () => {
    setSearchInput("");
  };

  return (
    <div className="navbarContainer">
      <div className="navbar">
        <Link className="navLeft" to="/">
          <img
            className="logo"
            src="https://media.istockphoto.com/vectors/creative-blue-yacht-boat-logo-design-vector-symbol-illustration-vector-id1158114738?k=20&m=1158114738&s=170667a&w=0&h=IabJeiUBbNCM52wjOdjsouIj-yeqy57BHVCqGkDaHEs="
            alt="boat"
          />
        </Link>
        <div className="navCenterContainer">
          <div className="navCenter">
            <input
              className="searchInput"
              type="text"
              placeholder="Start your search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <SearchIcon className="searchIcon" />
          </div>
        </div>
        <div className="navRight">
          <p>Become a host</p>
          <GlobeAltIcon className="globeAltIcon" />
          <div className="menu">
            <MenuIcon className="menuIcon" />
            <UserCircleIcon className="menuIcon" />
          </div>
        </div>
      </div>
      <div className="calendarInput">
        {searchInput && <Calendar resetInput={() => resetInput()} />}
      </div>
    </div>
  );
}
