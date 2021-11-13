import React from "react";
import "./search.css";
import { format } from 'date-fns';

export default function Search({ city, startDate, endDate, numOfGuest }) {

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndtDate = format(new Date(endDate), "dd MMMM yy");
  // const range = `${formattedStartDate} - ${formattedEndtDate}`;

  return (
    <div className="searchContainer">
      <p className="searchQuantity">100 Boats found for {numOfGuest} guests - range</p>
      <h2 className="searchLocation">Sail in {city}</h2>
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
