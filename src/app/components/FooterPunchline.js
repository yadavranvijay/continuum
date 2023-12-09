

const FooterPunchline = ({data}) => {
  return (
    <div>
    
    <section className="py-5 location-wrapper">
    <div className="container">
      <form action="https://formspree.io/f/xjvdnnvw" method="POST">
        <div className="row justify-content-between flex-wrap-reverse">
          <div className="col-md-5  home-form">
            <div className="row ">
              <div className="col-12">
                <input type="text" id="firstName" name="firstName" className="form-control" placeholder="First Name" />
              </div>
              <div className="col-12 my-3">
                <input type="text" id="lastName" name="lastName" className="form-control" placeholder="Last Name" />
              </div>
              <div className="col-12 my-3">
                <input type="email" id="email" name="email" className="form-control" placeholder="Your Email" />
              </div>

              <div className="col-12 my-3">
                <input type="text" id="company" name="company" className="form-control" placeholder="Company Name" />
              </div>
            </div>

            <div className="row">
              <div className="col-12 my-3">
                <textarea className="form-control" rows="4" name="message" placeholder="Message"
                  id="floatingtextarea"></textarea>
              </div>
            </div>
            <div className="mt-0  d-md-none d-inline-block  mb-3">
              <button className="btn" type="submit">Submit</button>
            </div>
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="-heading-wrapper">
              <h2 className="section-subheading">
                {data}
              </h2>
              <div className="mt-0 mt-md-5 d-md-inline d-none">
                <button className="btn" type="submit">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
    </div>
  )
}

export default FooterPunchline