import React, { Component } from 'react';
import './home.css';
import MainBanner from '../../components/mainBanner/MainBanner';
import ExploreNearby from '../../components/exploreNearby/ExploreNearby';
import YourBoatType from '../../components/yourBoatType/YourBoatType';
import BecomeHostBanner from '../../components/becomeHostBanner/BecomeHostBanner';

export default class Home extends Component {
    render() {
        return (
            <div className="home">
                <MainBanner />
                <div className="main">
                    <ExploreNearby />
                    <YourBoatType />
                    <BecomeHostBanner />
                </div>
            </div>
        )
    }
}
