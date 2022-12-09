import ReactPlayer from "react-player";
import KosticVideo from "../../assets/kostic-video.mp4";

const VideoComp = () => {
  return (
    <div>
      <ReactPlayer
        className="react-player"
        url={require('../../assets/kostic-video.mp4')}
        width="100%"
        height="auto"
        controls={true}
      />
    </div>
  );
};

export default VideoComp;
