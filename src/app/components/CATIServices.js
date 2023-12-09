"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";


const CATIServices = () => {
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
      <div className="bg-grey-1 online-content-section" id="Cati-services">
        <div className="costum-container">
          <div className="row py-5 p-relative">
          <div className="col-md-3 pt-4">
            <div className="wrapper p-relative">
              <h2 className="Bold banner-color">CATI Services</h2>
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
                    <h3>How Does Our Team Work? </h3>
                    <p>
                      The team of CATI professionals ensures the success of each project undertaken. The team works with clients
                      at
                      every step from creating questionnaires to scripting and data analysis. The goal is to deliver results
                      quickly
                      without compromising on quality or accuracy. <br />
        
                      Additionally, working closely with clients is necessary so that their expectations are met throughout the
                      entire
                      process. This ensures that you get the most value out of services and a successful outcome for your market
                      research projects. CATI team comprises:
                    </p>
        
                    <ul className="point-list">
                      <li>A professional interviewing team with over 50 stations</li>
                      <li>Expert Interviewers in subjects like IT, Business, Management, etc.</li>
                      <li> A team of professionals to monitor and analyze all the interviewers for high-end results</li>
        
                    </ul>
                 
        
                    <p>A team of highly skilled data analysts who understand the market dynamics and deliver accurate results.
                      The
                      CATI professionals are experienced in research methods, survey design, scripting, data analysis, report
                      writing,
                      and statistical analysis. <br/> <br/>
        
                      The team works closely with clients to ensure their needs are met throughout the entire process. CATI can
                      deliver you the most accurate and valuable results possible. By working closely with the clients and
                      understanding their needs, CATI is able to provide the best market research solutions tailored to fit each
                      individual business need.
                    </p>
        
                  
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-4">
                  <figure>
                    <img src="/images/service/cati-team.jpg" alt="" />
                  </figure>
                </div>
              </div>
            </div>

            <div className="wrapper wrapper-borderd p-relative">
              <h2 className="section-content-heading">How Does Our Team Work?</h2>
              <p>The team of CATI professionals ensures the success of</p>

              <a className="more-less-btn" onClick={()=>tabbtn1()}><span className="span me-2 Bold">Read More</span>
              <FaArrowRightLong /></a>
            </div>
          </div>
          <div className="col-md-3 hide-content-wrapper">
          <div className={tab2 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "}>
            <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /></span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
               
                  <h3>
                    How Does Computer-Assisted Telephonic Interview (CATI) Work?
                  </h3>
                  <p>
                    CATI strategy allows interviewers to quickly and accurately record data while talking to respondents over the
                    phone. This type of survey collects quantitative data, which can be analyzed and used to better understand
                    customer needs, preferences, and behaviors. CATI surveys are typically structured to ensure that questions are
                    asked in the same order for each respondent and that responses can be accurately recorded. <br/>
                    Computer-assisted telephone interviewing or CATI is a method of conducting surveys over the phone using a
                    computer
                    program to guide the conversation and record the responses. <br/>
          
                    The interviewer uses the computer program to ask the questions and enter the respondent`&apos;`s answers, which are
                    then
                    stored in a database for analysis. <br/>
          
                    CATI allows for more efficient and accurate data collection than traditional telephone surveys, as it
                    eliminates
                    the need for the interviewer to manually record the answers and reduces the potential for errors. <br/>
                  </p>
          
          
                  <p><b>The CATI Strategy includes:</b></p>
          
                  <ul className="pointlist">
                    <li>Collecting authenticated data from reliable sources
          
                    </li>
                    <li>Opting for cost-effective and time-saving methods
                    </li>
                    <li>Monitoring interviews for achieving the best results.
                    </li>
                    <li>Conducting live interviews for best-quality results
                    </li>
                    <li>Review the progress at every step</li>
                  </ul>
              
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/cati.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">How Does CATI Work?</h2>
            <p>
              CATI strategy allows interviewers to quickly and accurately record
            </p>

            <a className="more-less-btn" onClick={()=>tabbtn2()}><span className="span me-2 Bold">Read More</span>
            <FaArrowRightLong /></a>
          </div>
        </div>
        <div className="col-md-3 hide-content-wrapper">
          <div className={tab3 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "}>
            <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /></span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
            

                  <h3> B2B (CATI)</h3>
                  <p>
                    Enjoy Steadfast B2B Interviewers With C-Level Interviewing Specialists
                  </p>
                  <p>
                    Continuum Insights has a team of professional interviewers that conduct B2B research projects.
                    Having the best quality of results determines the smooth functioning of a business. This is the reason
                    we house
                    a team of qualified CATI professionals to conduct B2B interviews.
                  </p>
                  <p className=" "><strong>Our CATI has:</strong> </p>
                  <ul className="point_list">
                    <li className="  mb-2"> 2 years of experience in conducting B2B interviews</li>
                    <li className=" "> Master’s degree in the respective fields</li>
                  </ul>
                  <p>
                    Continuum Insights has a valuable record of some of the opinion leaders and business professionals
                    for all the purposes related to CATI B2B research. We have deep knowledge of this subject matter and
                    this is
                    how we collect and record data through our past experiences and researches.
                  </p>
                  <div className="mt-5">
                    <h3>B2C (CATI)</h3>
          
                    <p><strong>Experienced and Professional CATI team gives the most accurate and reliable data. </strong></p>
          
          
                    <p>
                      A team of experienced CATI experts delivers the most accurate data. The interviewers have a professional
                      tone to manage all kinds of interviews by engaging the audience and the guests which makes the telephone
                      surveys a much more interesting task.
                    </p>
          
          
                    <p className="text-justify">
                      Overall, CAPI is better suited for research projects that require in-depth probing and open ended
                      questions, while CATI is more suitable for quantitative data collection. Both methods have their
                      advantages and disadvantages, so it’s important to choose the right one for your research project.
                    </p>
                  </div>
          
                
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/cati-b2b.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">B2B (CATI) & B2C (CATI)</h2>
            <p>
              Experienced and Professional CATI team gives the most accurate and reliable data.
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

export default CATIServices;
