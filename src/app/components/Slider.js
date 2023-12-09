"use client"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaRegFileLines } from "react-icons/fa6";

const  CATISlider =()=> {
  
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        dots:true,
        arrows: false,
        centerPadding: "21.5%",
        slidesToShow: 1,
        speed: 500
      };
    return (
      <div>
        
        <Slider {...settings}>
        <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/case/case-1.jpg" alt="" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Maintain a strategic advantage against deceptive threats
              </h3>
              <p>
                Empower a prominent financial compliance entity by providing   ...
              </p>
              <div className="button">
                <Link href="/case-studies/deceptive-threats" className="d-flex align-items-center">
                  <FaRegFileLines />
                  <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/case/case-2.jpg" alt="" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Unlocking the Power of Big Data for Business Advancement</h3>
              <p>
                Uncover the big data and predictive analytics endeavors ...
              </p>
              <div className="button">
                <Link href="/case-studies/big-data-for-business" className="d-flex align-items-center">
                <FaRegFileLines />
                <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/case/case-13.jpg" alt="" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Unveiling Coveted Travel Hotspots: A Comprehensive Study</h3>
              <p>
                Conducted a qualitative exploration to grasp the domestic ...
              </p>
              <div className="button">
                <Link href="/case-studies/coveted-travel-hotspot" className="d-flex align-items-center">
                <FaRegFileLines />
                <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-slide">
        <div className="differentiator-item-wrapper">
          <div className="img">
            <img src="/images/case/case-4.jpg" alt="" />
          </div>
          <div className="service-text-wrapper">
            <div className="service-text">
              <h3>Navigating the Dynamic Landscape of the Digital Era: A Comprehensive Exploration</h3>
              <p>
                Continuum Insights partnered with a client to unravel the nuances ...
              </p>
              <div className="button">
                <Link href="/case-studies/digital-era" className="d-flex align-items-center">
                <FaRegFileLines />
                <span className="ms-1">Read More</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        </Slider>
      </div>
    );
  
}

export default CATISlider