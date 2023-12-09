"use client"

import { useState } from 'react';

const HomeBanner = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);

  const handleVideoLoad = () => {
    // Set the state to indicate that the video has loaded
    setVideoLoaded(true);
  };

  const handleVideoPlay = () => {
    // Set the state to indicate that the video is playing
    setVideoPlaying(true);
  };

  return (
    <div className="banner-slide">
      <div className="home-banner pb-4 pt-4">
        <div className="container h-100">
          <div className="row d-flex align-items-center h-100">
            <div className="col-md-6 px-0 px-sm-4">
              <div className="img-item me-lg-5">
                <div className="img p-relative">
                  {videoLoaded && !videoPlaying ?   (
                    <div className="loader">Loading...</div>
                  ):null }
                  <video
                    muted
                    loop={true}
                    autoPlay
                    onLoadedData={handleVideoLoad}
                    onPlay={handleVideoPlay}
                  >
                    <source src="/images/home/online.m4v" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>

            <div className="col-md-6 bg">
              <div className="content-item">
                <h1>
                  CAWI, CATI, P2W, <br /> IDI, Mixed Mode<br />
                </h1>
                <p className="Regular fs-5 text-white">
                  All data collection solutions are under one roof.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
