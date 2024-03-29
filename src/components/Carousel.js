import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { forDesktop, forMobile } from "../constants/breakpoints";
import { Glitch, GlitchTop, GlitchBottom, GlitchImage } from "../utils/Glitch";
import leftArrow from "../assets/home/left-arrow.png";
import leftArrowHover from "../assets/home/left-arrow-hover.png";
import rightArrow from "../assets/home/right-arrow.png";
import rightArrowHover from "../assets/home/right-arrow-hover.png";
import seattleImage from "../assets/home/seattle.jpg";
import montanaImage from "../assets/home/montana.jpg";
import caliImage from "../assets/home/cali.jpg";
import chicagoImage from "../assets/home/chicago.jpg";
import dcImage from "../assets/home/dc.jpg";
import cities from "../constants/cities";

const displacementLength = "-60px";
const orange = "#E85112";

const Wrapper = styled.div`
  position: absolute;
  left: calc(50vw - 30vh);
  top: 20vh;
  ${forMobile} {
    left: calc(50vw - 15vh);
    top: 29vh;
    top: 29dvh;
  }
`;

const LocationTitle = styled.div`
  position: absolute;
  top: -84px;
  left: ${displacementLength};
  display: flex;
  flex-direction: row;
  ${forMobile} {
    top: -38px;
  }
`;

const CityTitle = styled.div`
  font-size: 100px;
  font-weight: bold;
  animation: ${Glitch} 1s linear;
  animation-iteration-count: 2;
  &:before {
    content: "${(props) => props.name}";
    position: absolute;
    left: 0px;
    animation: ${GlitchTop} 1s linear;
    animation-iteration-count: 2;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }
  &:after {
    content: "${(props) => props.name}";
    position: absolute;
    left: 0px;
    animation: ${GlitchBottom} 1.5s linear;
    animation-iteration-count: 2;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
  ${forMobile} {
    font-size: 45px;
  }
`;

const CountryTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-top: 35px;
  ${forMobile} {
    font-size: 25px;
    margin-top: 13px;
  }
`;

const YearTitle = styled.div`
  position: absolute;
  top: -48px;
  right: ${displacementLength};
  font-size: 45px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 3px ${orange};
  ${forMobile} {
    font-size: 25px;
    -webkit-text-stroke: 2px ${orange};
    top: -26px;
  }
`;

const Sites = styled.div`
  position: absolute;
  left: ${displacementLength};
  bottom: 20px;
`;

const SiteTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  margin: 5px;
  display: table;
  ${forMobile} {
    font-size: 12px;
  }
`;

const Image = styled.div`
  cursor: pointer;
  width: 60vh;
  height: 60vh;
  background: url(${(props) => props.image}) no-repeat center/cover;
  filter: grayscale(1);
  ${forDesktop} {
    &:hover {
      filter: grayscale(0);
    }
  }
  ${forMobile} {
    width: 30vh;
    height: 50dvh;
  }
  background-position: ${(props) =>
    props.city === "Chicago" ? "bottom" : "center"};
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 60vh;
  height: 60vh;
  height: 60dvh;
  background: url(${(props) => props.image}) no-repeat center/cover;
  opacity: 0;
  animation: ${GlitchImage} 0.2s linear;
  pointer-events: none;
  ${forMobile} {
    width: 30vh;
    height: 50dvh;
  }
`;

const Arrow = styled.button`
  cursor: pointer;
  position: absolute;
  top: calc(30vh - 15px);
  width: 30px;
  height: 30px;
  border: none;
  ${forMobile} {
    top: calc(25vh - 10px);
    top: calc(25dvh - 10px);
    width: 20px;
    height: 20px;
  }
`;

const LeftArrow = styled(Arrow)`
  left: ${displacementLength};
  background: url(${leftArrow}) no-repeat center/cover;
  ${forDesktop} {
    &:hover {
      background: url(${leftArrowHover}) no-repeat center/cover;
    }
  }
`;

const RightArrow = styled(Arrow)`
  right: ${displacementLength};
  background: url(${rightArrow}) no-repeat center/cover;
  ${forDesktop} {
    &:hover {
      background: url(${rightArrowHover}) no-repeat center/cover;
    }
  }
`;

const Dots = styled.div`
  position: absolute;
  bottom: -50px;
  width: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  ${forMobile} {
    width: 30vh;
    bottom: -30px;
  }
`;

const Dot = styled.button`
  cursor: pointer;
  width: 15px;
  height: 15px;
  padding: 0;
  border-color: black;
  border-radius: 50%;
  border-style: solid;
  border-width: 3px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  ${forDesktop} {
    &:hover {
      border-color: ${orange};
      background-color: ${orange};
    }
  }
  ${(props) =>
    props.selected &&
    `
      background-color: black;
  `}
  ${forMobile} {
    width: 12px;
    height: 12px;
    border-width: 3px;
  }
`;

const PreloadImage = styled.div`
  background: url(${(props) => props.image});
  display: none;
`;

const Carousel = () => {
  const [cityIndex, setCityIndex] = useState(0);
  const [cityImage, setCityImage] = useState(caliImage);

  useEffect(() => {
    if (cities[cityIndex].key === "cali") setCityImage(caliImage);
    if (cities[cityIndex].key === "seattle") setCityImage(seattleImage);
    if (cities[cityIndex].key === "montana") setCityImage(montanaImage);
    if (cities[cityIndex].key === "chicago") setCityImage(chicagoImage);
    if (cities[cityIndex].key === "dc") setCityImage(dcImage);
  }, [cityIndex]);

  const upCityIndex = () => {
    if (cityIndex === cities.length - 1) setCityIndex(0);
    else setCityIndex(cityIndex + 1);
  };

  const downCityIndex = () => {
    if (cityIndex === 0) setCityIndex(cities.length - 1);
    else setCityIndex(cityIndex - 1);
  };

  return (
    <Wrapper>
      <a href={`${process.env.PUBLIC_URL}/photos/${cities[cityIndex].key}`}>
        <Image image={cityImage} city={cities[cityIndex].name} />
      </a>
      <ImageOverlay key={Math.random()} image={cityImage} />
      <LocationTitle>
        <CityTitle key={Math.random()} name={cities[cityIndex].name}>
          {cities[cityIndex].name}
        </CityTitle>
        <CountryTitle>,</CountryTitle>
        <CountryTitle>{cities[cityIndex].country}</CountryTitle>
      </LocationTitle>
      <YearTitle>{cities[cityIndex].year}</YearTitle>
      <Sites>
        {cities[cityIndex].sites.map((site, index) => (
          <SiteTitle key={index}>{site}</SiteTitle>
        ))}
      </Sites>
      <LeftArrow onClick={() => downCityIndex()} />
      <RightArrow onClick={() => upCityIndex()} />
      <Dots>
        {cities.map((city, index) => {
          if (index === cityIndex)
            return (
              <Dot key={index} onClick={() => setCityIndex(index)} selected />
            );
          else return <Dot onClick={() => setCityIndex(index)} key={index} />;
        })}
      </Dots>
      <PreloadImage image={seattleImage} />
      <PreloadImage image={montanaImage} />
      <PreloadImage image={caliImage} />
      <PreloadImage image={chicagoImage} />
      <PreloadImage image={dcImage} />
    </Wrapper>
  );
};

export default Carousel;
