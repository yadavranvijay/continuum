import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-17.jpg"
     heading="Unlocking Consumer Behavior in Mobile Phone Purchases."/>


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
                              
                                <p>Our objective was to support a prominent global market research organization in conducting a thorough analysis of consumer behavior related to the purchase and utilization of mobile phones. The primary aim was to gain insights into consumer attitudes and preferences while shedding light on the evolving market trends in the mobile phone industry.</p>

                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Methodology</span>
                            </div>
                            <div className="cases-right">
                                <p> Online Method</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Respondents</span>
                            </div>
                            <div className="cases-right">
                             <p>Our research targeted respondents aged 18 years and older, with a gender distribution split evenly at 50% male and 50% female. This approach ensured a well-balanced representation of diverse consumer perspectives.</p> 

                             
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Sample</span>
                            </div>
                            <div className="cases-right">
                                <p>A substantial sample of 2500 interviews was conducted, providing a robust dataset that captured a wide range of consumer insights.</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Geography</span>
                            </div>
                            <div className="cases-right">
                                <p>Our research covered multiple geographic regions, including North America, Canada (CA), France (FR), Germany (DE), Europe, Spain (ES), and Italy (IT). This approach allowed for a comprehensive analysis of consumer behavior across diverse markets.</p>
                            </div>
                        </div>
                        <div className="cases-box wow fadeInLeft">
                            <div className="cases-left">
                                <span className="fw-7">Result</span>
                            </div>
                            <div className="cases-right">
                                <p>The survey results served as a valuable resource for our client in generating a comprehensive analysis of consumer habits and preferences. It provided insights into the specific features and characteristics that consumers prioritize when purchasing a new mobile phone. Additionally, the research facilitated a competitive analysis among various mobile phone brands, helping our client gain a deeper understanding of market dynamics and brand positioning. <br />

                                  The insights obtained from this study can be leveraged by mobile phone manufacturers, retailers, and marketing teams to fine-tune their strategies, align product offerings with consumer preferences, and stay competitive in the ever-evolving mobile phone market.
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
     title : "Consumer Behavior",
     description:"",
    
   
   }
   }