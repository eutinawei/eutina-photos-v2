import React from "react";
import styled from "styled-components";
import text from "./constants/aboutText";
import eutina from "./assets/about/eutina.png";
import names from "./assets/about/names.png";
import {
  LargeOrangeAnimation,
  MidOrangeAnimation,
  SmallOrangeAnimation,
  BlueBoxAnimation,
} from "./utils/AboutAnimation";

const TextWrapper = styled.div`
  position: absolute;
  top: 120px;
  left: 120px;
  width: 55vw;
  height: 70vh;
  overflow: scroll;
`;

const Text = styled.div`
  line-height: 40px;
  white-space: pre-wrap;
  font-weight: 600;
  font-size: 18px;
  color: white;
  font-family: "Nunito";
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
`;

const Names = styled.img.attrs({
  src: `${names}`,
})`
  position: absolute;
  bottom: 0px;
  left: 61px;
  width: 55vw;
  height: auto;
`;

const OrangeCircle = styled.div`
  position: fixed;
  border-radius: 50%;
  background-color: #e85112;
`;

const LargeOrange = styled(OrangeCircle)`
  animation: ${LargeOrangeAnimation} 10s ease-in-out infinite;
`;

const MidOrange = styled(OrangeCircle)`
  animation: ${MidOrangeAnimation} 10s ease-in-out infinite;
`;

const SmallOrange = styled(OrangeCircle)`
  animation: ${SmallOrangeAnimation} 10s ease-in-out infinite;
`;

const BlueBox = styled.div`
  z-index: -1;
  position: absolute;
  background-color: #334595;
  height: calc(70vh + 40px);
  top: 100px;
  border-radius: 0 50px 50px 0;
  animation: ${BlueBoxAnimation} 1s ease-in-out forwards;
`;

const About = () => {
  return (
    <>
      <BlueBox />
      <TextWrapper>
        <Text>{text}</Text>
      </TextWrapper>
      <LargeOrange />
      <MidOrange />
      <SmallOrange />
      <Photo />
      <Names />
    </>
  );
};

export default About;
