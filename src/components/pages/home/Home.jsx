import React from "react";
import WelcomeSection from "../../WelcomeSection/WelcomeSection";
import HomeServices from "../../HomeServices/HomeServices";
import AboutUs from "../../AboutUs/AboutUs";
import ReachSupport from "../../ReachSupport/ReachSupport";
import ScrollAnimation from "react-animate-on-scroll";
import PlatformWorks from "../../PlatformWorks/PlatformWorks";
import WhyUs from "../../WhyUs/WhyUs";
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
      <ScrollAnimation animateIn="fadeIn">
        <PlatformWorks />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <WhyUs />
      </ScrollAnimation>
      <ScrollAnimation animateIn="fadeIn">
        <ReachSupport />
      </ScrollAnimation>
    </div>
  );
};

export default Home;
