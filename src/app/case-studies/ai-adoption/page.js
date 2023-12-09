import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/home/digital-world3.jpg"
     heading="Fostering AI Adoption in Alignment with Business Objectives"/>


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
                                    <p><strong>Our client sought to gain comprehensive insights into:</strong></p>
                                    <p>The profound impact of AI and AI-enabled systems on businesses, along with
                                        their measurable advantages.
                                        <br /> The various AI-driven business applications equipped with embedded AI
                                        support, utilized by organizations.
                                        <br /> Identifying the primary obstacles hindering the deployment of AI
                                        systems.
                                    </p>

                                </div>
                            </div>
                            <div className="cases-box wow fadeInLeft">
                                <div className="cases-left">
                                    <span className="fw-7">Methodology</span>
                                </div>
                                <div className="cases-right">
                                    <p>CATI Method</p>
                                </div>
                            </div>
                            <div className="cases-box wow fadeInLeft">
                                <div className="cases-left">
                                    <span className="fw-7">Respondents</span>
                                </div>
                                <div className="cases-right">
                                    <p>Our study encompassed individuals in managerial positions and higher roles,
                                        who are influential in IT decision-making.</p>
                                </div>
                            </div>
                            <div className="cases-box wow fadeInLeft">
                                <div className="cases-left">
                                    <span className="fw-7">Sample</span>
                                </div>
                                <div className="cases-right">
                                    <p>A total of 450 in-depth interviews were conducted.</p>
                                </div>
                            </div>
                            <div className="cases-box wow fadeInLeft">
                                <div className="cases-left">
                                    <span className="fw-7">Geography</span>
                                </div>
                                <div className="cases-right">
                                    <p>Our research extended across North America and key European regions,
                                        including France, Germany, Italy, Spain, and the Netherlands.</p>
                                </div>
                            </div>
                            <div className="cases-box wow fadeInLeft">
                                <div className="cases-left">
                                    <span className="fw-7">Result</span>
                                </div>
                                <div className="cases-right">
                                    <p>Our research facilitated a profound understanding of the present and
                                        forthcoming business objectives that drive the implementation of AI systems
                                        within organizations. We further supported our client by providing SPSS data
                                        files and accompanying charts, enabling them to expedite their analysis.
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
     title : "AI Adoption",
     description:"",
    
   
   }
   }