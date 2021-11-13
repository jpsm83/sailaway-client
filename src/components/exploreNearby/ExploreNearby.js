import React, { Component } from "react";
import "./exploreNearby.css";
import SmallCard from "../smallCard/SmallCard";
import BoatService from "../../services/boat.service";
// import { withAuth } from "../../context/auth.context";

export default class exploreNearby extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boats: [],
    };
    this.boatService = new BoatService();
  }

  refreshState() {
    this.boatService
      .get()
      .then((res) => {
        console.log(res.data);
        // axios always send the response as .data
        this.setState({ boats: res.data });
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.refreshState();
  }

  displayBoats() {
    return this.state.boats.map((boat) => {
      return (
        <SmallCard
          country={boat.country}
          city={boat.city}
          image={boat.image}
          refreshState={() => this.refreshState()}
          key={`${boat.id}${boat.createdAt}`}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className="exploreNearbyTitle">Explore Nearby</h2>
        <div className="exploreNearbyContainer">
          {this.state.boats.length === 0 ? (
            <p>There are no boats available</p>
          ) : (
            this.displayBoats()
          )}
        </div>
      </div>
    );
  }
}
