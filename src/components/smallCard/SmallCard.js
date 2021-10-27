import React from 'react';
import './smallCard.css'
import { Link } from 'react-router-dom';
// import { withAuth } from '../../context/auth.context';

export default function SmallCard({ country, continent, image, refreshState }) {
    return (
        <div className="nearbyCard">
            <div className="nearbyImg">
                <img src={image} alt={country} />
            </div>
            <div className="nearbyDescription">
                <p className="country">{country}</p>
                <p className="continent">{continent}</p>
            </div>
            <p>{refreshState}</p>
        </div>
    )
}