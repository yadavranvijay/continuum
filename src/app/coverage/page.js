


import React from 'react'
import Banner from '../components/Banner'
import FooterPunchline from '../components/FooterPunchline'
import '../styles/slick.css'
import '../styles/slick-theme.css'
import CoverageServices from '../components/CoverageServices'


const Coverage = () => {
  const bannerData = {
    Name: 'COVERAGE',
    image: '/images/markets/market-banner.jpg',
    heading: 'Exploring Market Coverage with Continuum Insights',
    para:" Continuum Insights is your gateway to comprehensive market coverage. We empower businesses with insightful data, enabling them to seize every opportunity in today's dynamic markets. With our expertise, you can navigate the competitive landscape and make data-driven decisions that drive success.",
  };
  return (
    <div  className="page-content">
  <Banner 
 {...bannerData}
  />
  <div className="py-5">
  <div className="costum-container">
    <div className="row">
      <div className="col-md-10">
        <div className="wrapper">
          <h2 className="Bold mb-4 banner-color">Gain access to a vast global pool of millions of respondents.</h2>
          <p>
            Obtaining high-quality responses relies on verified, double-opted-in members who willingly participate in online studies.
          </p>

          <p>
            Continuum Insights utilizes various sample sources to recruit respondents, ensuring that all registrations are subject to approval. 
          </p>
          <p>
            You can view panel details in all available markets by hovering over the hotspots.
          </p>
          <p>
            If your target market isn`&apos;`t visible, you can get in touch with  <a href="contact.html">Continuum_Insight.com</a> to share your requirements, and we will tap into our extensive network of trusted partners to find a suitable solution for you.
          </p>
       
        </div>
      </div>
    </div>
  </div>
</div>
<CoverageServices />


 {//<CATIVideo  path="/images/service/cati.m4v" Name="CATI"/>
}




  <FooterPunchline  data=" Market Coverage That Unlocks Every Opportunity."/>


    </div>
  )
}

export default Coverage

export function generateMetadata({}){
 return{ 
  title : "Coverage",
  description:"",
  


}
}