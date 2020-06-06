import React from "react";
import Hero from "../component/Hero";
import Banner from "../component/Banner";
import { Link } from "react-router-dom";
import FeaturedRooms from "../component/FeaturedRooms";

const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link to="/home" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
    </>
  );
};

export default Rooms;
