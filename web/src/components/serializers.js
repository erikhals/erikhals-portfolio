import Figure from "./figure";
import Youtube from "./youtubeblock";
import Video from "./muxvideo";

const serializers = {
  types: {
    figure: Figure,
    youtube: Youtube,
    "mux.video": Video
  }
};

export default serializers;
