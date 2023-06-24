import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import leftArrow from '../assets/home/left-arrow.png'
import leftArrowHover from '../assets/home/left-arrow-hover.png'
import rightArrow from '../assets/home/right-arrow.png'
import rightArrowHover from '../assets/home/right-arrow-hover.png'
import seattleImage from '../assets/home/seattle.jpg'
import bayAreaImage from '../assets/home/bayarea.jpg'
import cities from '../constants/cities'

const displacementLength = "-5.5vh"
const orange = "#E85112"

const Glitch = keyframes`
  2%,64%{
    transform: translate(2px,0) skew(0deg);
  }
  4%,60%{
    transform: translate(-2px,0) skew(0deg);
  }
  62%{
    transform: translate(0,0) skew(5deg); 
  }
`

const GlitchTop = keyframes`
  2%,64%{
    transform: translate(2px,-2px);
  }
  4%,60%{
    transform: translate(-2px,2px);
  }
  62%{
    transform: translate(13px,-1px) skew(-13deg); 
  }
`

const GlitchBottom = keyframes`
  2%,64%{
    transform: translate(-2px,0);
  }
  4%,60%{
    transform: translate(-2px,0);
  }
  62%{
    transform: translate(-22px,5px) skew(21deg); 
  }
`

const Wrapper = styled.div`
  position: absolute;
  left: calc(50vw - 30vh);
  top: 20vh;
`

const LocationTitle = styled.div`
  position: absolute;
  top: -7vh;
  left: ${displacementLength};
  display: flex;
  flex-direction: row;
`

const CityTitle = styled.div`
  font-size: 100px;
  font-weight: bold;
  animation: ${Glitch} 1s linear;
  animation-iteration-count: 1;
  &:before {
    content: '${props => props.name}';
    position: absolute;
    left: 0px;
    animation: ${GlitchTop} 1s linear;
    animation-iteration-count: 1;
    clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  }
  &:after {
    content: '${props => props.name}';
    position: absolute;
    left: 0px;
    animation: ${GlitchBottom} 1.5s linear;
    animation-iteration-count: 1;
    clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
    -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  }
`

const CountryTitle = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-top: 3vh;
`

const YearTitle = styled.div`
  position: absolute;
  top: -4vh;
  right: ${displacementLength};
  font-size: 45px;
  font-weight: bold;
  color: transparent;
  -webkit-text-stroke: 3px ${orange};
`

const Sites = styled.div`
  position: absolute;
  left: ${displacementLength};
  bottom: 1vh;
`

const SiteTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  margin: 5px;
  display: table;
`

const Image = styled.div`
  width: 60vh;
  height: 60vh;
  background: url(${props => props.image}) no-repeat center/cover;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`

const Arrow = styled.button`
  position: absolute;
  top: calc(30vh - 15px);
  width: 30px;
  height: 30px;
  border: none;
`

const LeftArrow = styled(Arrow)`
  left: ${displacementLength};
  background: url(${leftArrow}) no-repeat center/cover;
  &:hover {
    background: url(${leftArrowHover}) no-repeat center/cover;
  }
`

const RightArrow = styled(Arrow)`
  right: ${displacementLength};
  background: url(${rightArrow}) no-repeat center/cover;
  &:hover {
    background: url(${rightArrowHover}) no-repeat center/cover;
  }
`

const Dots = styled.div`
  position: absolute;
  bottom: -50px;
  width: 60vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const Dot = styled.button`
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
  &:hover {
    border-color: ${orange};
    background-color: ${orange};
  }
  ${props => props.selected
    && `
      background-color: black;
  `}
`

const Carousel = () => {
  const [cityIndex, setCityIndex] = useState(0)
  const [cityImage, setCityImage] = useState(seattleImage)
  useEffect(
    () => {
      if (cities[cityIndex].name === "Seattle") setCityImage(seattleImage)
      if (cities[cityIndex].name === "Bay Area") setCityImage(bayAreaImage)
    }, [cityIndex]
  )

  const upCityIndex = () => {
    if (cityIndex === cities.length - 1) setCityIndex(0)
    else setCityIndex(cityIndex + 1)
  }

  const downCityIndex = () => {
    if (cityIndex === 0) setCityIndex(cities.length - 1)
    else setCityIndex(cityIndex - 1)
  }

  return (
    <Wrapper>
      <Image image={cityImage} />
      <LocationTitle>
        <CityTitle key={Math.random()} name={cities[cityIndex].name}>{cities[cityIndex].name}</CityTitle>
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
          if (index === cityIndex) return (<Dot key={index} onClick={() => setCityIndex(index)} selected/>)
          else return (<Dot onClick={() => setCityIndex(index)} key={index}/>)
        })}
      </Dots>
    </Wrapper>
  )
}

export default Carousel
