import React from "react";
import video from "../../Assets/jewellery.mp4";

const MainVideo = () => {
  return (
    <video autoPlay loop muted id="navVideo">
      <source src={video} type="video/mp4" />
    </video>
  );
};

export default MainVideo;
