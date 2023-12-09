


import React from 'react'
import Banner from '../components/Banner'
import FooterPunchline from '../components/FooterPunchline'
import '../styles/slick.css'
import '../styles/slick-theme.css'
import PhoneServices from '../components/PhoneServices'
import PhoneSlider from '../components/PhoneSlider'


const PhoneToWeb = () => {
  const bannerData = {
    Name: 'PHONE TO WEB',
    image: '/images/service/phone-to-web-banner1.jpg',
    heading: 'Elevate Your Research with Phone to Web',
    para:'Seamlessly transition phone survey data into insightful online reports with Continuum Insights. Phone to Web service enables you to digitize your research, making it accessible and actionable.',
      
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
          <h2 className="Bold mb-4">What is Phone To Web ?</h2>
          <p>
            Phone to Web typically refers to a method of data collection or interaction where information is
            initially collected or transmitted through a phone call (typically a Computer-Assisted Telephone
            Interview, or CATI) and then transferred or connected to web-based platforms or databases for further
            analysis, storage, or reporting.

          </p>

          <p>
            This approach is often used in market research or survey administration.
          </p>
          <p>
            For example, in a market research context, respondents may be contacted via telephone (CATI) to
            participate in a survey.
          </p>
          <p>
            The responses they provide during the phone interview are then entered into a web-based system for data
            analysis and reporting.
          </p>
          <p>

            This combination of phone-based data collection and web-based data management allows for efficient data
            handling and analysis while still leveraging the personal interaction of a phone interview.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

<PhoneServices />


  <section className="differentiator pt-3 pb-5 " id="Case-studies">
  <div className="costum-container">
    <div className="p-relative">
      <div className="heading">
        <h2 className="mb-4 ExtraBold fs-1 text-center">Case Studies</h2>
      </div>
    <PhoneSlider />
    </div>
  </div>
</section>
  <FooterPunchline  data=" From Calls to Clicks: Bridging Surveys for Streamlined Insights."/>


    </div>
  )
}

export default PhoneToWeb

export function generateMetadata({}){
  return{ 
   title : "Phone To Web",
   description:"Best Online Survey & market research providers in the USA. Data is collected in both the formats that are B2B and B2C. Data is collected with proper validation and back check. Quality of data is well maintained so that your business can get more growth. Healthcare is also included while collecting data so that more and fruitful information can be gathered.",
   
 }
 }