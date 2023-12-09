import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-21.jpg"
     heading="Data Architects and IT Managers."/>


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
                              
                                <p>A leading data architecture firm aimed to gather insights from data architects about their IT infrastructure preferences, challenges, and future requirements.</p>

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
                             <p>C-suite executives,    Data Architects and IT Managers</p> 

                             
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Sample</span>
                            </div>
                            <div className="cases-right">
                                <p>Conducted 100 interviews </p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Geography</span>
                            </div>
                            <div className="cases-right">
                                <p>Covered Singapore</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Result</span>
                            </div>
                            <div className="cases-right">
                                <p>By scaling the survey to target data architects, our client gained valuable insights into the IT infrastructure landscape, enabling them to adapt their services and solutions to meet the evolving needs of their customers.
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
     title : "Data Architects",
     description:"",
    
   
   }
   }