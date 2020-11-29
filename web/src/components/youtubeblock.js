import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";
import styled from "styled-components";

const StyledYoutubeWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25;
  height: 0; /* 16:9 */
`;

const StyledYoutube = styled(YouTube)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default ({ node }) => {
  const { url } = node;
  const id = getYouTubeId(url);
  return (
    <StyledYoutubeWrapper>
      <StyledYoutube videoId={id} modestbranding="1" />
    </StyledYoutubeWrapper>
  );
};
