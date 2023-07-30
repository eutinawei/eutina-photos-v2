import React from "react";
import styled from "styled-components";
import homeIcon from "../assets/home/home.png";
import homeIconHover from "../assets/home/home-hover.png";
import youtubeIcon from "../assets/home/youtube.png";
import youtubeIconHover from "../assets/home/youtube-hover.png";

const orange = "#E85112";

const Wrapper = styled.div``;

const HorizontalLine = styled.div`
  position: absolute;
  width: 100vw;
  height: 1px;
  margin-top: 60px;
  background-color: black;
`;

const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  height: 100vh;
  margin-left: 60px;
  background-color: black;
`;

const Options = styled.div`
  position: absolute;
  margin-left: 90px;
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin: 14px 0px;
`;

const HomeIcon = styled(Icon)`
  background: url(${homeIcon}) no-repeat center/cover;
  &:hover {
    background: url(${homeIconHover}) no-repeat center/cover;
  }
`;

const YoutubeIcon = styled(Icon)`
  background: url(${youtubeIcon}) no-repeat center/cover;
  &:hover {
    background: url(${youtubeIconHover}) no-repeat center/cover;
  }
`;

const TextIcon = styled.div`
  cursor: pointer;
  margin: 18px 0px;
  font-size: 18px;
  font-weight: bold;
  &:hover {
    color: ${orange};
  }
`;

const OptionDivider = styled.div`
  width: 1px;
  height: 60px;
  margin: 0px 30px;
  background-color: black;
`;

const DesktopHeader = () => {
  return (
    <Wrapper>
      <HorizontalLine />
      <VerticalLine />
      <Options>
        <HomeIcon onClick={() => window.location.assign("/")} />
        <OptionDivider />
        <TextIcon onClick={() => window.location.assign("/thoughts")}>
          thoughts
        </TextIcon>
        <OptionDivider />
        <TextIcon onClick={() => window.location.assign("/about")}>
          about
        </TextIcon>
        <OptionDivider />
        <YoutubeIcon
          onClick={() =>
            window.open("https://www.youtube.com/@eutinawei", "_blank")
          }
        />
      </Options>
    </Wrapper>
  );
};

export default DesktopHeader;
