import React from "react";
import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  max-width: 1100px;
  margin: 0 auto 60px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
`;

export default Container;
