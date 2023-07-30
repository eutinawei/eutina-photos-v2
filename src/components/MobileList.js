import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 120px;
  right: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Title = styled.div`
  padding-bottom: 5px;
  border-bottom: solid 1px;
  border-color: black;
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Home = styled(Title)`
  width: 160px;
`;

const Thoughts = styled(Title)`
  width: 243px;
`;

const About = styled(Title)`
  width: 157px;
`;

const Youtube = styled(Title)`
  width: 225px;
`;

const PlainText = styled.div`
  font-size: 25px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const OutlineText = styled(PlainText)`
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px white;
`;

const BackgroundText = styled(PlainText)`
  background-color: white;
  font-size: 23px;
  font-weight: bold;
`;

const MobileList = () => {
  return (
    <Wrapper>
      <Home onClick={() => window.location.assign("/")}>
        <PlainText>home</PlainText>
        <OutlineText>home</OutlineText>
      </Home>
      <Thoughts onClick={() => window.location.assign("/thoughts")}>
        <OutlineText>thoughts</OutlineText>
        <BackgroundText>thoughts</BackgroundText>
      </Thoughts>
      <About onClick={() => window.location.assign("/about")}>
        <BackgroundText>about</BackgroundText>
        <PlainText>about</PlainText>
      </About>
      <Youtube
        onClick={() =>
          window.open("https://www.youtube.com/@eutinawei", "_blank")
        }
      >
        <PlainText>youtube</PlainText>
        <OutlineText>youtube</OutlineText>
      </Youtube>
    </Wrapper>
  );
};

export default MobileList;
