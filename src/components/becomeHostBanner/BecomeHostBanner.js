import React from 'react';
import './becomeHostBanner.css';

export default function BecomeHostBanner() {
    return (
        <div className="becomeHostContainer">
            <img className="hostBannerImg" src="https://www.sws-yachts.com/wp-content/uploads/2020/09/Palma_October-2019_LR-5-1.jpg" alt="Boat Sailing"/>
            <div className="textHostBanner">
                <h3>Become a Host</h3>
                <p>Be part of the Sailaway family</p>
                <div className="buttonContainer">
                    <button className="buttonStyle">Lets Start</button>
                </div>
            </div>
        </div>
    )
}
