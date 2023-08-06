import React from "react";
import CardSlide from "../Components/Lib/CardSlide/CardSlide";
import NavTab from "../Components/Lib/NavTab/NavTab";
import Slider from "../Components/Lib/Slider/Slider";

const Home = () => {
  return (
    <>
      <NavTab />
      <Slider />
      <CardSlide />
    </>
  );
};

export default Home;
