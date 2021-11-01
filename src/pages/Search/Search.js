import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="searchContainer">
      <p className="searchQuantity">100 Boats found</p>
      <h2 className="searchLocation">Sail in Ibiza</h2>
      <div className="filterButtonsContainer">
        <button className="filterButtons">Cancellation Flexibility</button>
        <button className="filterButtons">Type of Boat</button>
        <button className="filterButtons">Price</button>
        <button className="filterButtons">Minimun number of Guests</button>
        <button className="filterButtons">Maximun number of Guests</button>
        <button className="filterButtons">More Filters</button>
      </div>
      <div className="searchResults">
        <div className="searchResult"></div>

        <div className="searchMap"></div>
      </div>
    </div>
  );
}
