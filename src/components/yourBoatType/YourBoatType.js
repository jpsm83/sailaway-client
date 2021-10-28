import React from "react";
import "./yourBoatType.css";

export default function YourBoatType() {
  return (
    <div className="boatTypeContainer">
      <h2 className="yourBoatTypeTitle">Your Boat Type</h2>
      <div className="typesOfBoatsContainer">
        <div className="boatCard">
          <div className="boatTypeImgContainer">
            <img
              src="https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2021/04/YAW261.newyachts_multihulls.ic36_catamaran_2-630x394.jpg"
              alt="Catamaram"
            />
          </div>
          <p>Catamaram Boat</p>
        </div>
        <div className="boatCard">
          <div className="boatTypeImgContainer">
            <img
              src="https://www.tradeonlytoday.com/.image/t_share/MTQ4ODQ5NjU2OTYyNTU2OTgz/wellcraft_main.jpg"
              alt="Fishing Boat"
            />
          </div>
          <p>Fishing Boat</p>
        </div>
        <div className="boatCard">
          <div className="boatTypeImgContainer">
            <img
              src="https://www.bernard-gallay.com/uploads/yacht/IL%20GATTOPARDO/slide/il_gattopardo_my_amer116s_permaresrl_01.jpg"
              alt="Yatch"
            />
          </div>
          <p>Yatch</p>
        </div>
        <div className="boatCard">
          <div className="boatTypeImgContainer">
            <img
              src="https://cdn.sunbonoo.com/media/catalog/product/cache/3/image/1200x800/a22bbdfaa58057fba42335ff5462f2fd/b/o/bootstour-speedboot-mallorca_1.jpeg"
              alt="Speed Boat"
            />
          </div>
          <p>Speed Boat</p>
        </div>
        <div className="boatCard">
          <div className="boatTypeImgContainer">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/45/05.jpg"
              alt="Party Boat"
            />
          </div>
          <p>Party Boat</p>
        </div>
        <div className="boatCard">
          <div className="boatTypeImgContainer">
            <img
              src="https://www.tripsavvy.com/thmb/Ba1L66TAvbFojqAqoYv6sNUgIbY=/1800x1200/filters:fill(auto,1)/catamaran-5c6477e346e0fb0001f2567b.jpg"
              alt="Sail Boat"
            />
          </div>
          <p>Sail Boat</p>
        </div>
      </div>
    </div>
  );
}
