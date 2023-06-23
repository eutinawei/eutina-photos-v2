import React from 'react'
import styled, { keyframes } from 'styled-components'
import cname from '../assets/home/cname_vertical.png'

const MoveUpDown = keyframes`
  to {
    transform: translateY(-50%);
  }
`

const Wrapper = styled.div`
  position: absolute;
  margin: 61px 0 0 80px;
  height: calc(100vh - 61px);
  overflow: hidden;
`

const Names = styled.div`
  animation: ${MoveUpDown} 30s linear infinite alternate;
`

const Name = styled.div`
  width: 110px;
  height: 400px;
  background: url(${cname}) no-repeat center/cover;
  &:not(:last-child) {
    margin-bottom: 50px;
  }
`

const DesktopCName = () => {
  const names = []
  for (let i = 0; i < 5; i++) {
    names.push(<Name />)
  }
  return (
    <Wrapper>
      <Names>
        {names}
      </Names>
    </Wrapper>
  )
}

export default DesktopCName
