
"use client"
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import { FaRegFileLines } from "react-icons/fa6";

const  PhoneSlider =()=> {
  
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
                    <img src="/images/case/case-16.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>Data Architects and IT Managers</h3>
                      <p>
                        A target account list across banking and ...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/data-architects">
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
                    <img src="/images/case/case-14.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>POS advertising and promo items study</h3>
                      <p>
                        A marketing agency specializing in point-of-sale (POS) advertising and promotional...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/POS-advertising">
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
                    <img src="/images/case/case-18.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>IT Services decision-making influence</h3>
                      <p>
                        An IT services provider sought to understand the decision-making influence ...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/decision-making-influence">
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
                    <img src="/images/case/case-17.jpg" alt="" />
                  </div>
                  <div className="service-text-wrapper">
                    <div className="service-text">
                      <h3>Scaling Employee Engagement Surveys</h3>
                      <p>
                        Our client, a multinational corporation, aimed to enhance employee engagement ...
                      </p>
                      <div className="button">
                        <Link href="/case-studies/scaling-employee-engagement">
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

export default PhoneSlider