import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-6.jpg"
     heading="Maintain a strategic advantage against deceptive threats."/>


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
                              
                                <p>Empower a prominent financial compliance entity by providing comprehensive insights into fraud analytics, authentication, risk and compliance, and other managed services within the finance and insurance sector. Illuminate the landscape of fraud detection and prevention.</p>

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
                             <p>Engaging with Senior IT Managers and above.</p> 

                             
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Sample</span>
                            </div>
                            <div className="cases-right">
                                <p>Conducting 600 interviews.</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Geography</span>
                            </div>
                            <div className="cases-right">
                                <p>Focused on the APAC region.</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Result</span>
                            </div>
                            <div className="cases-right">
                                <p>The research outcomes were instrumental in deciphering the fraud detection and prevention market, unraveling key growth influencers, and scrutinizing products and services. The survey delved into the competitive terrain, enabling precise opportunity assessments within the fraud detection and prevention domain.
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
     title : "Deceptive Threats",
     description:"",
    
   
   }
   }