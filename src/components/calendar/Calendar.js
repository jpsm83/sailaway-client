import React, { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { UserIcon } from '@heroicons/react/solid';
import './calendar.css';
import { useHistory } from 'react-router-dom';

// with 'props' as parameter you are able to get all the info pass throught the parent
// in our case we are using the funcion 'resetInput'
export default function Calendar(props) {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [numOfGuest, setNumOfGuest] = useState(1);

    // useHistory keep track of all the pages we navigate
    const history = useHistory();

    // get the city from the navbar input
    const city = props.searchInput;

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const updatesearch = () => {
        props.resetInput();
    }

    const searchResult = () => {
        // will push us to the url from the search
        history.push({
            pathname: `/search/${city}/${startDate}/${endDate}/${numOfGuest}`,
            query: {
                city,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                numOfGuest,
            },
        });
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    return (
        <div>
            <DateRangePicker 
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#008080"]}
                onChange={handleSelect}
            />
            <div className="guestContainer">
                <h2 className="titleGuest">Number of guest</h2>
                <div className='numbergGuest'>
                    <UserIcon  className="userIcon" />
                    <input type="number" min={1} value={numOfGuest} onChange={(e) => setNumOfGuest(e.target.value)} />
                </div>
            </div>
            <div className="numGuestButtonsContainer">
                <button onClick={() => updatesearch()} >Cancel</button>
                    <button id="guestButtonSearch" onClick={() => searchResult()} >Search</button>
            </div>
        </div>
    )
}
