import React from 'react'
import styled from 'styled-components'
import leftArrow from '../assets/home/left-arrow.png'
import leftArrowHover from '../assets/home/left-arrow-hover.png'
import rightArrow from '../assets/home/right-arrow.png'
import rightArrowHover from '../assets/home/right-arrow-hover.png'
import chicagoImage from '../assets/home/Chicago.jpg'

const displacementLength = "-5.5vh"
const orange = "#E85112"

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
  background: url(${chicagoImage}) no-repeat center/cover;
`

const Arrow = styled.div`
  position: absolute;
  top: calc(30vh - 15px);
  width: 30px;
  height: 30px;
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

const Dot = styled.div`
  width: 8px;
  height: 8px;
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

const chicagoSites = ["The Art Institute of Chicago", "Millenium Park", "Navy Pier", "Museum of Contemporary Art Chicago"]

const Carousel = () => {
  return (
    <Wrapper>
      <LocationTitle>
        <CityTitle>Chicago</CityTitle>
        <CountryTitle>,USA</CountryTitle>
      </LocationTitle>
      <YearTitle>2021</YearTitle>
      <Sites>
        {chicagoSites.map(site => (
          <SiteTitle>{site}</SiteTitle>
        ))}
      </Sites>
      <Image />
      <LeftArrow />
      <RightArrow />
      <Dots>
        <Dot selected/>
        <Dot />
        <Dot />
      </Dots>
    </Wrapper>
  )
}

export default Carousel

