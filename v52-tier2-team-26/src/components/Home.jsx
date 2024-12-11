import React from "react";
import HowTo from "./HowTo";
import HeroSection from "./HeroSection"

const Home = ({ addresses }) => {
  return (
    <main className="Home">
      <HeroSection addresses={addresses}/>
        <HowTo />
    </main>
  );
};

export default Home;
