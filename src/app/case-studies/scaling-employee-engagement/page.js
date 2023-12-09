import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-22.jpg"
     heading="Scaling Employee Engagement Surveys."/>


    <section>

        <div className="costum-container pt-3 pb-5">
            <div className="row">
                <Links />
                <div className="col-lg-8 col-md-6">
<div className="cases-detail ">
                      <div className="cases-content">
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Objective</span>
                              </div>
                              <div className="cases-right">
                                
                                  <p> Our client, a multinational corporation, aimed to enhance employee engagement across its global workforce. They required a scalable solution to gather feedback from thousands of employees across different regions.</p>

                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Methodology</span>
                              </div>
                              <div className="cases-right">
                                  <p> Phone To Web Method</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Respondents</span>
                              </div>
                              <div className="cases-right">
                               <p>Employed at target company at S1, Age 18+, Currently Employed, Full-time Employed, W-2 Employee, US resident</p> 

                               
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Sample</span>
                              </div>
                              <div className="cases-right">
                                  <p>969 </p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Geography</span>
                              </div>
                              <div className="cases-right">
                                  <p> Coverd USA</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Result</span>
                              </div>
                              <div className="cases-right">
                                  <p>With our scalable survey solution, our client efficiently gathered feedback from employees worldwide, identified areas for improvement, and implemented strategies that significantly boosted employee engagement.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>

            </div>
        </div>
    </section>

</div>
  )
}

export default page

export function generateMetadata({}){
    return{ 
     title : "Big Data for Business Advancement",
     description:"",
    
   
   }
   }