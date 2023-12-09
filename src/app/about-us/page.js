


import React from 'react'
import Banner from '../components/Banner'
import FooterPunchline from '../components/FooterPunchline'
import '../styles/slick.css'
import '../styles/slick-theme.css'
import Choose from '../components/Choose'


const About = () => {
  const bannerData = {
    Name: 'WHO WE ARE',
    image: '/images/service/about-banner.jpg',
    heading: 'Discover the Future of Research with Continuum Insights pioneers',
    para:
      "Discover the Future of Research. Continuum Insights pioneers innovative online surveys and data-driven solutions Discover the Future of Research. Continuum Insights pioneers innovative online surveys and data-driven solutions.",
  };
  return (
    <div  className="page-content">
  <Banner 
 {...bannerData}
  />
  <div className="about bg-grey py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-10">
        <div className="wrapper">
          <h2 className="Bold">About Us</h2>
          <p>
            Continuum Insights is a global research platform that offers
            an extensive range of high-end data solutions to companies. We
            focus on meeting all your clients’ expectations by providing
            them with technology-driven data solutions.
          </p>

          <p>
            The data we provide helps companies tackle increasing
            competition and meet deadlines. In the current world, it is
            hard to reach audiences and take their valuable feedback.
            However, at Continuum Insights, our market research solutions
            can take your business ahead. We offer our services in 40
            different countries and their native language.
          </p>
          <p>
            We aim at making this world a better place for companies that
            want to give the best to their customers. With our high-end
            data solutions, you can trust us to get multi-country studies
            related to products and services.
          </p>
          <p>
            Over the years, we have completed over 25% of projects across
            multiple countries, thereby satisfying our clients with our
            services.
          </p>
          <p>
            We are overwhelmed with the feedback received from our
            clients. Continuum Insights is constantly working on
            innovative technologies and tool that allows us to provide
            cost-effective and useful data solutions to all our clients.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="our-team py-5">
<div className="container">
  <div className="row">
    <div className="col">
      <h2 className="mb-5 Bold">Our Team Members</h2>
    </div>
  </div>
  <div className="row">
    <div className="col-md-4 col-sm-6 my-3">
      <div className="wrapper p-relative">
        <figure className="p-relative">
          <img src="/images/about-us/team-member-1.jpg" alt="" />
          <div className="member-name text-white">
            <span className="Bold p-relative pb-2">Founder</span>
            <h3 className="ExtraBold h4 mt-3">Vikas Yadav</h3>
            <div className="member-more">
              <h5>
                <a href="https://www.linkedin.com/in/vikas-yadav-9637042a"
                  >Connect with linkedin
                  <i className="fa-solid fa-arrow-right-long"></i
                ></a>
              </h5>
              <p className="text-white mt-3">
                Meet the visionary mind behind Continuum Insights – Vikas Yadav. With a passion for innovation and a background in market research, Vikas Yadav founded Continuum Insights to redefine how we approach insights in market research.
               
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div className="col-md-4 col-sm-6 my-3">
      <div className="wrapper p-relative">
        <figure className="p-relative">
          <img src="/images/about-us/team-member-2.jpg" alt="" />
          <div className="member-name text-white">
            <span className="Bold p-relative pb-2">Director of Sales</span>
            <h3 className="ExtraBold h4 mt-3">Monika</h3>

            <div className="member-more">
              <h5>
                <a href="https://www.linkedin.com/in/monika-rao-a4242727/"
                  >Connect with linkedin
                  <i className="fa-solid fa-arrow-right-long"></i
                ></a>
              </h5>
              <p className="text-white mt-3">
                Monika is not just a Director of Sales. She is a dynamic leader with a fervent commitment to driving sales strategies that propel organizations towards unprecedented success
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div className="col-md-4 col-sm-6 my-3">
      <div className="wrapper p-relative">
        <figure className="p-relative">
          <img src="/images/about-us/team-member-3.jpg" alt="" />
          <div className="member-name text-white">
            <span className="Bold p-relative pb-2">Supply Manager</span>
            <h3 className="ExtraBold h4 mt-3">Vijay Singh</h3>
            <div className="member-more">
              <h5>
                <a href="#"
                  >Connect with linkedin
                  <i className="fa-solid fa-arrow-right-long"></i
                ></a>
              </h5>
              <p className="text-white mt-3">
                Vijay Singh, a seasoned professional, serves as the Supply Manager at Continuum Insights, demonstrating unparalleled expertise in strategic sourcing, vendor management etc. 
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
    <div className="col-12 my-3">
      <div className="wrapper p-relative">
        <figure className="p-relative">
          <img src="/images/about-us/team.jpg" alt="" />
          <div className="member-name text-white">
            <span className="Bold p-relative pb-2">Our Team</span>
            <h3 className="ExtraBold h4 mt-3">Continuum Insights</h3>
            <div className="member-more">
              <h5>
                <a href="https://www.linkedin.com/company/continuum-insights/"
                  >Connect with linkedin
                  <i className="fa-solid fa-arrow-right-long"></i
                ></a>
              </h5>
              <p className="text-white mt-3">
                At Continuum Insights, we take pride in the strength of our team — a diverse group of talented individuals united by a shared passion for Market Research. Get to know the faces behind our success.
              </p>
            </div>
          </div>
        </figure>
      </div>
    </div>
  </div>
</div>
</div>

<section className="our-solutions py-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 order-r-2">
              <div
                className="service-left wow fadeInLeft animated"
             
              >
                <div className="section-headding color-headding">
                  <label className="section-topik">Our Offerings</label>
                  <h2 className="section-title">
                    Customized research solutions driven by expertise and innovative approaches, meeting the distinct needs of diverse industries and locations.
                  </h2>
                </div>

                <div className="row solutions mt-5">
                  <div className="col-md-4">
                    <div className="solutions-wrapper">
                      <div className="img-wrapper p-relative">
                        <img
                          className="content-bg w-100"
                          src="/images/about-us/ab1.jpg"
                          alt=""
                        />
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="solutions-wrapper">
                      <div className="img-wrapper p-relative">
                        <img
                          className="content-bg w-100"
                          src="/images/about-us/ab2.jpg"
                          alt=""
                        />
                        
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="solutions-wrapper">
                      <div className="img-wrapper p-relative">
                        <img
                          className="content-bg w-100"
                          src="/images/about-us/ab3.jpg"
                          alt=""
                        />
                       
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-xl-6 col-lg-6 col-md-12 order-r-1 flex-align justify-right"
            >
              <div
                className="about-map-right wow fadeInRight animated"
                
              >
                <img src="/images/countrys-map.png" alt="countrys map" />
              </div>
            </div>
          </div>
        </div>
      </section>

<Choose />

 
  <FooterPunchline  data="Discover what your customers really think with our market research surveys."/>


    </div>
  )
}

export default About

export function generateMetadata({}){
 return{ 
  title : "About Us",
  description:"",
 

}
}