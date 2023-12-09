"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";


const CoverageServices = () => {
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
      <div className="bg-grey-1 online-content-section" id="Cati-services">
        <div className="costum-container">
          <div className="row py-5 p-relative">
          <div className="col-md-3 pt-4">
            <div className="wrapper p-relative">
            <h2 className="Bold banner-color">Business Segments</h2>
            <p className="Medium fs-5">
              At Continuum, we’re B2B experts with 2/3rds
            </p>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4 hide-content-wrapper">
          <div className={tab1 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
          <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
              <div className="row align-items-center">
                <div className="col-md-7 text-start">
                    <h3>FBDM</h3>
                    
        
                    <p>At Continuum Insights, we recognize the critical role played by Financial Business Decision Makers (FBDMs). Our extensive network spans 130,500 FBDMs worldwide, with a significant 72% concentration in the United States. These influential individuals are not only integral to the financial landscape but are also actively engaged in participating in surveys tailored for General Business Decision Makers.
                    </p>
        
                  
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <figure>
                    <img src="/images/fbdm.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="wrapper wrapper-borderd p-relative">
              <h2 className="section-content-heading">FBDM</h2>
              <p>At Continuum Insights, we recognize the critical role</p>

              <a className="more-less-btn" onClick={()=>tabbtn1()}><span className="span me-2 Bold">Read More</span>
              <FaArrowRightLong /></a>
            </div>
          </div>
          <div className="col-md-4 hide-content-wrapper">
          <div className={tab2 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
          <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
              <div className="row align-items-center">
                <div className="col-md-7 text-start">
                 
                    <h3>
                      ITDM
                    </h3>
                    <p>
                      At Continuum Insights, our strength lies in our far-reaching connection with IT Decision Makers (ITDMs), a core focus of our expertise. Our expansive network encompasses 176,000 ITDMs worldwide, with a substantial presence of 78,000 in the United States alone. Furthermore, a significant majority, accounting for over 67%, of our Business Decision Maker (BDM) initiatives are specifically designed to involve and engage ITDMs.
                    </p>
            
            
                  
                
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <figure>
                    <img src="/images/itdm.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="wrapper wrapper-borderd p-relative">
              <h2 className="section-content-heading">ITDM</h2>
              <p>
                At Continuum Insights, our strength lies in our far-reaching
              </p>

              <a className="more-less-btn" onClick={()=>tabbtn2()}><span className="span me-2 Bold">Read More</span>
              <FaArrowRightLong /></a>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4 hide-content-wrapper">
          <div className={tab3 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
          <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
              <div className="row align-items-center">
                <div className="col-md-7 text-start">
              

                    <h3> Profiling</h3>
                    <p>
                      At Continuum Insights, we offer comprehensive B2B profiling services to all our B2B panelists, irrespective of their position within the organization. Our profiling extends across a diverse set of criteria, providing a broad spectrum of targetable information. This includes industry specifics, revenue metrics, install base details, employee size, responsibility level, deployed technology, and fleet data.
                    </p>
                   
                   
            
                  
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <figure>
                    <img src="/images/profiling.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="wrapper wrapper-borderd p-relative">
              <h2 className="section-content-heading">Profiling</h2>
              <p>
                At Continuum Insights, we offer comprehensive B2B profiling services
              </p>

              <a className="more-less-btn" onClick={()=>tabbtn3()}><span className="span me-2 Bold">Read More</span>
              <FaArrowRightLong /></a>
            </div>
          </div>
          <div className="col-md-4 hide-content-wrapper">
          <div className={tab4 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
              <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
              <div className="row align-items-center">
                <div className="col-md-7 text-start">
              

                    <h3> GBDM</h3>
                    <p>
                      At Continuum Insights, our foundation is built upon a global network of over 290,000 General Business Decision Makers (GBDMs), which includes Financial Business Decision Makers (FBDMs). Notably, 60% of this influential panel is located in the United States. Our panel provides expansive survey coverage, spanning across diverse industries including Consumer Goods, Services, and Supply.
                    </p>
                   
                   
            
                  
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <figure>
                    <img src="/images/gbdm.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>
            <div className="wrapper wrapper-borderd p-relative">
              <h2 className="section-content-heading">GBDM</h2>
              <p>
                At Continuum Insights, our foundation is built upon a global network
              </p>

              <a className="more-less-btn" onClick={()=>tabbtn4()}><span className="span me-2 Bold">Read More</span>
              <FaArrowRightLong /></a>
            </div>
          </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverageServices;
