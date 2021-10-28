import React from 'react';
import './mainBanner.css';

export default function Banner() {
    return (
        <div className="bannerContainer">
            <img className="bannerImg" src="https://cdn.theculturetrip.com/wp-content/uploads/2020/08/kkw6fr.jpg" alt="banner"/>
            <div className="sailFrom">
                <p>Not sure where to sail from? Perfect</p>
                <div className="buttonContainerMain">
                    <button className="buttonFlexible">I am flexible</button>
                </div>
            </div>
        </div>
    )
}
