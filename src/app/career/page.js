import React from 'react'

const page = () => {
  return (
    <div className="page-content">
        <div className="current-opning py-5 bg-grey">

            <div className="container">
                <div className="heading text-center pb-4">
                    <p>COME JOIN US</p>
                    <h2 className="tp-title-sm mb-3">Current Openings</h2>
                </div>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Sales Manager
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p><b>Job Summary</b></p>
                                <p>
                                    We are looking for a Sales Manager to lead our sales team. The ideal candidate should have 2-5 years of experience in sales and a proven track record of meeting sales targets. The Sales Manager will be responsible for developing and implementing sales strategies, managing the sales team, and building strong relationships with clients. The candidate should have excellent communication and leadership skills.
                                </p>
                               
                                <p><b>Required Candidate Profile</b></p>
                                <ul className="list-style">
                                    <li>Excellent Communication Skills</li>
                                    <li>Convincing personality</li>
                                    <li>Working knowledge of PPTs, MS- Excel</li>
                                    <li>Available for the duration of three months</li>
                                    <li>2020 &amp; 2021 batches from relevant educational background preferred</li>
                                </ul>
                               
                                <p><b>Type:</b> Fixed Stipend paid + incentive(performance/result based)</p>
                                
                             
                                <p><b>Office Location:</b>3080 Yonge Street ,Toronto, ONTARIO M4N 3N1</p>
                                
                                <a className="btn" href="#application-form">
                                    Apply Here <i className="ms-3 fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Sales Executive
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p><b>Job Summary</b></p>
                                <p>
                                    We are looking for a Sales Executive to join our sales team. The ideal candidate should have 0-2 years of experience in sales and a passion for selling. The Sales Executive will be responsible for identifying new leads, maintaining customer relationships, and promoting our products. The candidate should have excellent communication and negotiation skills.
                                </p>
                                
                                <p><b>Type:</b> Fixed Stipend paid + incentive(performance/result based)</p>
                                
                             
                                <p><b>Office Location:</b> 5th Floor, 501, JMD Megapolis IT Park, Sohna Road, Sector 48, Gurugram, Gurugram, Haryana, 122018</p>

                                <a className="btn" href="#application-form">
                                    Apply Here <i className="ms-3 fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>




        <div className="career-form-wrapper py-5 " id="application-form">
            <div className="container">

                <h2 className="text-center">Application Form</h2>
                <form className=" needs-validation">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <input type="text" className="form-control" id="name" placeholder="Complete Name"
                                    name="name" required />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <input type="email" className="form-control" id="email" placeholder="Email Address"
                                    name="email" />

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <input type="text" className="form-control" id="number" placeholder="Contact No."
                                    name="number" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <input type="file" name="upload-resume" size="40" className=" form-control"
                                    accept=".jpg,.jpeg,.png,.gif,.pdf,.doc,.docx,.ppt,.pptx,.odt,.avi,.ogg,.m4a,.mov,.mp3,.mp4,.mpg,.wav,.wmv"
                                    aria-required="true" aria-invalid="false" required />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <input type="text" className="form-control" id="job" placeholder="Job Title" name="job"/>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <input type="text" className="form-control" id="Current-ctc" placeholder="Current CTC"
                                    name="Current-ctc"/>

                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="p-relative  form-input-wrapper mb-3 mt-3">
                                <input type="text" className="form-control" id="expected" placeholder="Expected CTC"
                                    name="expected"/>

                            </div>
                        </div>

                        <div className="col">
                            <div className="p-relative  form-input-wrapper">
                                <textarea className="form-control" id="comment" placeholder="Write Your Message"
                                    name="text"></textarea>

                            </div>
                        </div>

                    </div>
                    <button className="btn"> Submit</button>
                </form>
            </div>



        </div>

    </div>
  )
}

export default page

export function generateMetadata({}){
    return{ 
     title : "Career",
     description:"",
    
   
   }
   }