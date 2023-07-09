import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { videoUrls } from "../services/videourls";

export default function Video() {
  const [showThumbnail, setShowThumbnail] = useState(true);

  const [url, setUrl] = useState(
    "https://www.youtube.com/watch?v=o3x7IMeW1C0&list=RDo3x7IMeW1C0&start_radio=1"
  );

  let moreVideos = {
    margin: "5rem",
    display:  "flex" ,
    gap: "2rem",
    width: "80%",
    overflowX: "scroll",
  };

  const thumbnail = {
    borderRadius: "50%",
    width: "10rem",
    height: "10rem",
    cursor: "pointer",
  };

  const dummyDiv = {width: "100%" ,height:'10rem',color:'#fff'}

  const handleMouseEnter = () => {
    setShowThumbnail(true);
  };

  const handleMouseLeave = () => {
    setShowThumbnail(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Video</h1>
      <ReactPlayer
        url={url}
        light={true}
        playing={true}
        controls={true}
        width={"1080px"}
        heigh={"720px"}
      />

      <div
        style={moreVideos}
        className="moreVideos"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showThumbnail? videoUrls.map((video) => {
          return (
            <img
              key={video.id}
              style={thumbnail}
              src={video.thumbnail}
              alt="thumbnail"
              onClick={() => {
                setUrl(video.url);
              }}
            />
          );
        }):<div style={dummyDiv} onMouseEnter={handleMouseEnter}>Dummt text</div>}
      </div>
    </div>
  );
}
