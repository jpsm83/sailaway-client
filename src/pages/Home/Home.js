import React, { Component } from 'react';
import './home.css';
import Banner from '../../components/banner/Banner';
import ExploreNearby from '../../components/exploreNearby/ExploreNearby';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Banner />
                <div className="main">
                    <ExploreNearby />
                </div>
            </div>
        )
    }
}
