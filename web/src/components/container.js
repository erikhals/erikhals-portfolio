import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 60px;
  overflow: hidden;
`;

export default Container;
