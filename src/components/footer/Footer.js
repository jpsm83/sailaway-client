import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className="footer">
            <div className="footTag">
                <h4>About</h4>
                <ul>
                    <li><Link className="anchorLink" to="">Looks simple</Link></li>
                    <li><Link className="anchorLink" to="">But got me</Link></li>
                    <li><Link className="anchorLink" to="">A lot time</Link></li>
                    <li><Link className="anchorLink" to="">To get here</Link></li>
                </ul>
            </div>
            <div className="footTag">
            <h4>Comunity</h4>
                <ul>
                    <li><Link className="anchorLink" to="">It is not perfect</Link></li>
                    <li><Link className="anchorLink" to="">It is far from amazing</Link></li>
                    <li><Link className="anchorLink" to="">But I am pretty</Link></li>
                    <li><Link className="anchorLink" to="">Happy with my results</Link></li>
                </ul>
            </div>
            <div className="footTag">
            <h4>Host</h4>
                <ul>
                    <li><Link className="anchorLink" to="">I worked very</Link></li>
                    <li><Link className="anchorLink" to="">Hard to get here</Link></li>
                    <li><Link className="anchorLink" to="">Every step was</Link></li>
                    <li><Link className="anchorLink" to="">Huge personal achivement</Link></li>
                </ul>
            </div>
            <div className="footTag">
            <h4>Support</h4>
                <ul>
                    <li><Link className="anchorLink" to="">I hope you</Link></li>
                    <li><Link className="anchorLink" to="">Will appreciate</Link></li>
                    <li><Link className="anchorLink" to="">My work</Link></li>
                    <li><Link className="anchorLink" to="">{'Thanks :)'}</Link></li>
                </ul>
            </div>
        </div>
    )
}