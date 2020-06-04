import React from 'react'
import styled from 'styled-components'

const Container = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  margin: 0 auto;
  padding: 2em 0;
`

export default Container
