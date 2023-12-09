import Banner from '../components/Banner'

const Contact = () => {
    const bannerData = {
        Name: 'CONTACT US',
        image: '/images/contact-banner.jpg',
        heading: 'Get in Touch with Continuum Insights',
        para:" Reach out to us for inquiries, collaborations, or simply to connect. Your journey towards insightful solutions begins here. Let's build a continuum of possibilities together.",
      };
  return (
    <div  className="page-content">
    <Banner 
   {...bannerData} />
   <div className="container-fluid   contact">
   <div className="row mt-sm-5  ">
     <div className="col contect-detail">
       <div className="">
         <h2 className="mb-5">Mail us</h2>
         <form action="form/form-submission.php" method="POST" onsubmit="return validateform()">
           <div className="row my-4 mx-0">
             <div className="col px-0">
               <input type="text" id="first-name" name="first-name" className="form-control" placeholder="First Name"/>
             </div>
             <div className="col">
               <input type="text" id="last-name" name="last-name" className="form-control" placeholder="Last Name"/>
             </div>
           </div>
           <div className="row mx-0">
             <div className="col px-0 ">
               <input type="email" id="email" name="email" className="form-control" placeholder="Your Email"/>
             </div>
             <div className="col">
               <input type="text" id="company" name="company" className="form-control" placeholder="Company Name"/>
             </div>
           </div>
           <div className="row my-4 me-0">
             <div className="col pl-0">
               <textarea className="form-control " rows="4" name="message" placeholder="Message"
                 id="floatingtextarea"></textarea>
             </div>
           </div>
           <div className="g-recaptcha w-100 my-4" id="rcaptcha" data-sitekey="6LdbQtwhAAAAALN3z85OMMFIFWupf66VgCZqvljQ">
           </div>
           
           <input className="submit-btn" type="submit" value="Submit" />
           <p className="error" id="error"></p>
         </form>
       </div>
     </div>

     <div className="col-md-5 pr-5 Contact-info">
       <h2 className="mb-5">Contact Info</h2>
       <ul>
         <li className="d-flex mb-3">
           <span className="icon-box">
             <img className="icon-img" src="/images/icons/phone.png" alt="phone" />
           </span><a href="tel:01244221101"> 0124 422 1101</a>
         </li>
         <li className="d-flex my-4">
           <span className="icon-box">
             <img className="icon-img" src="/images/icons/envelope.png" alt="envelope" />
           </span><a href="mailto:rfq@continuuminsights.com">rfq@continuuminsights.com</a>
         </li>
         <li className="d-flex  mt-5">
           <span className="icon-box">
             <img className="icon-img" src="/images/icons/location.png" alt="location" />
           </span>
           
             <p> 5th Floor, 501, JMD Megapolis IT Park, Sohna Road,
               Sector 48, Gurugram, Gurugram, Haryana, 122018</p>
         </li>
         <li className="d-flex  mt-5">
           <span className="icon-box">
             <img className="icon-img" src="/images/icons/location.png" alt="location" />
           </span>
          
             <p> Gopalakrishna complex 45/3, M Residency Road, Mahatma
               Gandhi Rd, Bengaluru, India 560025</p>
         </li>
       </ul>
     </div>
   </div>
 </div>
    
    
    </div>
  )
}

export default Contact
export function generateMetadata({}){
  return{ 
   title : "Contact Us",
   description:"",
   
 }
 }