import React from "react";
import "./yourBoatType.css";

const boatsType = [
  {
    image:
      "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/21/2021/04/YAW261.newyachts_multihulls.ic36_catamaran_2-630x394.jpg",
    name: "Catamaram Boat",
  },
  {
    image:
      "https://www.tradeonlytoday.com/.image/t_share/MTQ4ODQ5NjU2OTYyNTU2OTgz/wellcraft_main.jpg",
    name: "Fishing Boat",
  },
  {
    image:
      "https://www.bernard-gallay.com/uploads/yacht/IL%20GATTOPARDO/slide/il_gattopardo_my_amer116s_permaresrl_01.jpg",
    name: "Yatch",
  },
  {
    image:
      "https://cdn.sunbonoo.com/media/catalog/product/cache/3/image/1200x800/a22bbdfaa58057fba42335ff5462f2fd/b/o/bootstour-speedboot-mallorca_1.jpeg",
    name: "Speed Boat",
  },
  {
    image:
      "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/01/45/05.jpg",
    name: "Party Boat",
  },
  {
    image:
      "https://www.tripsavvy.com/thmb/Ba1L66TAvbFojqAqoYv6sNUgIbY=/1800x1200/filters:fill(auto,1)/catamaran-5c6477e346e0fb0001f2567b.jpg",
    name: "Sail Boat",
  },
];

export default function YourBoatType() {
  return (
    <div className="boatTypeContainer">
      <h2 className="yourBoatTypeTitle">Your Boat Type</h2>
      <div className="typesOfBoatsContainer">
        {boatsType.map((boat) => {
          return (
            <div className="boatCard">
              <div className="boatTypeImgContainer">
                <img src={boat.image} alt="Boat" />
              </div>
              <p>{boat.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  )
}