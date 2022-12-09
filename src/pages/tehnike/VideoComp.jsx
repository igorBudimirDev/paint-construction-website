import KosticVideo from "../../assets/kostic-video.mp4";

const VideoComp = () => {
  return (
    <div>
      <video controls src={KosticVideo}></video>
    </div>
  );
};

export default VideoComp;
