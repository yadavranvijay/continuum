"use client"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaRegFileLines } from "react-icons/fa6";

const  ReviewSlider =()=> {
  
    const settings = {
        
        infinite: true,
        dots:true,
        arrows: false,
        slidesToShow: 1,
        speed: 500
      };
    return (
      <div>
        
        <Slider {...settings}>
        <div>
        <div className="peopels-content-wrapper flex-centet-start">
          <div className="img-wrapper me-3">
            <img src="/images/home/user.jpg" alt="" />
          </div>
          <div className="text">
            <p className="employeespeak-content">
              <em>A data goldmine! Continuum Insights simplifies
                online surveys brilliantly.
                <br />
                
              </em>
              <span className="rev-name">Head of Partner Supply Relationships - Market Research | Canada</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="peopels-content-wrapper flex-centet-start">
          <div className="img-wrapper me-3">
            <img src="/images/home/user.jpg" alt="" />
          </div>
          <div className="text">
            <p className="employeespeak-content">
              <em>CATI expertise is top-notch at Continuum
                Insights - reliable results!
                <br />
                <span className="rev-name">Supply Head - Market Research | USA </span>
                
              </em>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="peopels-content-wrapper flex-centet-start">
          <div className="img-wrapper me-3">
            <img src="/images/home/user.jpg" alt="" />
          </div>
          <div className="text">
            <p className="employeespeak-content">
              <em>Phone to Web magic: Continuum Insights turns
                surveys into insights.
                <br />
                <span className="rev-name">Market Analyst - Market Research | Dubai</span>
                
              </em>
            </p>
          </div>
        </div>
      </div>
        </Slider>
      </div>
    );
  
}

export default ReviewSlider