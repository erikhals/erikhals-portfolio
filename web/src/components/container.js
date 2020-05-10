import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 1.5em;
  margin: 0 auto;

  @media (min-width: 450px) {
    padding: 2em;
  }
`

export default Container
