import React from "react";
import styled from "styled-components";
import DesktopHeader from "./components/DesktopHeader";
import paper from "./assets/home/paper.jpg";
import text from "./constants/aboutText";
import eutina from "./assets/about/eutina.png";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${paper}) no-repeat center/cover;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 120px;
  left: 120px;
  width: 60vw;
  height: 70vh;
  overflow: scroll;
`;

const Text = styled.div`
  line-height: 40px;
  white-space: pre-wrap;
  font-weight: 500;
  font-size: 18px;
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

const About = () => {
  return (
    <Wrapper>
      <DesktopHeader />
      <TextWrapper>
        <Text>{text}</Text>
      </TextWrapper>
      <Photo />
    </Wrapper>
  );
};

export default About;
