import React from 'react'
import styled from 'styled-components'
import homeIcon from '../assets/home.png'
import youtubeIcon from '../assets/youtube.png'

const Wrapper = styled.div``

const HorizontalLine = styled.div`
  position: absolute;
  width: 100vw;
  height: 1px;
  margin-top: 60px;
  background-color: black;
`

const VerticalLine = styled.div`
  position: absolute;
  width: 1px;
  height: 100vh;
  margin-left: 60px;
  background-color: black;
`

const Options = styled.div`
  position: absolute;
  margin-left: 90px;
  display: flex;
  flex-direction: row;
`

const Icon = styled.div`
  width: 32px;
  height: 32px;
  margin: 14px 0px;
`

const HomeIcon = styled(Icon)`
  background: url(${homeIcon}) no-repeat center/cover; 
`

const YoutubeIcon = styled(Icon)`
  background: url(${youtubeIcon}) no-repeat center/cover; 
`

const TextIcon = styled.div`
  margin: 21px 0px;
  font-size: 18px;
  font-weight: bold;
`

const OptionDivider = styled.div`
  width: 1px;
  height: 60px;
  margin: 0px 30px;
  background-color: black;
`

const DesktopHeader = () => {
  return (
    <Wrapper>
      <HorizontalLine />
      <VerticalLine />
      <Options>
        <HomeIcon />
        <OptionDivider />
        <TextIcon>thoughts</TextIcon>
        <OptionDivider />
        <TextIcon>about</TextIcon>
        <OptionDivider />
        <YoutubeIcon />
      </Options>
    </Wrapper>
  )
}

export default DesktopHeader
