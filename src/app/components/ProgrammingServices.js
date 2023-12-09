"use client"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import { useState } from "react";


const ProgrammingServices = () => {
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
    <div className="bg-grey-1 online-content-section" id="survey-programming-Services">
    <div className="costum-container">
      <div className="row py-5 p-relative">
        <div className="col-md-4 pt-4">
          <div className="wrapper p-relative">
            <h2 className="Bold banner-color">Survey Programming Services</h2>
            <p className="Medium fs-5">
              Exploring Survey Programming Solutions with us.
            </p>
          </div>
        </div>

        <div className="col-md-4 hide-content-wrapper">
        <div className={tab1 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
        <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
                <h3>Comprehensive Market Analysis</h3>
                <p>
                  At Continuum Insights, we understand that the cornerstone
                  of most survey research endeavors lies in the quest to
                  uncover correlations between variables during the analysis
                  phase. Our dedicated team of professionals is adept at
                  conducting high-end analysis to meet this challenge.
                  <br />
                  Our market research managers are keenly interested in
                  discerning whether specific demographic groups or segments
                  exhibit a preference for particular goods or services. To
                  shed light on these inquiries, our analytics experts
                  regularly employ two primary statistical methods:
                  correlation and regression.
                  <br />

                  In the realm of attitude and feedback surveys,
                  establishing reliable associations and making meaningful
                  inferences can be quite intricate. Correlation stands as
                  the primary and widely employed survey analysis tool for
                  investigating potential links between variables. <br />
                  In this approach, we construct both independent and
                  dependent variables to forecast a relationship. The
                  independent variable is often regarded as the cause,
                  while the dependent variable is the result.
                </p>
              </div>

              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/sp-1.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>

          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">
              Comprehensive Market Analysis
            </h2>
            <p>
              At Continuum Insights, we understand that the cornerstone of
              most
            </p>

            <a className="more-less-btn" onClick={()=>tabbtn1()}><span className="span me-2 Bold">Read More</span>
            <FaArrowRightLong /></a>
          </div>
        </div>
        <div className="col-md-4 hide-content-wrapper">
        <div className={tab2 ? "toggle-content-wrapper invisible-contents bg-white open":"toggle-content-wrapper invisible-contents bg-white "} >
        <span className="cancle-btn" onClick={()=>cancleBtn()}><FaTimes /> </span>
            <div className="row align-items-center">
              <div className="col-md-7 text-start">
                <h3>Strategic Market Segmentation</h3>
                <p>
                  Segmentation, the art of classifying customers into
                  distinct groups based on shared characteristics, is a
                  vital tool for businesses looking to tailor their
                  marketing efforts effectively. <br />
                  Through segmentation, marketers can finely target specific
                  audience segments with their marketing campaigns, ensuring
                  that their messaging resonates with each group. <br />
                  At Continuum Insights, we offer our clients the advantage
                  of advanced and robust segmentation techniques, backed by
                  our in-house technology and solution experts. Our
                  dedicated team of professionals specializes in the
                  segmentation process, utilizing various parameters such as
                  demographics, geography, and product characteristics to
                  define customer groups. <br />
                  Additionally, we employ experts who focus on conducting
                  Attitudinal Segmentation, Behavioral Segmentation, Benefit
                  Segmentation, and Lifestyle Segmentation to provide a
                  holistic understanding of your customer base.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/sp-2.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">
              Strategic Market Segmentation
            </h2>
            <p>
              Segmentation, the art of classifying customers into distinct
              ...
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
                <h3>Conjoint Analysis</h3>
                <p>
                  Conjoint analysis, a widely embraced marketing research
                  methodology, serves as an indispensable tool for
                  discerning the optimal features and pricing strategy for a
                  new product. <br />
                  At Continuum Insights, we adopt a consultative approach
                  when working with our clients to pinpoint the design
                  attributes and the associated levels that best align with
                  their objectives. <br />
                  Once the crucial data is gathered, we harness the power of
                  Conjoint Analysis to unravel the part utilities of each
                  attribute level. This invaluable information serves as the
                  cornerstone for predicting the most compelling product
                  design for the specific customer segment in focus. <br />
                  To ensure precision and accuracy in our analysis, our
                  dedicated team leverages industry-standard tools such as
                  SPSS and Sawtooth software for data design and analysis.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/sp-3.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">Conjoint Analysis</h2>
            <p>
              At Continuum, one of our key categories is healthcare. Our
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
                <h3>Predictive Modeling</h3>
                <p>
                  In the realm of market research, predictive analytics has
                  emerged as a powerful tool that leverages historical and
                  current data to offer intelligent predictions. This
                  transformative approach not only enhances traditional
                  research methods but also augments the utilization of
                  survey data and, at times, publicly available online data
                  to achieve specific study objectives. <br />

                  Predictive analytics draws from an array of data sources,
                  including CRM, web, social media, unstructured data,
                  mobile, surveys, online communities, software, and other
                  pertinent channels. Within this framework, predictive
                  analytics models sift through vast datasets, eliminating
                  irrelevant information while identifying critical factors
                  through advanced algorithms and cross-validation
                  techniques. <br />

                  Any data collected by market researchers becomes a
                  valuable resource for predictive analytics, offering
                  insights into future customers, market dynamics, and
                  qualitative market trends, as opposed to mere historical
                  data summaries. This encompasses diverse data types such
                  as text, market research online communities, participant
                  profiles, and more. <br />

                  At Continuum Insights, we have partnered with numerous
                  clients in this domain, harnessing the potential of
                  predictive analytics to help them achieve their research
                  objectives effectively.
                </p>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4">
                <figure>
                  <img src="/images/service/sp-4.jpg" alt="" />
                </figure>
              </div>
            </div>
          </div>
          <div className="wrapper wrapper-borderd p-relative">
            <h2 className="section-content-heading">Predictive Modeling</h2>
            <p>
              Conjoint analysis, a widely embraced marketing research
              methodology
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

export default ProgrammingServices;
