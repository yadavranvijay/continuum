"use client"

import React, { useEffect, useState } from 'react';

const GalleryPage = () => {
  const products = {
    data: [
      { category: "Social", image: "/images/gallrey/Socail1.jpg" },
      {
        category: "Social",
        image: "/images/gallrey/socail4.jpg",
      },
      {
        category: "Social",
        image: "/images/gallrey/social5.jpg",
      },
      { category: "spons", image: "/images/gallrey/spons1.jpg" },
      {
        category: "Fun",
        image: "/images/gallrey/fun1.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g1.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g2.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g3.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g4.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g5.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g6.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g7.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g8.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g9.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g10.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g11.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g12.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g13.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g14.jpg",
      },


      {
        category: "Fun",
        image: "/images/gallrey/g15.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g16.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g17.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g18.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g19.jpg",
      },
      {
        category: "Fun",
        image: "/images/gallrey/g20.jpg",
      },
     
      {
        category: "spons",
        image: "/images/gallrey/spons2.jpg",
      },
      {
        category: "Socail",
        image: "/images/gallrey/socail2.jpg",
      },
      {
        category: "Social",
        image: "/images/gallrey/social3.jpg",
      },
      {
        category: "spons",
        image: "/images/gallrey/spons3.jpg",
      },
     
      {
        category: "Fun",
        image: "/images/gallrey/fun3.jpg",
      },
      {
        category: "spons",
        image: "/images/gallrey/spons4.jpg",
      },
     
      {
        category: "Fun",
        image: "/images/gallrey/fun4.jpg",
      },
    
      {
        category: "Fun",
        image: "/images/gallrey/fun5.jpg",
      },
     
     
    ],
  };

const [allData ,setAllData] =useState(products.data)
  const [filter, setFilter] = useState( );
  const [popupImage, setPopupImage] = useState(null);

  

  // const filterProduct = (value) => {
  //   const updateItems =products.data.filter((cruElem) =>{
  //     return cruElem.category ===value
  //   })
  //   setAllData(updateItems)
  // };
  const filterProduct = (value) => {
    setFilter(value);
    const updateItems = value === 'all' ? products.data : products.data.filter((cruElem) => cruElem.category === value);
    setAllData(updateItems);
  };

  const handleImageClick = (image) => {
    setPopupImage(`${image}`);
   
  };

  const closePopup = () => {
    setPopupImage(null);
  };

  return (
    <div className="page-content">
      <div className="gallery-section">
        <div className="container py-5">
          <h2 className="text-center">Our Image Gallery</h2>
          <div className="type-wrapper mt-4">
            <ul className="flex-centet-center gallery-link-wrapper">
              <li className={`opt-button ${filter == 'all' ? 'active' : ''}`}>
                <div className="type-link" onClick={() => filterProduct("all")}>
                  <span>All</span>
                </div>
              </li>
              <li className={`opt-button ${filter == 'Social' ? 'active' : ''}`}>
                <div className="type-link" onClick={() => filterProduct('Social')}>
                  <span>Social Works</span>
                </div>
              </li>
              <li className={`opt-button ${filter == 'Sponsorship' ? 'active' : ''}`}>
                <div className="type-link" onClick={() => filterProduct('spons')}>
                  <span>Sponsorship</span>
                </div>
              </li>
              <li className={`opt-button ${filter == 'Fun' ? 'active' : ''}`}>
              <div className="type-link" onClick={() => filterProduct('Fun')}>
                <span>Fun at Continuum</span>
              </div>
            </li>
            </ul>
          </div>
          <div className="row" id="products">
            {allData.map((item, index) => (
              <div key={index} className={`col-md-3 col-sm-6 py-3 prowrap ${item.category} `}>
                <div className="img g-img" onClick={() => handleImageClick(item.image)}>
                  <img src={item.image} alt={`Image ${index}`} />
                </div>
              </div>
            ))}
          </div>
          {popupImage && (
            <div className="popup" onClick={closePopup}>
              <span>&times;</span>
              <img src={popupImage} alt="Popup Image" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
