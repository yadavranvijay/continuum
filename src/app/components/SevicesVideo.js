"use client"


import { useState, useRef } from 'react';

const CATIVideo = ({path ,Name}) => {


    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    
    
 
    const handlePlayPause = () => {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    };
  return (
    <div className="py-5">
      <div className="costum-container">
        <div className="row">
          <div className="col-12">
            <h2 className="mb-5 Bold">Our {Name} Service</h2>
          </div>
          <div className="col-md-8">
            <div className="wrapper video-wrapper p-relative" onClick={handlePlayPause}>
             <video ref={videoRef}  >
        <source src={path} type="video/mp4" />
       
      </video>
              <div className={isPlaying ? 'play d-none' : 'play'}>
                <img src="/images/service/play.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CATIVideo