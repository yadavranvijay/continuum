"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";


const OnlineServices = () => {
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
    <div className="bg-grey-1 online-content-section" id="Online-services">
    <div className="costum-container">
      <div className="row py-5 p-relative">
        <div className="col-md-3 pt-4">
          <div className="wrapper p-relative">
            <h2 className="Bold banner-color">Online Services</h2>
            <p className="Medium fs-5">
              Exploring Online Survey Solutions with us.
            </p>
          </div>
        </div>
        <div className="col-md-3 hide-content-wrapper">
        <div className={tab1 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
        <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
                
                  <h3>B2B</h3>
                  <p >
                    At Continuum, we’re B2B experts with 2/3rds of our transactional volume coming from business research. We
                    take special effort in curating business panels which are suited to businesses across all industries and
                    company sizes. Our work is accessed by 200 research agencies and end clients.&nbsp;
                  </p>
                  <p >
                    Globally, Continuum’s business audiences are seasoned upper management professionals who provide deeper
                    insights of their purchasing decisions, tech usage and industry roadmaps. We’ve made significant
                    investments in recruitment with high feasibility and profitability with respect to returns, with an
                    industry leading average response rate of ~15-25%+*
                  </p>
                  <p> <strong>Our specialization in Decision Makers (FDMs, GBDMs, HRDMs, ITDMs) allow higher
                      demographic and firmographic targeting including -&nbsp;</strong>
                  </p>
                  <ul>
                    <li> Role or Title</li>
                    <li> Revenue</li>
                    <li> Company Size </li>
                    <li> Employee </li>
                    <li> Size</li>
                    <li> Industry</li>
                    <li> Group specialization and more.</li>
                  </ul>
            
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/b2b1.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">B2B</h2>
            <p>At Continuum, we’re B2B experts with 2/3rds of our</p>

            <a className="more-less-btn" onClick={()=>tabbtn1()}><span className="span me-2 Bold">Read More</span>
            <FaArrowRightLong /></a>
          </div>
        </div>
        <div className="col-md-3 hide-content-wrapper">
        <div className={tab2 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
              <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
                <h3>B2C</h3>
             
                  <p>
                    At Continuum, while striving and working towards collecting data for thousands of consumer studies on a
                    weekly basis, we believe our forte lies in the brand tracking and awareness survey space. From Product
                    testing to shopping experience, Continuum is the industry leading for consumer tracking studies. We know
                    this business inside and out. We understand the difference between trending data and how to sample it vs low
                    grade sample strategies that result in tracking data with major deviations and spikes in brand awareness and
                    segment-able data.&nbsp;
                  </p>
              
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/b2c.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">B2C</h2>
            <p>
              At Continuum, while striving and working towards collecting
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
                <h3>Healthcare</h3>
               
                  <p>
                    At Continuum, one of our key categories is healthcare. Our healthcare panels are built with genuine insight
                    and attention to detail. We provide researchers access to patient profiles with access to thousands of
                    documents including medical conditions and other personal attributes. We’ve partnered with top health
                    networks and our team of experts identifies and enlists individuals suffering from specific ailments and
                    conditions. Networks we work with include both traditional partnerships (ie. hospitals, patient opt-in
                    programs, medicare sources) and reputable third party, healthcare affiliate programs that also recruit
                    general patient populations.
                  </p>
              
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/healthcare.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">Healthcare</h2>
            <p>
              At Continuum, one of our key categories is healthcare. Our
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

export default OnlineServices;
