import React from 'react'
import Banner from '../component/Banner'
import Links from '../component/Links'

const page = () => {
  return (
    <div className="page-content">
    <Banner image="/images/case/case-banner-18.jpg"
     heading="Unveiling Coveted Travel Hotspots: A Comprehensive Study."/>


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
                                
                                  <p>Conducted a qualitative exploration to grasp the domestic travel patterns of Chinese Americans throughout North and South America. Delved into their preferences and behaviors when selecting destinations for domestic journeys.</p>

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
                               <p>Focused on Chinese Americans undertaking travel within North America and South America.</p> 

                               
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Sample</span>
                              </div>
                              <div className="cases-right">
                                  <p>Conducted 200 interviews.</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Geography</span>
                              </div>
                              <div className="cases-right">
                                  <p>Encompassed the United States, Canada, Brazil, and Argentina.</p>
                              </div>
                          </div>
                          <div className="cases-box wow fadeInLeft">
                              <div className="cases-left">
                                  <span className="fw-7">Result</span>
                              </div>
                              <div className="cases-right">
                                  <p>Empowering the client to assess the influential factors guiding destination choices among Chinese American travelers in North and South America. The survey`&apos;`s Incidence Rate provided valuable insights into the percentage of those engaging in domestic travel in recent years.
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
     title : "Coveted Travel Hotspots",
     description:"",
    
   
   }
   }