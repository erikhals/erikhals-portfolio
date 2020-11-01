import Figure from "./figure";
import Youtube from "./youtube";
import Video from "./muxvideo";

const serializers = {
  types: {
    figure: Figure,
    youtube: Youtube,
    "mux.video": Video
  }
};

export default serializers;
