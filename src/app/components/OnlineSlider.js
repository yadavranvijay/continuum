
"use client"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaRegFileLines } from "react-icons/fa6";

const  OnlineSlider =()=> {
  
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
                    <img src="/images/case/case-6.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>Deciphering Luxe Lifestyle: A Study on High-End Home Appliances and Consumer Preferences
                      </h3>
                      <p>
                        Discover how our CATI technology provided precise ...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/luxe-lifestyle">
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
                    <img src="/images/case/case-7.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>Navigating the Future of Education: Insights into Smart Education Trends</h3>
                      <p>
                        Explore how CATI improved patient satisfaction and ...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/smart-education">
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
                    <img src="/images/case/case-11.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>Unlocking Consumer Behavior in Mobile Phone Purchases</h3>
                      <p>
                        Find out how we used CATI to enhance quality control ...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/consumer-behavior">
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
                    <img src="/images/case/case-10.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>Navigating the New Travel Landscape: Insights into the Future of Hospitality</h3>
                      <p>
                        See how CATI helped a government agency gauge public sentiment ...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/new-travel-landscape">
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

export default OnlineSlider