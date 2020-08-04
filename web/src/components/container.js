import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  margin: 0 auto;
`;

export default Container;
