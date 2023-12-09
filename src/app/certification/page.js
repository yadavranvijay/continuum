


import React from 'react'
import Banner from '../components/Banner'
import FooterPunchline from '../components/FooterPunchline'
import '../styles/slick.css'
import '../styles/slick-theme.css'
import Choose from '../components/Choose'


const Certification = () => {
  const bannerData = {
    Name: 'CERTIFICATION',
    image: '/images/about-us/Certification.jpg',
    heading: 'Discover Deeper Insights with Continuum: Your Resource Hub',
    para:
      " Unlock a wealth of knowledge tailored just for you. Click on the thumbnails below to explore Continuum Insights and elevate your understanding.",
  };
  return (
    <div  className="page-content">
  <Banner 
 {...bannerData}
  />


  <section className="py-5"> 
  <div className="container certification-wrapper">
      <div className="row">
          <div className="col-md-4">
              <div className="wrapper">
                  <div className="img-wrapper">
                      <img src="/images/about-us/cer1.jpg" alt="" />
                  </div>
                   <a href="#"> IOS (International Organization for Standardization)</a>
              </div>
          </div>
          <div className="col-md-4">
              <div className="wrapper">
                  <div className="img-wrapper">
                      <img src="/images/about-us/cer2.jpg" alt="" />
                  </div>
                   <a href="#"> MRSI (Market Research Society of India)</a>
              </div>
          </div>
          <div className="col-md-4">
              <div className="wrapper">
                  <div className="img-wrapper">
                      <img src="/images/about-us/esomar.jpg" alt="" />
                  </div>
                   <a href="#">ESOMAR</a>
              </div>
          </div>
      </div>
  </div>
</section>


    </div>
  )
}

export default Certification

export function generateMetadata({}){
 return{ 
  title : "Certification",
  description:"",
 

}
}