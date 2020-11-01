import React from "react";
import getYouTubeId from "get-youtube-id";
import YouTube from "react-youtube";

export default ({ node }) => {
  const { url } = node;
  const id = getYouTubeId(url);
  return <YouTube videoId={id} modestbranding="1" />;
};
