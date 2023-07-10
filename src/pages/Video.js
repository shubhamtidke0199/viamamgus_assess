import { useState } from "react";
import ReactPlayer from "react-player/lazy";
import { videoUrls } from "../services/videourls";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";

export default function Video() {
  const [showThumbnail, setShowThumbnail] = useState(true);
  const navigate = useNavigate();

  const [url, setUrl] = useState(
    "https://www.youtube.com/watch?v=o3x7IMeW1C0&list=RDo3x7IMeW1C0&start_radio=1"
  );

  const videoContainer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#f9edcc",
    height: "100vh",
  };

  const moreVideos = {
    margin: "5rem",
    display: "flex",
    gap: "1rem",
    width: "90%",
    overflowY: "hidden",
    overflowX: "scroll",
  };

  const thumbnail = {
    borderRadius: "50%",
    width: "10rem",
    height: "10rem",
    cursor: "pointer",
  };

  const navButton = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1rem",
    cursor: "pointer",
    fontSize: "2rem",
  };

  const navBtnContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    rowGap: "1rem",
  };

  const dummyDiv = { width: "100%", height: "10rem", color: "#fff" };

  const handleMouseEnter = () => {
    setShowThumbnail(true);
  };

  const handleMouseLeave = () => {
    setShowThumbnail(false);
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleForward = () => {
    navigate("/date");
  };

  return (
    <div style={videoContainer}>
      <h1>Challenge 2 - Video</h1>
      <ReactPlayer
        url={url}
        light={true}
        playing={true}
        controls={true}
        width={"1080px"}
        
      />

      <div
        style={moreVideos}
        className="moreVideos"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showThumbnail ? (
          videoUrls.map((video) => {
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
          })
        ) : (
          <div style={dummyDiv} onMouseEnter={handleMouseEnter}>
            Dummt text
          </div>
        )}
      </div>
      {/* Navigation Buttons */}
      <div style={navBtnContainer}>
        <div style={navButton} onClick={handleBack}>
          <ArrowBackIcon style={{ fontSize: "4rem" }} />
          <span style={{ textDecoration: "underline" }}>
            Back to challenge 1
          </span>
        </div>
        <div style={navButton} onClick={handleForward}>
          <ArrowForwardIcon style={{ fontSize: "4rem" }} />
          <span style={{ textDecoration: "underline" }}>Go To challenge 3</span>
        </div>
      </div>
    </div>
  );
}
