


import React from 'react'
import Banner from '../components/Banner'
import FooterPunchline from '../components/FooterPunchline'
import '../styles/slick.css'
import '../styles/slick-theme.css'
import CATISlider from '../components/Slider'
import CATIServices from '../components/CATIServices'
import CATIVideo from '../components/SevicesVideo'


const CATI = () => {
  const bannerData = {
    Name: 'CATI',
    image: '/images/service/cati-banner1.jpg',
    heading: 'Precision in Phone Surveys with Continuum Insights',
    para:
      'Harness the power of CATI with Continuum Insights for in-depth market research. Our expert interviewers employ cutting-edge technology to conduct surveys via phone, ensuring accurate and reliable data collection.',
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
              <h2 className="Bold mb-4 banner-color">What is Computer-Assisted Telephonic Interview (CATI) ?</h2>
              <p>
                CATI is a traditional research method of conducting telephone surveys in which the interviewer uses a computer to record and store the respondent`&apos;`s answers to the survey questions.
              </p>

              <p>
                This allows for more efficient data collection and analysis, as the responses can be easily stored and analyzed using specialized software.
              </p>
              <p>
                If you look at the working procedure of CATI, you will find it very efficient. As we never leave our clients in dilemma. Taking feedback is one of the most important aspects for us.
              </p>
              <p>
                Either we have a visitor or a buyer, we ask for their requirements and we haven`&apos;`t completed our job yet. We always take feedback so that we can enlarge the faith of our users more and more.
              </p>
              <p>
                CATI is a way through which we can easily understand the requirements as customers have more chances to explains its requirement verbally
              </p>
              <p><strong>Let us understand CATI in the simplest way.</strong></p>
              <p>If you buy any product, you receive a telephone call. On this call, the interviewer will talk about your buying experience or service experience. This phone call is called Computer-Assisted Telephonic Interview (CATI).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
<CATIServices />


<CATIVideo  path="/images/service/cati.m4v" Name="CATI"/>



  <section className="differentiator pt-3 pb-5 " id="Case-studies">
  <div className="costum-container">
    <div className="p-relative">
      <div className="heading">
        <h2 className="mb-4 ExtraBold fs-1 text-center">Case Studies</h2>
      </div>
      <CATISlider />
    </div>
  </div>
</section>
  <FooterPunchline  data="Your Gateway to Comprehensive Online Surveys and Market
  Research."/>


    </div>
  )
}

export default CATI

export function generateMetadata({}){
 return{ 
  title : "CATI",
  description:"Best Online Survey & Market Research  Company In USA. Get Complete Insight for your Business  growth to run your business Flawlessly. ✓B2B ✓B2C  Panel providers In USA who are uncovering the most  accurate insights to drives smart and effective  decision making that ensures the smooth running of a business empire.",
 

}
}