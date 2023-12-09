import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-8.jpg"
     heading="Unlocking the Power of Big Data for Business Advancement."/>


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
                              
                                <p>Uncover the big data and predictive analytics endeavors undertaken by medium and large enterprises. Analyze customer trends and preferences to enhance strategic decision-making.</p>

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
                             <p>Engaged with IT Managers and above.</p> 

                             
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Sample</span>
                            </div>
                            <div className="cases-right">
                                <p>Conducted 400 interviews.</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Geography</span>
                            </div>
                            <div className="cases-right">
                                <p>Focused on North America and Europe.</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Result</span>
                            </div>
                            <div className="cases-right">
                                <p>The study`&apos;`s findings facilitated our client`&apos;`s comprehension of organizational positioning on the big data adoption spectrum across diverse business functions. Valuable insights were gleaned, offering a nuanced understanding of predictive analytics at the departmental level. 
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