import React from "react";
import Video from "sanity-mux-player";

export default ({ node }) => {
  const url = node.asset;
  return <Video assetDocument={url} autoload autoplay={false} showControls />;
};
