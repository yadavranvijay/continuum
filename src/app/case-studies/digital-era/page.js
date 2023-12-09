import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-9.jpg"
     heading="avigating the Dynamic Landscape of the Digital Era: A Comprehensive Exploration."/>


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
                                
                                  <p>Continuum Insights partnered with a client to unravel the nuances of digital transformation spanning various industries, business operations, and technology functions, seeking insights into best practices for success.</p>

                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Methodology</span>
                              </div>
                              <div className="cases-right">
                                  <p> CATI Method</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Respondents</span>
                              </div>
                              <div className="cases-right">
                               <p>Engaged with IT/LOB Directors and above.</p> 

                               
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Sample</span>
                              </div>
                              <div className="cases-right">
                                  <p>Conducted 5,500 interviews annually.</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Geography</span>
                              </div>
                              <div className="cases-right">
                                  <p>Covered a global scope.</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Result</span>
                              </div>
                              <div className="cases-right">
                                  <p>The research outcomes played a pivotal role in identifying the widespread adoption of digitalization techniques. They shed light on the evolving impact and essential pillars of the digital world, spanning six distinct functions and fifteen diverse industries.
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
     title : "Digital Era",
     description:"",
    
   
   }
   }