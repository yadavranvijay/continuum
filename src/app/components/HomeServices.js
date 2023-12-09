"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";


const HomeServices = () => {
    const [tab1 , setTab1] =useState ()
const [tab2 , setTab2] =useState ()
const [tab3 , setTab3] =useState ()
const [tab4 , setTab4] =useState ()


const tabbtn1 =()=>{
setTab1(true)
setTab2(false)
setTab3(false)
setTab4(false)


}
const tabbtn2 =()=>{
  setTab1(false)
  setTab2(true)
  setTab3(false)
  setTab4(false)
  
  
  }
  const tabbtn3 =()=>{
    setTab1(false)
    setTab2(false)
    setTab3(true)
    setTab4(false)
   
    
    }
    const tabbtn4 =()=>{
        setTab1(false)
        setTab2(false)
        setTab3(false)
        setTab4(true)
       
        
        }
    const cancleBtn =()=>{
        setTab1(false)
        setTab2(false)
        setTab3(false)
        setTab4(false)
       
        
        }
 



  return (
    <div>
    <section className="banner-bottom-section py-4">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-3 col-sm-6 ">
              <div className="wrapper">
                <div className="text-center main-wrapper ">
                  <div className="img-wrapper more-btn" onClick={()=>tabbtn1()}>
                    <figure>
                      <div className="space">
                        <img src="/images/service3.jpg" alt="" />
                      </div>
                    </figure>
                    <h5 className="text-black">Online Survey</h5>
                  </div>
                  

                  <div className={tab1 ? "toggle-content-wrapper invisible-contents  open":"toggle-content-wrapper invisible-contents bg-white "} >
              <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
                    <div className="row align-items-center flex-wrap-reverse">
                      <div className="col-md-7 text-start">
                        <h3>Online Survey</h3>
                        <p>
                          At Continuum Insights, our online survey solutions
                          empower you to gather valuable insights with ease.
                          Craft, distribute, and analyze surveys effortlessly,
                          gaining meaningful data for informed
                          decision-making.
                        </p>
                        <Link className="btn" href="/online-survey">Read More</Link>
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-4">
                        <figure>
                          <img src="/images/home/service1.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="wrapper">
                <div className="text-center main-wrapper">
                  <div className="img-wrapper more-btn" onClick={()=>tabbtn2()}>
                    <figure>
                      <div className="space">
                        <img src="/images/service2.jpg" alt="" />
                      </div>
                    </figure>
                    <h5 className="text-black">Phone To Web</h5>
                  </div>
                  

                  <div className={tab2 ? "toggle-content-wrapper invisible-contents  open":"toggle-content-wrapper invisible-contents bg-white "} >
                  <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
                    <div className="row align-items-center  flex-wrap-reverse">
                      <div className="col-md-7 text-start">
                        <h3>Phone To Web</h3>
                        <p>
                          Seamlessly transition phone survey data into
                          insightful online reports with Continuum Insights.
                          Our Phone to Web service enables you to digitize
                          your research, making it accessible and actionable.
                        </p>

                        <Link className="btn" href="/phone-to-web">Read More</Link>
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-4">
                        <figure>
                          <img src="/images/home/service2.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="wrapper">
                <div className="text-center main-wrapper">
                  <div className="img-wrapper more-btn" onClick={()=>tabbtn3()}>
                    <figure>
                      <div className="space">
                        <img src="/images/service4.jpg" alt="" />
                      </div>
                    </figure>
                    <h5 className="text-black">CATI</h5>
                  </div>
                  

                  <div className={tab3 ? "toggle-content-wrapper invisible-contents  open":"toggle-content-wrapper invisible-contents bg-white "} >
                  <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
                    <div className="row align-items-center  flex-wrap-reverse">
                      <div className="col-md-7 text-start">
                        <h3>CATI</h3>
                        <p>
                          Harness the power of CATI with Continuum Insights
                          for in-depth market research. Our expert
                          interviewers employ cutting-edge technology to
                          conduct surveys via phone, ensuring accurate and
                          reliable data collection.
                        </p>

                        <Link className="btn" href="/CATI">Read More</Link>
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-4">
                        <figure>
                          <img src="/images/home/cati.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-sm-6">
              <div className="wrapper">
                <div className="text-center main-wrapper">
                  <div className="img-wrapper more-btn" onClick={()=>tabbtn4()}>
                    <figure className="mx-auto">
                      <div className="space">
                        <img src="/images/service1.jpg" alt="" />
                      </div>
                    </figure>
                    <h5 className="text-black">Survey Programming and Hosting</h5>
                  </div>
                  

                  <div className={tab4 ? "toggle-content-wrapper invisible-contents  open":"toggle-content-wrapper invisible-contents bg-white "} >
              <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
                    <div className="row align-items-center  flex-wrap-reverse">
                      <div className="col-md-7 text-start">
                        <h3>Survey Programming and Hosting</h3>
                        <p>
                          Elevate your surveys with customized, user-friendly
                          interfaces at Continuum Insights. Our survey
                          programming experts create engaging questionnaires,
                          optimizing respondent experiences for enhanced data
                          quality.
                        </p>

                        <Link className="btn" href="/survey-programming">Read More</Link>
                      </div>
                      <div className="col-md-1"></div>
                      <div className="col-md-4">
                        <figure>
                          <img src="/images/home/Survey-Programming.png" alt="" />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
    </div>
  );
};

export default HomeServices;
