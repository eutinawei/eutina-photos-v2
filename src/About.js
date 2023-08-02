import React from "react";
import styled from "styled-components";
import { forMobile } from "./constants/breakpoints";
import text from "./constants/aboutText";
import eutina from "./assets/about/eutina.png";
import names from "./assets/about/names.png";
import {
  LargeOrangeAnimation,
  MidOrangeAnimation,
  SmallOrangeAnimation,
  DesktopBlueBoxAnimation,
  MobileBlueBoxAnimation,
} from "./utils/AboutAnimation";

const TextWrapper = styled.div`
  position: absolute;
  top: 140px;
  left: 120px;
  width: 55vw;
  height: 65vh;
  overflow: scroll;
  ${forMobile} {
    left: 40px;
    width: calc(90vw - 80px);
    height: calc(70vh - 80px);
    height: calc(70dvh - 80px);
  }
`;

const Text = styled.div`
  line-height: 40px;
  white-space: pre-wrap;
  font-weight: 500;
  font-size: 18px;
  color: white;
  ${forMobile} {
    line-height: 30px;
    font-size: 16px;
  }
`;

const Photo = styled.img.attrs({
  src: `${eutina}`,
})`
  position: absolute;
  bottom: 0px;
  right: 0px;
  max-width: 30vw;
  max-height: 60vh;
  width: auto;
  height: auto;
  ${forMobile} {
    max-width: 45vw;
    max-height: 60vh;
  }
`;

const Names = styled.img.attrs({
  src: `${names}`,
})`
  position: absolute;
  bottom: 0px;
  left: 61px;
  width: 55vw;
  height: auto;
  ${forMobile} {
    display: none;
  }
`;

const OrangeCircle = styled.div`
  position: fixed;
  border-radius: 50%;
  background-color: #e85112;
`;

const LargeOrange = styled(OrangeCircle)`
  animation: ${LargeOrangeAnimation} 10s ease-in-out infinite;
  ${forMobile} {
    display: none;
  }
`;

const MidOrange = styled(OrangeCircle)`
  animation: ${MidOrangeAnimation} 10s ease-in-out infinite;
  ${forMobile} {
    display: none;
  }
`;

const SmallOrange = styled(OrangeCircle)`
  animation: ${SmallOrangeAnimation} 10s ease-in-out infinite;
  ${forMobile} {
    display: none;
  }
`;

const BlueBox = styled.div`
  z-index: -1;
  position: absolute;
  background-color: #334595;
  height: calc(70vh + 40px);
  top: 100px;
  border-radius: 0 50px 50px 0;
  animation: ${DesktopBlueBoxAnimation} 1s ease-in-out forwards;
  ${forMobile} {
    height: 70vh;
    height: 70dvh;
    animation: ${MobileBlueBoxAnimation} 1s ease-in-out forwards;
  }
`;

const About = () => {
  return (
    <>
      <LargeOrange />
      <MidOrange />
      <SmallOrange />
      <Photo />
      <BlueBox />
      <TextWrapper>
        <Text>{text}</Text>
      </TextWrapper>
      <Names />
    </>
  );
};

export default About;
