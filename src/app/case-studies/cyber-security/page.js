import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-7.jpg"
     heading="Cyber Security Trends: Exploring Strategies and Technologies."/>


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
                                
                                  <p>In an ever-evolving digital landscape, a prominent network security firm sought to gain insights into the cybersecurity technologies currently embraced by organizations. Our mission was to analyze the prevailing strategies and trends in the cybersecurity market.</p>

                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Methodology</span>
                              </div>
                              <div className="cases-right">
                                  <p>CATI & Online Method</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Respondents</span>
                              </div>
                              <div className="cases-right">
                               <p>We engaged with leaders and decision-makers at the director level and above within organizations.</p> 

                               
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Sample</span>
                              </div>
                              <div className="cases-right">
                                  <p>A total of 400 interviews were conducted, contributing to a robust dataset for in-depth analysis.</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Geography</span>
                              </div>
                              <div className="cases-right">
                                  <p>Our research spanned across diverse regions, including Italy, Spain, Germany, France, the Nordics, Benelux, Europe, and the United Arab Emirates (UAE).</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Result</span>
                              </div>
                              <div className="cases-right">
                                  <p>The study provided valuable insights into the strategies currently adopted, improved, or planned by organizations in the realm of cybersecurity. Our project sampling shed light on the utilization of cybersecurity technologies across various departments within large organizations, offering a deeper understanding of the factors driving increased demand.
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
     title : "Cyber Security",
     description:"",
    
   
   }
   }