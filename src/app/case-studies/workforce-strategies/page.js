import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-3.jpg"
     heading="Navigating COVID-19: Transforming Workforce Strategies."/>


    <section>

        <div className="costum-container pt-3 pb-5">
            <div className="row">
                <Links />
                <div className="col-lg-8 col-md-6">
                <div className="cases-detail">
                    <div className="cases-content">
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Objective</span>
                            </div>
                            <div className="cases-right">
                                <p>
                                    The landscape of organizational strategies across all
                                    industries has undergone a profound transformation. In
                                    light of this, a leading global market research firm
                                    embarked on a quest to understand how organizations are
                                    adapting to the challenges posed by COVID-19, especially
                                    in the context of remote work.
                                </p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Methodology</span>
                            </div>
                            <div className="cases-right">
                                <p>Online Method</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Respondents</span>
                            </div>
                            <div className="cases-right">
                                <p>
                                    <strong>
                                        The study engaged key decision-makers in various
                                        domains, including:</strong>
                                </p>
                                <p>
                                    Chief Information Officers (CIO), Vice Presidents, and
                                    Directors of Information Technology (IT). <br />
                                    Chief Marketing Officers (CMO), Vice Presidents, and
                                    Directors of Marketing. <br />
                                    Chief Human Resources Officers (CHRO), Vice Presidents,
                                    and Directors of Human Resources (HR).
                                </p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Sample</span>
                            </div>
                            <div className="cases-right">
                                <p>
                                    A total of 700 interviews were conducted, offering a
                                    robust dataset for analysis.
                                </p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Geography</span>
                            </div>
                            <div className="cases-right">
                                <p>
                                    Our research extended its reach across the continents of
                                    North America, Europe, and the Asia-Pacific (APAC)
                                    region.
                                </p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Result</span>
                            </div>
                            <div className="cases-right">
                                <p>
                                    The study delved into the challenges organizations
                                    faced, how they addressed these challenges, the
                                    effectiveness of the solutions applied, and the areas of
                                    paramount concern. We also explored the success stories,
                                    how they might influence future preferences, and the
                                    accelerated adoption of technological solutions.
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
     title : "Workforce Strategies",
     description:"",
    
   
   }
   }