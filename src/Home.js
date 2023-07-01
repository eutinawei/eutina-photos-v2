import React from "react";
import styled from "styled-components";
import paper from "./assets/home/paper.jpg";
import DesktopHeader from "./components/DesktopHeader";
import DesktopCName from "./components/DesktopCName";
import DesktopEName from "./components/DesktopEName";
import Carousel from "./components/Carousel";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${paper}) no-repeat center/cover;
`;

const Home = () => {
  return (
    <Wrapper>
      <DesktopHeader />
      <DesktopCName />
      <DesktopEName />
      <Carousel />
    </Wrapper>
  );
};

export default Home;
