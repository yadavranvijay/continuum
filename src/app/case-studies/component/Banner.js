import React from 'react'

const Banner = ({image , heading}) => {
  return (
    <div className="case-study-banner p-relative ">
    <div className="img-wrapper">
        <img src={image} alt="" />
    </div>
    <div className="cover">
        <div className="container banner-h ">

            <div className="text">
                <h1 className="ps-5">{heading}</h1>
            </div>

        </div>
    </div>

</div>
  )
}

export default Banner