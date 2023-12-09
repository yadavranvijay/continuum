"use client"


import { useState } from "react";

const Choose = () => {
    const [tab1 , setTab1] =useState ()
 
    
    
    const tabbtn1 =()=>{
    setTab1(true)
  
    
    
    }
  return (
    <div>
    <div className="bg-grey">
        <div className="container py-5">
          <div className="row flex-centet-between ab-choose">
            <div
              className="col-md-12"
            
            >
              <div className="img-wrapper ab-img">
                <figure>
                  <img
                    className="d-block w-100"
                    src="/images/about-us/choose.png"
                    alt="panel"
                  />
                </figure>
              </div>
            </div>
            <div
              className="col-md-12 mt-4 mt-md-0"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              <div className="wrapper mt-3 hide-content-wrapper">
                <h2 className="Bold mb-4">Why you choose us?</h2>
                <p className="text-justify">
                  Success comes to those who move ahead with innovation and
                  grasp all kinds of opportunities the industry presents to
                  them. Opportunity and growth are two pillars that lead a
                  company to its pinnacle of success.
                </p>
                <p>
                  By uncovering the most accurate insights and making the best
                  use out of them drives smart and effective decision-making
                  that ensures the smooth running of a business empire.
                </p>
                <div className={tab1 ? "invisible-contents":"invisible-contents d-none "}>
                  <p className="text-justify">
                    The insights a company relies on must be accurate and should
                    come from real people who want their voices to be heard.
                    These people want to share their opinions with others
                    thereby making this world a better place to live. Continuum
                    Insights works on the motive of providing unparalleled and
                    quality-rich data that is connected to different kinds of
                    sources.
                  </p>
                  <p className="text-justify">
                    The data we collect is by using the most advanced and
                    innovative technology that brings out answers to all your
                    questions. With more than 3 years of experience in this
                    field, we excel in coming up with insights and data
                    collected from leaders who want to influence the world with
                    their opinions. Continuum Insights is a trusted partner of
                    yours that will provide you with the most authenticated and
                    accurate data that can grow your firm.
                  </p>
                  <p>
                    With millions of data collected from people all over the
                    world, Continuum Insights can give you an insight into what
                    people want or desire from a company in terms of products or
                    services. We value our clients and that is our motivating
                    factor.
                  </p>
                </div>
                <button className="btn-transparent more-less-btn" onClick={()=>tabbtn1()}>Read More</button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default Choose