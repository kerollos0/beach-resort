import React from "react";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";

export default function Hero({ hero }) {
  return (
    <header className={hero}>
      <Banner
        title="luxurious rooms"
        subtitle="deluxe rooms starting
        at $299"
      >
        <Link to="/rooms" className="btn-primary">
          Our Rooms
        </Link>
      </Banner>{" "}
    </header>
  );
}
Hero.defaultProps = {
  hero: "defaultHero",
};
