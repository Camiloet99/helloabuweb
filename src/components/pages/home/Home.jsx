import React from "react";
import WelcomeSection from "../../WelcomeSection/WelcomeSection";
import HomeServices from "../../HomeServices/HomeServices";
import AboutUs from "../../AboutUs/AboutUs";
import ReachSupport from "../../ReachSupport/ReachSupport";
import ScrollAnimation from "react-animate-on-scroll";
import PlatformWorks from "../../PlatformWorks/PlatformWorks";
import { useSelector } from "react-redux";
import WhyUs from "../../WhyUs/WhyUs";
import NurseView from "../../NurseView/NurseView";
import "./Home.scss";

const Home = () => {
  const user = useSelector((state) => state.user);

  return (
    <div className="home">
      {user?.userRole === "nurse" ? (
        <>
          <NurseView />
        </>
      ) : (
        <>
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
        </>
      )}
    </div>
  );
};

export default Home;
