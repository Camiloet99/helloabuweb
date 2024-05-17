import React from "react";
import WelcomeSection from "../../WelcomeSection/WelcomeSection";
import HomeServices from "../../HomeServices/HomeServices";
import AboutUs from "../../AboutUs/AboutUs";
import ReachSupport from "../../ReachSupport/ReachSupport";
import ScrollAnimation from "react-animate-on-scroll";
import PlatformWorks from "../../PlatformWorks/PlatformWorks";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <WelcomeSection />
      <ScrollAnimation animateIn="fadeIn">
        <HomeServices />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <AboutUs />
      </ScrollAnimation>
      <PlatformWorks />
      <ScrollAnimation animateIn="fadeIn">
        <ReachSupport />
      </ScrollAnimation>
    </div>
  );
};

export default Home;
