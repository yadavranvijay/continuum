"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";


const PhoneServices = () => {
    const [tab1 , setTab1] =useState ()
const [tab2 , setTab2] =useState ()
const [tab3 , setTab3] =useState ()


const tabbtn1 =()=>{
setTab1(true)
setTab2(false)
setTab3(false)


}
const tabbtn2 =()=>{
  setTab1(false)
  setTab2(true)
  setTab3(false)
  
  
  }
  const tabbtn3 =()=>{
    setTab1(false)
    setTab2(false)
    setTab3(true)
   
    
    }
    const cancleBtn =()=>{
        setTab1(false)
        setTab2(false)
        setTab3(false)
       
        
        }
 



  return (
    <div>
    <div className="bg-grey-1 online-content-section" id="phone-services">
    <div className="costum-container">
      <div className="row py-5 p-relative">
        <div className="col-md-3 pt-4">
          <div className="wrapper p-relative">
            <h2 className="Bold banner-color">Phone To Web Services </h2>
            <p className="Medium fs-5">
              At Continuum, we’re B2B experts with 2/3rds
            </p>
          </div>
        </div>
        <div className="col-md-3 hide-content-wrapper">
        <div className={tab1 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
        <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
                <h3>Phone Interview</h3>
                <p>
                 
A phone interview serves as a preliminary and convenient step in the hiring process, allowing employers to assess candidates`&apos;` communication skills and initial qualifications. Conducted remotely, it offers a platform for employers to delve into a candidate`&apos;`s background, experience, and suitability for a role. This initial conversation often helps both parties gauge mutual interest and compatibility before proceeding to more extensive in-person interviews. Phone interviews are time-efficient, providing a snapshot of a candidate`&apos;`s personality and professionalism while offering the flexibility of scheduling for both interviewee and interviewer.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/phone-interview.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">Phone Interview</h2>
            <p>The survey starts with a phone interview conducted by a live interviewer.</p>

            <a className="more-less-btn" onClick={()=>tabbtn1()}><span className="span me-2 Bold">Read More</span>
            <FaArrowRightLong /></a>
          </div>
        </div>
        <div className="col-md-3 hide-content-wrapper">
        <div className={tab2 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
        <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
                <h3> Transition to Web Survey</h3>
                <p>
                  Transitioning from a phone interview to a web survey introduces a dynamic shift in the data collection process. Web surveys provide a structured and scalable platform for gathering detailed responses from a broader audience. This transition enables a seamless progression, allowing participants to engage with the survey at their own pace, fostering convenience and flexibility. With the advantage of multimedia elements, such as images and videos, web surveys enhance the richness of data collected. Moreover, the transition to web surveys often streamlines data management, ensuring efficient analysis and actionable insights for informed decision-making.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/web-survey.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">
              Transition to Web Survey</h2>
            <p>
              Transitioning from a phone interview to a web survey introduces a dynamic
            </p>

            <a className="more-less-btn" onClick={()=>tabbtn2()}><span className="span me-2 Bold">Read More</span>
            <FaArrowRightLong /></a>
          </div>
        </div>
        <div className="col-md-3 hide-content-wrapper">
        <div className={tab3 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
        <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
                <h3>Web Survey Setup</h3>
                <p>
                
To set up a web survey, clearly define your objectives and choose a suitable online platform; craft well-structured and tested questions, ensuring accessibility and security measures are in place; establish effective distribution channels and consider incentives for participant engagement; closely monitor real-time responses and conduct a thorough analysis for actionable insights; and finally, adhere to data protection regulations and privacy compliance throughout the entire process.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/survey-setup.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">Web Survey Setup</h2>
            <p>
              To set up a web survey, clearly define your objectives and choose 
            </p>

            <a className="more-less-btn" onClick={()=>tabbtn3()}><span className="span me-2 Bold">Read More</span>
            <FaArrowRightLong /></a>
          </div>
        </div>

      </div>
    </div>
  </div>
    </div>
  );
};

export default PhoneServices;
