

const Banner = ({ Name, image, heading, para }) => {
  return (
    <div>
    <div className="online-banner p-relative of-hidden">
      <div className="bg-img">
        <img src={image} alt="" />
      </div>
      <div className="image-shadow p-relative">
        <div className="costum-container">
          <p className="p-relative page-name pb-2 mt-5 Bold">{Name}</p>
          <div className="row">
            <div className="col-md-6">
              <div className="d-flex align-items-center c-wrapper">
                <div className="wrapper banner-color">
                  <h1 className="p-relative page-heading mt-4">
                    <span className="c-1">{
                      heading
                    } </span>
                   
                  </h1>
                  <p className="banner-color mt-4"  style={{ fontFamily: 'Gilroy-Light' }}>
                  {
                    para
                  }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  )
}

export default Banner