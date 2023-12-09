import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import './styles/slick.css'
import './styles/slick-theme.css'
import FooterPunchline from './components/FooterPunchline'
import HomeCaseStudies from './components/HomeCaseStudies'
import ReviewSlider from './components/ReviewSlider'
import HomeServices from './components/HomeServices'
import HomeBanner from './components/HomeBanner'

export default function Home() {
  return (
    <main className="page-content">
 
    <section>
    <HomeBanner />
  </section>

  <HomeServices />

  <section>
  <div className="container home-about ">
    <div className="row px-md-5 py-4 flex-wrap-reverse align-content-center d-flex">
      <div className="col-lg-8 col-sm-6  ">
        <div className="wrapper">
          <h2>
            Global research platform, Continuum Insights, provides
            tech-driven data solutions for competitive edge in 40
            countries.
          </h2>
          <div className="mt-5">
            <Link className="btn-white" href="/about-us">READ MORE</Link>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-6 mb-3 mb-sm-0">
        <figure>
          <img src="/images/home-about.jpg" alt="" />
        </figure>
      </div>
    </div>
  </div>
</section>


<section className="py-5 our-purpose-wrapper">
<div className="container">
  <div className="our-purpose p-5">
    <div className="wrapper text-center">
      <h2 className="section-heading">Our Purpose:</h2>
      <p className="section-dece-reg">
        Empowering informed decisions through comprehensive market
        research and insightful online surveys.
      </p>
    </div>
  </div>
</div>
</section>
<section className="differentiator py-5  side-space">
      <div className="p-relative">
        <div className="heading">
          <h2 className="mb-2 section-heading text-center">Case Studies</h2>
        </div>
      <HomeCaseStudies />
      </div>
    </section>

    <section className="career bg-grey">
      <div className="container">
        <div className="row py-5">
          <div className="col-12">
            <div className="heading text-center">
              <h2 className="section-heading">Testimonial</h2>
              <p className="section-dece-light w-75 mx-auto">
                Clients praise Continuum Insights for transformative data
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="careers-img-container position-relative">
              <div className="careers-img-wrapper">
                <img alt="Life at continuuminsights" className="" src="/images/home/testimonial.jpg" />
              </div>
              <div className="clint-says">
                <div className="our-peopels-wrapper">
                  <div className="our-peopels-heading">
                    <p className="text-center">WHAT OUR PEOPLE SAY</p>
                  </div>
                  <div className="review-slider">
                    <ReviewSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="pt-5"><FooterPunchline  data="Your Gateway to Comprehensive Online Surveys and Market
Research."/></div>

    </main>
  )
}
