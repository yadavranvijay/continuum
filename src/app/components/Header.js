"use client"
import { useState } from "react";
import Link from "next/link"
import { FaBarsStaggered} from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

const Header = () => {
  const[nav ,setNav] = useState()
  const[drop1 ,setDrop1] = useState()
  const[drop2 ,setDrop2] = useState()
  const[drop3 ,setDrop3] = useState()

  const tabbtn1 =()=>{
    setDrop1(!drop1)
    setDrop2(false)
    setDrop3(false)
    
    
    }
    const tabbtn2 =()=>{
      setDrop1(false)
      setDrop2(!drop2)
      setDrop3(false)
      
      
      }
      const tabbtn3 =()=>{
        setDrop1(false)
        setDrop2(false)
        setDrop3(!drop3)
       
        
        }
      

const navToggle=()=>{
  setNav(!nav)
}
  return (
    <div><header>
    <div className="header">
      <nav className="flex-centet-between">
        <div className="nav-left d-flex align-items-center justify-content-start">
          <div className="small-logo">
            <Link href="/"><img src="/images/Continuum_Insight_Logo.png" alt="small logo" /></Link>
          </div>
          <div className={nav ?"menu active" :"menu "}>
            <ul className="main-ul">
              <li>
                <Link href="/">What We Do </Link> 
                <span className="switch-toggle" onClick={()=>tabbtn1()}><IoIosArrowForward /></span>
                <div className={drop1 ? "drop open" : "drop"}>
                  <div className="drop-content-wrapper">
                    <ul className="main-page-link-wrapper">
                      <li>
                        <Link href="/online-survey">Online Survey <IoIosArrowForward />
                        </Link>
                        
                        <div className="sub-drop-item">
                          <ul>
                            <li>
                              <Link href="/online-survey">Online Survey</Link>
                            </li>
                            <li>
                              <Link href="/online-survey">Panel</Link>
                            </li>
                            <li>
                              <Link href="/online-survey">Online Services</Link>
                            </li>
                            <li>
                              <Link href="/online-survey">Case Studies</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/CATI">CATI <IoIosArrowForward /></Link>
                        
                        <div className="sub-drop-item">
                          <ul>
                            <li>
                              <Link href="/CATI">CATI</Link>
                            </li>
                          
                            <li>
                              <Link href="/CATI">CATI Services</Link>
                            </li>
                            <li>
                              <Link href="/CATI">Case Studies</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/phone-to-web">Phone To Web <IoIosArrowForward /></Link>
                        
                        <div className="sub-drop-item">
                          <ul>
                            <li><Link href="/phone-to-web">Phone To Web</Link></li>
                            <li><Link href="/phone-to-web">Phone To Web Services</Link></li>
                            <li>
                              <Link href="/phone-to-web">Case Studies</Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <Link href="/survey-programming">Survey Programming
                          <IoIosArrowForward /></Link>
                        
                        <div className="sub-drop-item">
                          <ul>
                            <li>
                              <Link href="/survey-programming">Survey Programming & Hosting</Link>
                            </li>
                            <li>
                              <Link href="/survey-programming">Survey Programming Services</Link>
                            </li>
                          
                            
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
  
              <li>
                <Link href="#">Who we are</Link><span className="switch-toggle" onClick={()=>tabbtn2()}><IoIosArrowForward /></span>
                <div className={drop2 ? "drop open" : "drop"}>
                  <div className="drop-content-wrapper">
                    <ul className="main-page-link-wrapper">
                      <li>
                        <Link href="/about-us">About Us </Link>
                        
                        <div className="sub-drop-item">
                          <h3 className="h4">
                            We’re the world`&apos;`s biggest Survey network.
                          </h3>
                          <p className="pb-4">
                            Continuum Insights is a global research platform that
                            offers an extensive range of high-end data solutions
                            to companies. We focus on meeting all your clients’
                            expectations by providing them with technology-driven
                            data solutions.
                          </p>
                          <Link href="/about-us" className="btn">Learn More</Link>
                        </div>
                      </li>
                      <li>
                        <Link href="/gallery">Image Gallery <IoIosArrowForward /></Link>
                        
                        <div className="sub-drop-item">
                          <ul>
                            <li><Link href="/gallery">Social work</Link></li>
                            <li><Link href="/gallery">Scholarship</Link></li>
                            <li><Link href="/gallery">Fun at Continuum Insights</Link></li>
                          </ul>
                        </div>
                      </li>
                      <li><Link href="/career">Careers </Link></li>
                      <li><Link href="/certification">Certification </Link></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <Link href="#">Coverage </Link><span className="switch-toggle" onClick={()=>tabbtn3()}><IoIosArrowForward /></span>
                <div className={drop3 ? "drop open" : "drop"}>
                  <div className="drop-content-wrapper">
                    <ul className="main-page-link-wrapper">
                      <li>
                        <Link href="/coverage">Coverage</Link>
                        
                        <div className="sub-drop-item">
                          <h3 className="h4">
                            Access millions of respondents all over the globe.
                          </h3>
                          <p className="pb-4">
                            Quality responses begin and end with verified,
                            double-opted in members that choose to engage in
                            online studies. Quest leverages many types of sample
                            sources when recruiting respondents
                          </p>
                          <Link href="/coverage" className="btn">Learn More</Link>
                        </div>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </li>
              <li><Link href="/contact-us">Contact</Link></li>
            </ul>
          </div>
        </div>
        <ul className="mb-0 me-4">
          <li><Link className="panel-link" href="http://www.websamp.com/">Panel</Link></li>
        </ul>
  
        <div className="bar">
        <span onClick={() =>navToggle()}><FaBarsStaggered/></span>
        </div>
      </nav>
    </div>
  </header>
 </div>
  )
}

export default Header