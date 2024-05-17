import React from "react";
import HeroSection from "../../HeroSection/HeroSection";
import HomeServices from "../../HomeServices/HomeServices";
import AboutUs from "../../AboutUs/AboutUs";
import ReachSupport from "../../ReachSupport/ReachSupport";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <HeroSection />
      <HomeServices />
      <AboutUs />
      <ReachSupport />
    </div>
  );
}

export default Home;
