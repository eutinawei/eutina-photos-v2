import React from "react";
import DesktopCName from "./components/DesktopCName";
import DesktopEName from "./components/DesktopEName";
import Carousel from "./components/Carousel";
import MobileEName from "./components/MobileEName";
import MobileCName from "./components/MobileCName";

const Home = () => {
  return (
    <>
      <DesktopCName />
      <DesktopEName />
      <MobileEName />
      <MobileCName />
      <Carousel />
    </>
  );
};

export default Home;
